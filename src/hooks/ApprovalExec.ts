import { aavegotchiAbi } from "@/abis/aavegotchi";
import { wearableAbi } from "@/abis/wearables";
import { TxContextType, txContextDefaultValue } from "@/types/types";
import { TxStatus } from "@/helpers/enums";
import { ApprovableAsset } from "@/types/types";
import { prepareWriteContract, writeContract, waitForTransaction } from "@wagmi/core";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { BaseError } from "viem";

export const useApprovalExec = (assetsCopy: ApprovableAsset[], setApproveTxStarted: Dispatch<SetStateAction<boolean>>): { status: TxStatus, txContext: TxContextType, assets: ApprovableAsset[] } => {
  const [assets, setAssets] = useState<ApprovableAsset[]>(assetsCopy)
  const [status, setStatus] = useState<TxStatus>(TxStatus.LOADING);
  const [txContext, setTxContext] = useState<TxContextType>(txContextDefaultValue)

  useEffect(() => {
    const processTx = async () => {
      try {
        console.log('exec approval async')
        // Make a fresh copy of state array
        // Let's prepare tx then store them in the request array.
        assetsCopy.filter(asset => asset.__typename !== 'wearable' && !asset.approved).forEach(async (asset) => {
          const preparedTx = await prepareWriteContract({
            address: process.env.NEXT_PUBLIC_AAVEGOTCHI_CONTRACT_ADDRESS,
            abi: aavegotchiAbi,
            functionName: 'approve',
            args: [
              process.env.NEXT_PUBLIC_OTC_CONTRACT_ADDRESS,
              BigInt(asset.id)
            ]
          })
          // We set up initial tx context state to display modal
          setTxContext({
            operation: `Approve transfer for ${asset.__typename} ${asset.id}`,
            hash: undefined,
            status: TxStatus.WAITING
          })
          // We call the Tx 
          const { hash } = await writeContract(preparedTx)
          // We update tx context with the hash + status
          setTxContext({
            operation: `Approve transfer for ${asset.__typename} ${asset.id}`,
            hash: hash,
            status: TxStatus.LOADING
          })


          // We wait for Tx to end
          const data = await waitForTransaction({ hash })
          if (data.status === 'success') {
            setTxContext({
              operation: `Approve transfer for ${asset.__typename} ${asset.id}`,
              hash: hash,
              status: TxStatus.SUCCESS
            })
            asset.approved = true
          } else {
            setStatus(TxStatus.ERROR)
            setApproveTxStarted(false)
            setTxContext({
              operation: `Approve transfer for ${asset.__typename} ${asset.id}`,
              hash: hash,
              status: TxStatus.ERROR
            })
          }
        })
        // Now let's check if we have some wearables to validate
        if (assetsCopy.findIndex(asset => asset.__typename === 'wearable' && !asset.approved) >= 0) {
          // We set up initial tx context state to display modal
          setTxContext({
            operation: `Approve transfer for wearables`,
            hash: undefined,
            status: TxStatus.WAITING
          })
          const preparedTx = await prepareWriteContract({
            address: process.env.NEXT_PUBLIC_WEARABLE_CONTRACT_ADDRESS,
            abi: wearableAbi,
            functionName: 'setApprovalForAll',
            args: [process.env.NEXT_PUBLIC_OTC_CONTRACT_ADDRESS, true]
          })

          // We call the Tx 
          const { hash } = await writeContract(preparedTx)

          // We update tx context with the hash + status
          setTxContext({
            operation: `Approve transfer for wearables`,
            hash: hash,
            status: TxStatus.LOADING
          })
          // We wait for Tx to end
          const data = await waitForTransaction({ hash })
          if (data.status === 'success') {
            console.log('useApprovalExec success')
            // We flag all wearables as approved
            assetsCopy.forEach(asset => {
              if (asset.__typename === 'wearable') asset.approved = true
            })
            setTxContext({
              operation: `Approve transfer for wearables`,
              hash: hash,
              status: TxStatus.SUCCESS
            })
          } else {
            setStatus(TxStatus.ERROR)
            setApproveTxStarted(false)
            setTxContext({
              operation: `Approve transfer for wearables`,
              hash: hash,
              status: TxStatus.ERROR
            })
          }
        }
        if (status !== TxStatus.ERROR) {
          setStatus(TxStatus.SUCCESS)
        }
        setAssets(assetsCopy)
      } catch (e) {
        setStatus(TxStatus.ERROR)
        setApproveTxStarted(false)
        
        let message = "An error has occured"
        if (e instanceof BaseError) {
          message = e.details
        }

        setTxContext({
          operation: message,
          hash: undefined,
          status: TxStatus.ERROR
        })
        return { status, txContext, assets }
      }
    }
    processTx()
  }, [status, setStatus, prepareWriteContract, writeContract, waitForTransaction])
  // }, [status, setStatus, cartCtx, txContext, prepareWriteContract, writeContract, waitForTransaction])
  return { status, txContext, assets }
}