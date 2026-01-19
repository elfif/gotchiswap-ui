import { gotchiswapAbi } from "@/abis/gotchiswap-abi";
import { CartContext } from "@/contexts/CartContext";
import { AssetClass, OtcWizardStatus, TxStatus } from "@/helpers/enums";
import {
  SelectableAsset,
  TxContextType,
  txContextDefaultValue,
} from "@/types/types";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import {
  useAccount,
  useContractWrite,
  useSimulateContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import {
  convertAddressType,
  convertTxStatus,
  isAddressValid,
} from "@/helpers/tools";
import { TxModal } from "@/components/specifics/modals/tx/TxModal";
import { OtcWizardContext } from "@/contexts/WizardContext";
import { useRouter } from "next/router";
import { BaseError } from "viem";

const prepareAssetsArrays = (
  assets: SelectableAsset[]
): {
  assetClasses: number[];
  assetContracts: `0x${string}`[];
  assetIds: bigint[];
  assetAmounts: bigint[];
} => {
  const assetClasses: number[] = [];
  const assetContracts: `0x${string}`[] = [];
  const assetIds: bigint[] = [];
  const assetAmounts: bigint[] = [];
  assets.forEach((asset) => {
    switch (asset.__typename) {
      case "Aavegotchi":
      case "Portal":
        assetClasses.push(AssetClass.ERC721);
        assetContracts.push(
          process.env.NEXT_PUBLIC_AAVEGOTCHI_CONTRACT_ADDRESS
        );
        assetIds.push(BigInt(asset.id));
        assetAmounts.push(BigInt(1));
        break;
      case "wearable":
        assetClasses.push(AssetClass.ERC1155);
        assetContracts.push(process.env.NEXT_PUBLIC_WEARABLE_CONTRACT_ADDRESS);
        assetIds.push(BigInt(asset.id));
        assetAmounts.push(BigInt(asset.qty));
        break;
    }
  });
  return { assetClasses, assetContracts, assetIds, assetAmounts };
};

const preparePricesArray = (
  price: number
): {
  priceClasses: number[];
  priceContracts: `0x${string}`[];
  priceIds: bigint[];
  priceAmounts: bigint[];
} => {
  const priceClasses: number[] = [];
  const priceContracts: `0x${string}`[] = [];
  const priceIds: bigint[] = [];
  const priceAmounts: bigint[] = [];
  priceClasses.push(AssetClass.ERC20);
  priceContracts.push(process.env.NEXT_PUBLIC_GHST_CONTRACT_ADDRESS);
  priceIds.push(BigInt(0));
  priceAmounts.push(BigInt(price) * BigInt(10 ** 18));
  return { priceClasses, priceContracts, priceIds, priceAmounts };
};

export const CreateOtc = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [targetWallet, setTargetWallet] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const cartCtx = useContext(CartContext);
  const [txContext, setTxContext] = useState<TxContextType>(
    txContextDefaultValue
  );

  return (
    <>
      <div className="flex flex-col gap-y-5 place-items-center">
        <p>All assets have been approved. You can now create the sale.</p>
        <div className="flex flex-col justify-center place-items-center gap-y-4 lg:gap-x-10 leading-8">
          <div className="flex flex-col md:flex-row justify-center gap-y-2 md:gap-x-5 w-full">
            <label htmlFor="address">Address</label>
            <input
              id="address"
              name="address"
              type="text"
              disabled={submitted}
              className="text-purple-950 pl-1 w-full"
              onChange={(e) => setTargetWallet(e.target.value)}
            />
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-y-2 md:gap-x-5">
            <label htmlFor="price">Price (GHST)</label>
            <input
              id="price"
              name="price"
              type="number"
              disabled={submitted}
              className="text-purple-950 pl-1"
              onChange={(e) => setPrice(parseInt(e.target.value))}
            />
          </div>
        </div>
        {price > 0 && isAddressValid(targetWallet) && (
          <TxButton
            address={targetWallet}
            price={price}
            submitted={submitted}
            setSubmitted={setSubmitted}
          />
        )}
      </div>
    </>
  );
};

const TxButton = (props: {
  address: string;
  price: number;
  submitted: boolean;
  setSubmitted: Dispatch<SetStateAction<boolean>>;
}) => {
  const cartCtx = useContext(CartContext);
  const wizardCtx = useContext(OtcWizardContext);
  const router = useRouter();
  // Get the assets & prices prepared for the tx
  const preparedAssets = prepareAssetsArrays(cartCtx.assets);
  const preparedPrices = preparePricesArray(props.price);

  // Prepare the tx
  const preparedTx = useSimulateContract({
    address: process.env.NEXT_PUBLIC_OTC_CONTRACT_ADDRESS,
    abi: gotchiswapAbi,
    functionName: "createSale",
    args: [
      preparedAssets.assetClasses,
      preparedAssets.assetContracts,
      preparedAssets.assetIds,
      preparedAssets.assetAmounts,
      preparedPrices.priceClasses,
      preparedPrices.priceContracts,
      preparedPrices.priceIds,
      preparedPrices.priceAmounts,
      convertAddressType(props.address),
    ],
  });

  // Initialize the tx
  const txWriteData = useContractWrite(preparedTx.config);

  const txWaitData = useWaitForTransactionReceipt({ hash: txWriteData.data?.hash });

  let txContext: TxContextType = {
    operation: "Create OTC offer",
    hash: "0x0",
    status: TxStatus.IDLE,
  };

  if (txWriteData.status === "loading" && txWaitData.status === "idle") {
    txContext = {
      operation: "Create OTC offer",
      hash: "0x0",
      status: TxStatus.WAITING,
    };
  }

  if (txWriteData.isError || txWaitData.isError) {
    let errorMessage = "An error has occured. Please try again.";
    if (txWriteData.error instanceof BaseError) {
      errorMessage = txWriteData.error.shortMessage;
    } else if (txWaitData.error instanceof BaseError) {
      errorMessage = txWaitData.error.shortMessage;

      txContext = {
        operation: errorMessage,
        hash: txWriteData.data?.hash,
        status: TxStatus.ERROR,
      };
      props.setSubmitted(false);
    }
  }

  if (txWriteData.isSuccess && txWaitData.isLoading) {
    txContext = {
      operation: "Create OTC offer",
      hash: txWriteData.data?.hash,
      status: TxStatus.LOADING,
    };
  }

  if (txWaitData.isSuccess) {
    router.push("/otc/success");
  }

  return (
    <div>
      <button
        className="btn-gotchi"
        disabled={
          !txWriteData.write ||
          txWriteData.status === "loading" ||
          txWriteData.status === "success"
        }
        onClick={() => {
          props.setSubmitted(true);
          txWriteData.write && txWriteData.write();
        }}
      >
        Create sale
      </button>
      <TxModal txContext={txContext} />
    </div>
  );
};
