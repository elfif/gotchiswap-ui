import ClientOnly from "@/components/generics/nextShit/ClientOnly";
import { useGotchisQuery } from "@/graphql/core/__generated__/types";
import { useGotchisSvgQuery } from "@/graphql/svg/__generated__/types";
import Link from "next/link";

const Home = () => {

  return (
    <ClientOnly>

      <div className="font-katin font-medium text-2xl">
        <p>Hello & Welcome to Gotchiswap frens!</p>
        <p>Gotchiswap is an OTC trading platform for Aavegotchi assets.</p>
        <p>The platform is free to use and takes 0 fees.</p>
        <p>
          Its goal is to provide a non custodial, trustless way for individuals
          to trade assets in an OTC fashion
        </p>
        <p>For now this is still an early version, use at your own risk !</p>
      </div>

      <div className="flex flex-row justify-center gap-x-10 pt-10">
        <Link
          href={"/otc/new"}
          className="rounded-md bg-gotchi-500 px-5 py-4 text-2xl font-semibold text-white shadow-sm hover:bg-gotchi-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gotchi-500"
        >
          Create an OTC deal
        </Link>
        <Link
          href={"/otc/sales"}
          className="rounded-md bg-gotchi-500 px-5 py-4 text-2xl font-semibold text-white shadow-sm hover:bg-gotchi-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gotchi-500"
        >
          See my deals
        </Link>
      </div>
    </ClientOnly>
  );
};

export default Home;
