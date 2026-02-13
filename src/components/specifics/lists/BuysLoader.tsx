import { useConfig } from "wagmi";
import { Loader } from "@/components/generics/loaders/Loader";
import { useBuys } from "@/hooks/Buys";
import { BuysListing } from "./BuysListing";

export const BuysLoader = () => {
 
  const config = useConfig();
  const { buys, isLoading } = useBuys(config)
     
  console.log(buys)

  if (isLoading) {
    return <div className="flex flex-row justify-start items-center gap-x-5">
    <Loader />
    <p>Loading...</p>
    </div>;
  }

  if (!buys || (buys && buys.length === 0)) {
    return <>No buys</>;
  }

  return <BuysListing buys={buys} />;
};
