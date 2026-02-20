import {
  PortalFieldsFragment,
  usePortalsQuery,
} from "@/graphql/core/__generated__/types";
import { classNames } from "@/helpers/tools";
import { PickerProps } from "@/types/types";
import { useAccount } from "wagmi";
import { PortalCard } from "../cards/PortalCard";
import { useContext } from "react";
import { CartContext } from "@/contexts/CartContext";
import { SectionTitle } from "@/components/generics/titles/SectionTitle";

export const PortalPicker = (props: PickerProps) => {
  const cartCtx = useContext(CartContext);
  const address = useAccount().address?.toLowerCase() ?? "";
  const portals = usePortalsQuery({
    variables: { owner: address },
    context: { clientName: "core" },
    fetchPolicy: "network-only",
    pollInterval: 6000,
  });

  const handleOnPickerClick = (portal: PortalFieldsFragment) => {
    if (props.enablePicker) {
      // Duplicate the state array to avoid mutating it
      const assetsCopy = [...cartCtx.assets];
      // If the asset is already in the array we will remove it
      if (
        assetsCopy.find(
          (asset) => asset.id === portal.id && asset.__typename === "Portal"
        )
      ) {
        cartCtx.setAssets(assetsCopy.filter((asset) => asset.id !== portal.id));
      } else {
        // Otherwise we will add it
        const newArray = [...cartCtx.assets];
        newArray.push(portal);
        cartCtx.setAssets(newArray);
      }
    }
  };

  return (
    <>
      {!!portals.data?.portals.length && (
        <SectionTitle>{"portAls X"}</SectionTitle>
      )}

      <div className="flex flex-row flex-wrap justify-center gap-5">
        {portals.data?.portals.map((portal) => (
          <div
            id={portal.id}
            key={portal.id}
            onClick={() => handleOnPickerClick(portal)}
            className={classNames(
              cartCtx?.assets?.findIndex(
                (asset) =>
                  asset.id === portal.id && asset.__typename === "Portal"
              ) >= 0
                ? "asset-selected"
                : "asset"
            )}
          >
            <PortalCard portal={portal} withBorders/>
          </div>
        ))}
      </div>
    </>
  );
};
