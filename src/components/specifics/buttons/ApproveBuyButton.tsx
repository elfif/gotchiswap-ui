import { ghstAbi } from "@/abis/ghst";
import {
  convertAddressType,
  createTxContext,
  readablePrice,
} from "@/helpers/tools";
import { SaleV2 } from "@/types/types";
import { Dispatch, SetStateAction, useEffect } from "react";
import {
  useContractWrite,
  useSimulateContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import { TxModal } from "../modals/tx/TxModal";

type ApproveBuyButtonProps = {
  sale: SaleV2;
  neededAllowance: bigint;
  setNeededAllowance: Dispatch<SetStateAction<bigint>>;
};

export const ApproveBuyButton = (props: ApproveBuyButtonProps) => {
  const prepareIncreaseAllowanceTx = useSimulateContract({
    address: convertAddressType(process.env.NEXT_PUBLIC_GHST_CONTRACT_ADDRESS),
    abi: ghstAbi,
    functionName: "approve",
    args: [
      convertAddressType(process.env.NEXT_PUBLIC_OTC_CONTRACT_ADDRESS),
      props.neededAllowance,
    ],
  });

  const increaseAllowanceTx = useContractWrite(
    prepareIncreaseAllowanceTx.config
  );

  const waitForTx = useWaitForTransactionReceipt({
    hash: increaseAllowanceTx.data?.hash,
  });

  // useEffect(() => {
  //   if (waitForTx.status === "success") {
  //     props.setNeededAllowance(BigInt(0));
  //   }
  // }, [waitForTx.status, props.setNeededAllowance]);

  if (waitForTx.status === "success") {
    props.setNeededAllowance(BigInt(0));
  }

  const txContext = createTxContext(
    `Approve ${readablePrice(props.neededAllowance)} GHST`,
    increaseAllowanceTx.status,
    waitForTx.status,
    increaseAllowanceTx.data?.hash,
    increaseAllowanceTx.error,
    waitForTx.error
  );

  return (
    <>
      <button
        className="btn-base"
        onClick={() => increaseAllowanceTx.write?.()}
      >
        Approve then Buy
      </button>
      <TxModal txContext={txContext} />
    </>
  );
};
