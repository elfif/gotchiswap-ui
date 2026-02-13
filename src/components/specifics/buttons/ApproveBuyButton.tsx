import { ghstAbi } from "@/abis/ghst";
import {
  convertAddressType,
  createTxContext,
  readablePrice,
} from "@/helpers/tools";
import { SaleV2 } from "@/types/types";
import { Dispatch, SetStateAction } from "react";
import {
  useWriteContract,
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
  const { data: simulateData } = useSimulateContract({
    address: convertAddressType(process.env.NEXT_PUBLIC_GHST_CONTRACT_ADDRESS),
    abi: ghstAbi,
    functionName: "approve",
    args: [
      convertAddressType(process.env.NEXT_PUBLIC_OTC_CONTRACT_ADDRESS),
      props.neededAllowance,
    ],
  });

  const { writeContract, data: hash, status: writeStatus, error: writeError } = useWriteContract();

  const waitForTx = useWaitForTransactionReceipt({
    hash,
  });

  if (waitForTx.status === "success") {
    props.setNeededAllowance(BigInt(0));
  }

  const txContext = createTxContext(
    `Approve ${readablePrice(props.neededAllowance)} GHST`,
    writeStatus,
    waitForTx.status,
    hash,
    writeError,
    waitForTx.error
  );

  return (
    <>
      <button
        className="btn-base"
        onClick={() => simulateData && writeContract(simulateData.request)}
      >
        Approve then Buy
      </button>
      <TxModal txContext={txContext} />
    </>
  );
};
