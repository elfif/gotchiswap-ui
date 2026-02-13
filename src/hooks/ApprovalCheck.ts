import { useEffect, useState, useContext } from "react";
import { ApprovableAsset } from "../types/types";
import { TxStatus } from "../helpers/enums";
import { aavegotchiAbi } from "../abis/aavegotchi";
import { wearableAbi } from "../abis/wearables";
import { multicall, type Config } from '@wagmi/core'
import { convertAddressType, isWearable } from "../helpers/tools";
import { useAccount } from "wagmi";
import { CartContext } from "@/contexts/CartContext";

const aavegotchiContract = {
  address: convertAddressType(process.env.NEXT_PUBLIC_AAVEGOTCHI_CONTRACT_ADDRESS),
  abi: aavegotchiAbi
}

const wearableContract = {
  address: convertAddressType(process.env.NEXT_PUBLIC_WEARABLE_CONTRACT_ADDRESS),
  abi: wearableAbi
}

export const useApprovalCheck = (config: Config): { status: TxStatus } => {
  const [status, setStatus] = useState<TxStatus>(TxStatus.LOADING);
  const { address } = useAccount();
  const cartCtx = useContext(CartContext);

  useEffect(() => {
    const processApproval = async () => {
      console.log('check approval async')
      const gotchis: ApprovableAsset[] = cartCtx.assets
        .filter((asset) => asset.__typename === "Aavegotchi" || asset.__typename === "Portal")

      const wearables: ApprovableAsset[] = cartCtx.assets
        .filter((asset) => isWearable(asset))

      const calls: any[] = []

      const gotchiCalls = gotchis.map((gotchi) => {
        return {
          ...aavegotchiContract,
          functionName: 'getApproved',
          args: [BigInt(gotchi.id)]
        }
      })
      calls.push(...gotchiCalls)

      if (wearables.length > 0) {
        calls.push({
          ...wearableContract,
          functionName: 'isApprovedForAll',
          args: [address, convertAddressType(process.env.NEXT_PUBLIC_OTC_CONTRACT_ADDRESS)]
        })
      }

      try {
        await multicall(config, {
          contracts: calls
        }).then((results) => {
          let isWearablesHandled = false
          const tmp: ApprovableAsset[] = []
          cartCtx.assets.forEach((asset, index) => {
            switch (asset.__typename) {
              case "wearable":
                if (!isWearablesHandled) {
                  const tmpWearables = wearables.map((wearable) => {
                    return { ...wearable, approved: results[index].result as boolean }
                  })
                  tmp.push(...tmpWearables)
                  isWearablesHandled = true
                }

                break
              case "Aavegotchi":
              case "Portal":
                tmp.push({ ...asset, approved: results[index].result === convertAddressType(process.env.NEXT_PUBLIC_OTC_CONTRACT_ADDRESS) })
                break
            }
          })
          cartCtx.setAssets(tmp)
        })
      } catch (error) {
        console.log(error)
      }
    }
    processApproval()
  }, [config, cartCtx, address]);

  return { status };
}
