import {
  GotchiFieldsFragment,
  useGotchisQuery,
} from "@/graphql/core/__generated__/types";
import { SvgFieldsFragment, useGotchisSvgQuery } from "@/graphql/svg/__generated__/types";
import { Gotchi, PickerProps } from "@/types/types";
import { classNames } from "@/helpers/tools";
import { useContext, useState } from "react";
import { useAccount } from "wagmi";
import { GotchiCard } from "../cards/GotchiCard";
import { CartContext } from "@/contexts/CartContext";
import { SectionTitle } from "@/components/generics/titles/SectionTitle";

export const GotchiPicker = (props: PickerProps) => {
  const cartCtx = useContext(CartContext);
  const address = useAccount().address?.toLowerCase() ?? "";
  const gotchis = useGotchisQuery({
    variables: { owner: address },
    context: { clientName: "core" },
    fetchPolicy: "network-only",
    pollInterval: 6000,
  });
  const ids = gotchis.data?.aavegotchis?.map((gotchi) => gotchi?.id);
  const svgs = useGotchisSvgQuery({
    variables: { ids: ids },
    context: { clientName: "svg" },
    fetchPolicy: "network-only",
    pollInterval: 6000,
    onCompleted(data) {
      const gTmp: Gotchi[] = data?.aavegotchis?.map((gotchi) => {
        const gotchiData: GotchiFieldsFragment = gotchis.data?.aavegotchis?.find(g => g?.id === gotchi?.id) as GotchiFieldsFragment;
        return {
          ...gotchiData,
          svg: data.aavegotchis?.find((svg) => svg?.id === gotchi?.id) as SvgFieldsFragment,
        };
      });
      setGotchisWithSvg(gTmp);
    },
  });

  const [gotchisWithSvg, setGotchisWithSvg] = useState<Gotchi[]>([]);



  const handlePickerClick = (gotchi: Gotchi) => {
    if (props.enablePicker) {
      // If the asset is already in the array we will remove it
      // Otherwise we will add it
      if (cartCtx.assets.find((asset) => asset.id === gotchi.id)) {
        cartCtx.setAssets(
          cartCtx.assets.filter((asset) => asset.id !== gotchi.id)
        );
      } else {
        const newArray = [...cartCtx.assets];
        newArray.push(gotchi);
        cartCtx.setAssets(newArray);
      }
    }
  };

  return (
    <>
      {!!gotchis.data?.aavegotchis.length && (
        <SectionTitle>
         {"gotchis G"}
        </SectionTitle>
      )}
      <div className="flex flex-row flex-wrap justify-center gap-5">
        {gotchisWithSvg.map((gotchi) => (
          <div
            id={gotchi.id}
            key={gotchi.id}
            onClick={() => handlePickerClick(gotchi)}
            className={classNames(
              cartCtx.assets.find(
                (asset) =>
                  asset?.id === gotchi.id && asset.__typename === "Aavegotchi"
              )
                ? "asset-selected"
                : "asset"
            )}
          >
            <GotchiCard
              gotchi={gotchi}
              withBorders
            />
          </div>
        ))}
      </div>
    </>
  );
};
