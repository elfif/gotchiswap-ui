import { ghstAbi } from "@/abis/ghst";
import { convertAddressType } from "@/helpers/tools";
import { SaleV2 } from "@/types/types";
import { useEffect, useState } from "react";
import { useAccount, useReadContract } from "wagmi";
import { BuyButton } from "./BuyButton";
import { ApproveBuyButton } from "./ApproveBuyButton";

export const CheckApproveBeforeBuyButton = (props: { sale: SaleV2 }) => {
  const priceInWei = props.sale.prices[0].amount
  const [neededAllowance, setNeededAllowance] = useState<bigint>(priceInWei);
  const { address } = useAccount();

  const { data, status, error } = useReadContract({
    address: convertAddressType(process.env.NEXT_PUBLIC_GHST_CONTRACT_ADDRESS),
    abi: ghstAbi,
    functionName: "allowance",
    args: [
      address ?? "0x0",
      convertAddressType(process.env.NEXT_PUBLIC_OTC_CONTRACT_ADDRESS),
    ]
  });

  useEffect(() => {
    if (data !== undefined && status === "success") {
      const allowance = BigInt(data);
      if (allowance < priceInWei) {
        setNeededAllowance(priceInWei);
      } else {
        setNeededAllowance(BigInt(0));
      } 
    }
  }, [data, priceInWei, status]);
  
  if (status === "error") {
    console.log(error);
    return <div>An error occured</div>;
  }

  if (status === "pending") {
    return <div>Checking GHST allowance</div>;
  }

  if (data !== undefined) {
  
    if (neededAllowance > BigInt(0)) {
      return (
        <ApproveBuyButton
          sale={props.sale}
          neededAllowance={neededAllowance}
          setNeededAllowance={setNeededAllowance}
        />
      );
    } else {
      return <BuyButton sale={props.sale} />;
    }
  }
  return <div>An error occured</div>;
};
