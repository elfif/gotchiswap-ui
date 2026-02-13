import { convertAddressType, saleItemDTO } from "@/helpers/tools"
import { SaleV2 } from "@/types/types"
import { useEffect, useState } from "react"
import { readContract, type Config } from "@wagmi/core";
import { useAccount } from "wagmi"
import { gotchiswapAbi } from "@/abis/gotchiswap-abi";

export const useSales = (config: Config): { sales: SaleV2[], isLoading: boolean } => {
  const { address } = useAccount()
  const [sales, setSales] = useState<SaleV2[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const getSales = async () => {
      if (!address) return []

      try {
        const sellerSaleCount = await readContract(config, {
          address: convertAddressType(
            process.env.NEXT_PUBLIC_OTC_CONTRACT_ADDRESS
          ),
          abi: gotchiswapAbi,
          functionName: "getSellerSalesCount",
          args: [address],
        });

        if (!sellerSaleCount) {
          return [];
        }

        const tmpSales: SaleV2[] = []

        for (let i = 0; i < sellerSaleCount; i++) {
          // We need to fetch the sales one by one
          const offer = await readContract(config, {
            address: convertAddressType(
              process.env.NEXT_PUBLIC_OTC_CONTRACT_ADDRESS
            ),
            abi: gotchiswapAbi,
            functionName: "getSale",
            args: [address, BigInt(i)],
          });

          const saleTmp: SaleV2 = {
            id: offer[0],
            index: BigInt(i),
            buyer: offer[9],
            seller: address,
            assets: [],
            prices: []
          }
          // For each sale we will convert assets and prices to SaleItem one by one.
          for (let j = 0; j < offer[1].length; j++) {
            if (offer[1][j] >= 0 && offer[1][j] <= 2) {
              saleTmp.assets.push(saleItemDTO(offer[1][j] as 0 | 1 | 2, offer[2][j], offer[3][j], offer[4][j]))
            }
          }
          for (let j = 0; j < offer[5].length; j++) {
            if (offer[5][j] >= 0 && offer[5][j] <= 2) {
              saleTmp.prices.push(saleItemDTO(offer[5][j] as 0 | 1 | 2, offer[6][j], offer[7][j], offer[8][j]))
            }
          }
          tmpSales.push(saleTmp)
        }
        setSales(tmpSales)

      } catch (e) {
        console.log(e)
        setSales([])
      }
      setIsLoading(false)
    }
    getSales()
  }, [config, address])

  return { sales, isLoading }
}
