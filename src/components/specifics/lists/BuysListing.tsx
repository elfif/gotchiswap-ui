import {
  PortalStatus,
  useGotchisByIdQuery,
  usePortalsByIdQuery,
} from "@/graphql/core/__generated__/types";
import { useGotchisSvgQuery } from "@/graphql/svg/__generated__/types";
import { AssetClass, OfferType } from "@/helpers/enums";
import { SaleV2 } from "@/types/types";
import { OfferCard } from "../cards/OfferCard";

export const BuysListing = (props: { buys: SaleV2[] }) => {
  // First we need to get all gotchi ids and portal ids from the buys
  // We grab them all at once so we do not need to multiply graph queries.
  debugger;
  const idsArray = props.buys.map((sale) =>
    sale.assets
      .filter(
        (saleItem) =>
          saleItem.class === AssetClass.ERC721 &&
          saleItem.contract.toLowerCase() ===
            process.env.NEXT_PUBLIC_AAVEGOTCHI_CONTRACT_ADDRESS.toLowerCase()
      )
      .map((saleItem) => saleItem.id.toString())
  );

  const ids = idsArray.flat();

  // We get all by id portals query
  const portalsAndGotchis = usePortalsByIdQuery({
    variables: { ids: ids },
    context: { clientName: "core" },
    skip: !ids.length,
  });

  // We filter to split between portals andd gotchis
  const gotchiIds = portalsAndGotchis.data?.portals
    .filter((portal) => portal.status === PortalStatus.Claimed)
    .map((portal) => portal.id);

  const portals = portalsAndGotchis.data?.portals.filter(
    (portal) => portal.status !== PortalStatus.Claimed   
  )

  // We grab all gotchis
  const gotchis = useGotchisByIdQuery({
    variables: { ids: gotchiIds },
    context: { clientName: "core" },
    skip: !gotchiIds?.length,
  });

  // And all svgs
  const svgs = useGotchisSvgQuery({
    variables: { ids: ids },
    context: { clientName: "svg" },
    skip: !gotchiIds?.length,
  });

  return (
    <div className='flex flex-col gap-y-10'>
      {props.buys.map((buy) => (
        <OfferCard
          key={buy.index.toString()}
          sale={buy}
          gotchis={gotchis.data?.aavegotchis ?? []}
          portals={portals ?? []}
          svgs={svgs.data?.aavegotchis ?? []}
          type={OfferType.BUY}
        />
      ))}
    </div>
  );
};
