import { gotchiswapAbi } from "@/abis/gotchiswap-abi";
import {
  convertAddressType,
  createTxContext,
} from "@/helpers/tools";
import { SaleV2 } from "@/types/types";
import {
  useWriteContract,
  useSimulateContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import { TxModal } from "../modals/tx/TxModal";
import router from "next/router";

export const BuyButton = (props: { sale: SaleV2 }) => {
  const { data: simulateData } = useSimulateContract({
    address: convertAddressType(process.env.NEXT_PUBLIC_OTC_CONTRACT_ADDRESS),
    abi: gotchiswapAbi,
    functionName: "concludeSale",
    args: [props.sale.index],
  });

  const { writeContract, data: hash, status: writeStatus, error: writeError } = useWriteContract();

  const waitForTx = useWaitForTransactionReceipt({
    hash,
  });

  if (waitForTx.isSuccess) {
    router.push("/otc/sales/success");
  }

  const txContext = createTxContext(
    "LFG ! Buy It !",
    writeStatus,
    waitForTx.status,
    hash,
    writeError,
    waitForTx.error
  );

  return (
    <>
      <button className="btn-base" onClick={() => simulateData && writeContract(simulateData.request)}>
        LFG ! Buy It !
      </button>
      <TxModal txContext={txContext} />
    </>
  );
};
