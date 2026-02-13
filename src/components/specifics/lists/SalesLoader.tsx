import { useAccount, useConfig } from "wagmi";
import { useSales } from "@/hooks/Sales";
import { SalesListing } from "./SalesListing";
import { Loader } from "@/components/generics/loaders/Loader";

export const SalesLoader = () => {
 
  const { address, isConnected } = useAccount();
  const config = useConfig();

  const { sales, isLoading } = useSales(config)
 
  if (isLoading) {
    return <div className="flex flex-row justify-start items-center gap-x-5">
    <Loader />
    <p>Loading </p>
    </div>;
  }

  if (!sales || (sales && sales.length === 0)) {
    return <>No Sales</>;
  }

  return <SalesListing sales={sales} />;
};
