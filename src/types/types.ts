import { GotchiFieldsFragment, PortalFieldsFragment } from "@/graphql/core/__generated__/types";
import { SvgFieldsFragment } from "@/graphql/svg/__generated__/types";
import { TxStatus } from "@/helpers/enums";

export type SelectableAsset = Gotchi | Wearable | PortalFieldsFragment /* | GotchiFieldsFragment */
export type PickerProps = {
  enablePicker: boolean;
};

export type Wearable = {
  id: number
  name: string
  qty: number,
  uri: string
  __typename: "wearable"
}

export type Sale = {
  id: bigint
  priceInWei: bigint
  assetId: bigint
  seller: string
  index: bigint
}

export type Gotchi = GotchiFieldsFragment & {
  svg: SvgFieldsFragment
}

export type ApprovableWearable = Wearable & { approved?: boolean }
export type ApprovableGotchi = Gotchi & { approved?: boolean }
export type ApprovablePortal = PortalFieldsFragment & { approved?: boolean }
export type ApprovableAsset = ApprovableGotchi | ApprovableWearable | ApprovablePortal

export type SaleContractResponse = [bigint, bigint, bigint, `0x${string}`]

export type SaleWithAsset = Sale & { assets: SelectableAsset[] }

// Create the context type. It contains all data needed to know the status of an ongoing Tx
export type TxContextType = {
  operation: string
  hash: `0x${string}` | undefined;
  status: TxStatus
  //status: "error" | "idle" | "waiting" | "loading" | "success" | undefined;
};

// Empty context value for setup
export const txContextDefaultValue: TxContextType = {
  operation: '',
  hash: undefined,
  status: TxStatus.IDLE
};
