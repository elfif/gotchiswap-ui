import { Gotchi, SaleV2, Wearable } from "@/types/types";
import {
  getWearableUri,
  readablePrice,
  shortenAddress,
} from "@/helpers/tools";
import { AbortSaleButton } from "../buttons/AbortSaleButton";
import {
  GotchiFieldsFragment,
  PortalFieldsFragment,
} from "@/graphql/core/__generated__/types";
import { SvgFieldsFragment } from "@/graphql/svg/__generated__/types";
import { AssetClass, OfferType } from "@/helpers/enums";
import { wearableNames } from "@/data/wearables";
import { GotchiCard } from "./GotchiCard";
import { PortalCard } from "./PortalCard";
import { WearableCard } from "./WearableCard";
import { CheckApproveBeforeBuyButton } from "../buttons/CheckApproveBeforeBuyButton";

type OfferCardProps = {
  sale: SaleV2;
  portals: PortalFieldsFragment[];
  gotchis: GotchiFieldsFragment[];
  svgs: SvgFieldsFragment[];
  type: OfferType;
};

export const OfferCard = (props: OfferCardProps) => {
  const gotchis: Gotchi[] = [];
  const portals: PortalFieldsFragment[] = [];
  const wearables: Wearable[] = [];
  const price = readablePrice(props.sale.prices[0].amount);
  // We need to regroup and map assets from the sale object to the gotchis and portals.
  // We also need to map wearables to Wearable object.
  // That way all sale item can be displayed using existing cards.
  debugger;
  for (const asset of props.sale.assets) {
    if ( asset.class === AssetClass.ERC721 && asset.contract.toLowerCase() === process.env.NEXT_PUBLIC_AAVEGOTCHI_CONTRACT_ADDRESS.toLowerCase() ) {
      const portal = props.portals.find(
        (portal) => portal.id === asset.id.toString()
      );
      if (portal) {
        portals.push(portal);
      } else {
        const gotchi = props.gotchis.find(
          (gotchi) => gotchi.id === asset.id.toString()
        );
        const svg = props.svgs.find((svg) => svg.id === asset.id.toString());
        if (gotchi && svg) {
          gotchis.push({ ...gotchi, svg: svg });
        }
      }
    } else if (
      asset.class === AssetClass.ERC1155 &&
      asset.contract === process.env.NEXT_PUBLIC_WEARABLE_CONTRACT_ADDRESS
    ) {
      const id = parseInt(asset.id.toString());
      wearables.push({
        id: id,
        name: wearableNames[id],
        qty: parseInt(asset.amount.toString()),
        uri: getWearableUri(id),
        __typename: "wearable",
      });
    }
  }

  return (
    <div className="flex flex-row flex-wrap gap-6">
      <div key="infos" className="flex flex-col gap-2 place-content-start">
        {props.type === OfferType.BUY && (
          <>
            <div>{`Seller ${shortenAddress(props.sale.seller)}`}</div>
            <div className="text-center">{`price: ${price} GHST`}</div>
            <CheckApproveBeforeBuyButton sale={props.sale} />
          </>
        )}
        {props.type === OfferType.SALE && (
          <>
            <div>{`Buyer ${shortenAddress(props.sale.buyer)}`}</div>
            <div className="text-center">{`price: ${price} GHST`}</div>
            <AbortSaleButton sale={props.sale} />
          </>
        )}

      </div>
      {gotchis.map((gotchi) => (
        <GotchiCard
          key={gotchi.id}
          gotchi={gotchi}
          withBackground
          withBorders
        />
      ))}
      {portals.map((portal) => (
        <PortalCard
          key={portal.id}
          portal={portal}
          withBackground
          withBorders
        />
      ))}
      {wearables.map((wearable) => (
        <WearableCard
          key={wearable.id}
          wearable={wearable}
          withBackground
          withBorders
        />
      ))}
    </div>
  );
};
