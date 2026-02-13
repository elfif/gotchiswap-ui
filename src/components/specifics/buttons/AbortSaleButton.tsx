import { gotchiswapAbi } from "@/abis/gotchiswap-abi";
import { convertAddressType, createTxContext } from "@/helpers/tools";
import { SaleV2 } from "@/types/types";
import {
  useWriteContract,
  useSimulateContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import { TxModal } from "../modals/tx/TxModal";
import { useRouter } from "next/router";

export const AbortSaleButton = (props: { sale: SaleV2 }) => {
  const router = useRouter();
  const { data: simulateData } = useSimulateContract({
    address: convertAddressType(process.env.NEXT_PUBLIC_OTC_CONTRACT_ADDRESS),
    abi: gotchiswapAbi,
    functionName: "abortSale",
    args: [props.sale.index],
  });

  const { writeContract, data: hash, status: writeStatus, error: writeError } = useWriteContract();

  const txWaitData = useWaitForTransactionReceipt({
    hash,
  });
  
  if (txWaitData.isSuccess) {
    router.reload();
  }

  const txContext = createTxContext(
    "Abort OTC Sale",
    writeStatus,
    txWaitData.status,
    hash,
    writeError,
    txWaitData.error
  )

  return (
    <>
      <button className="btn-base" onClick={() => simulateData && writeContract(simulateData.request)}>
        Abort Sale
      </button>
      <TxModal txContext={txContext} />
    </>
  );
};
