import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
};

export type Aavegotchi = {
  __typename?: 'Aavegotchi';
  activeListing?: Maybe<Scalars['BigInt']['output']>;
  baseRarityScore: Scalars['BigInt']['output'];
  /** Block in which the Aavegotchi was claimed. Should coincide with createdAt */
  claimedAt?: Maybe<Scalars['BigInt']['output']>;
  collateral: Scalars['Bytes']['output'];
  /** Block in which the Aavegotchi entity was created */
  createdAt?: Maybe<Scalars['BigInt']['output']>;
  equippedSetID?: Maybe<Scalars['BigInt']['output']>;
  equippedSetName?: Maybe<Scalars['String']['output']>;
  equippedWearables: Array<Scalars['Int']['output']>;
  escrow: Scalars['Bytes']['output'];
  experience: Scalars['BigInt']['output'];
  gotchiId: Scalars['BigInt']['output'];
  hauntId: Scalars['BigInt']['output'];
  historicalPrices?: Maybe<Array<Scalars['BigInt']['output']>>;
  id: Scalars['ID']['output'];
  kinship: Scalars['BigInt']['output'];
  lastInteracted: Scalars['BigInt']['output'];
  lending?: Maybe<Scalars['BigInt']['output']>;
  level: Scalars['BigInt']['output'];
  listings: Array<Erc721Listing>;
  locked: Scalars['Boolean']['output'];
  minimumStake: Scalars['BigInt']['output'];
  modifiedNumericTraits: Array<Scalars['Int']['output']>;
  modifiedRarityScore: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  nameLowerCase: Scalars['String']['output'];
  numericTraits: Array<Scalars['Int']['output']>;
  originalOwner?: Maybe<User>;
  owner?: Maybe<User>;
  portal: Portal;
  possibleSets?: Maybe<Scalars['BigInt']['output']>;
  randomNumber: Scalars['BigInt']['output'];
  stakedAmount: Scalars['BigInt']['output'];
  status: Scalars['BigInt']['output'];
  timesTraded: Scalars['BigInt']['output'];
  toNextLevel: Scalars['BigInt']['output'];
  usedSkillPoints: Scalars['BigInt']['output'];
  withSetsNumericTraits?: Maybe<Array<Scalars['Int']['output']>>;
  withSetsRarityScore?: Maybe<Scalars['BigInt']['output']>;
};


export type AavegotchiListingsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc721Listing_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Erc721Listing_Filter>;
};

export type AavegotchiOption = {
  __typename?: 'AavegotchiOption';
  baseRarityScore: Scalars['Int']['output'];
  collateralType: Scalars['Bytes']['output'];
  /** AavegotchiOption id is composed by <PORTAL-ID>-<GOTCHI-OPTION> */
  id: Scalars['ID']['output'];
  minimumStake: Scalars['BigInt']['output'];
  numericTraits: Array<Scalars['Int']['output']>;
  owner: User;
  portal: Portal;
  portalOptionId: Scalars['Int']['output'];
  randomNumber: Scalars['BigInt']['output'];
};

export type AavegotchiOption_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AavegotchiOption_Filter>>>;
  baseRarityScore?: InputMaybe<Scalars['Int']['input']>;
  baseRarityScore_gt?: InputMaybe<Scalars['Int']['input']>;
  baseRarityScore_gte?: InputMaybe<Scalars['Int']['input']>;
  baseRarityScore_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  baseRarityScore_lt?: InputMaybe<Scalars['Int']['input']>;
  baseRarityScore_lte?: InputMaybe<Scalars['Int']['input']>;
  baseRarityScore_not?: InputMaybe<Scalars['Int']['input']>;
  baseRarityScore_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  collateralType?: InputMaybe<Scalars['Bytes']['input']>;
  collateralType_contains?: InputMaybe<Scalars['Bytes']['input']>;
  collateralType_gt?: InputMaybe<Scalars['Bytes']['input']>;
  collateralType_gte?: InputMaybe<Scalars['Bytes']['input']>;
  collateralType_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  collateralType_lt?: InputMaybe<Scalars['Bytes']['input']>;
  collateralType_lte?: InputMaybe<Scalars['Bytes']['input']>;
  collateralType_not?: InputMaybe<Scalars['Bytes']['input']>;
  collateralType_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  collateralType_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  minimumStake?: InputMaybe<Scalars['BigInt']['input']>;
  minimumStake_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minimumStake_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minimumStake_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minimumStake_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minimumStake_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minimumStake_not?: InputMaybe<Scalars['BigInt']['input']>;
  minimumStake_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  numericTraits?: InputMaybe<Array<Scalars['Int']['input']>>;
  numericTraits_contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  numericTraits_contains_nocase?: InputMaybe<Array<Scalars['Int']['input']>>;
  numericTraits_not?: InputMaybe<Array<Scalars['Int']['input']>>;
  numericTraits_not_contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  numericTraits_not_contains_nocase?: InputMaybe<Array<Scalars['Int']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AavegotchiOption_Filter>>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_?: InputMaybe<User_Filter>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_gt?: InputMaybe<Scalars['String']['input']>;
  owner_gte?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_lt?: InputMaybe<Scalars['String']['input']>;
  owner_lte?: InputMaybe<Scalars['String']['input']>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  portal?: InputMaybe<Scalars['String']['input']>;
  portalOptionId?: InputMaybe<Scalars['Int']['input']>;
  portalOptionId_gt?: InputMaybe<Scalars['Int']['input']>;
  portalOptionId_gte?: InputMaybe<Scalars['Int']['input']>;
  portalOptionId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  portalOptionId_lt?: InputMaybe<Scalars['Int']['input']>;
  portalOptionId_lte?: InputMaybe<Scalars['Int']['input']>;
  portalOptionId_not?: InputMaybe<Scalars['Int']['input']>;
  portalOptionId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  portal_?: InputMaybe<Portal_Filter>;
  portal_contains?: InputMaybe<Scalars['String']['input']>;
  portal_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  portal_ends_with?: InputMaybe<Scalars['String']['input']>;
  portal_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  portal_gt?: InputMaybe<Scalars['String']['input']>;
  portal_gte?: InputMaybe<Scalars['String']['input']>;
  portal_in?: InputMaybe<Array<Scalars['String']['input']>>;
  portal_lt?: InputMaybe<Scalars['String']['input']>;
  portal_lte?: InputMaybe<Scalars['String']['input']>;
  portal_not?: InputMaybe<Scalars['String']['input']>;
  portal_not_contains?: InputMaybe<Scalars['String']['input']>;
  portal_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  portal_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  portal_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  portal_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  portal_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  portal_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  portal_starts_with?: InputMaybe<Scalars['String']['input']>;
  portal_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  randomNumber?: InputMaybe<Scalars['BigInt']['input']>;
  randomNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  randomNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  randomNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  randomNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  randomNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  randomNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  randomNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum AavegotchiOption_OrderBy {
  BaseRarityScore = 'baseRarityScore',
  CollateralType = 'collateralType',
  Id = 'id',
  MinimumStake = 'minimumStake',
  NumericTraits = 'numericTraits',
  Owner = 'owner',
  OwnerId = 'owner__id',
  Portal = 'portal',
  PortalOptionId = 'portalOptionId',
  PortalActiveListing = 'portal__activeListing',
  PortalBoughtAt = 'portal__boughtAt',
  PortalClaimedAt = 'portal__claimedAt',
  PortalGotchiId = 'portal__gotchiId',
  PortalHauntId = 'portal__hauntId',
  PortalId = 'portal__id',
  PortalOpenedAt = 'portal__openedAt',
  PortalStatus = 'portal__status',
  PortalTimesTraded = 'portal__timesTraded',
  RandomNumber = 'randomNumber'
}

export type Aavegotchi_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  activeListing?: InputMaybe<Scalars['BigInt']['input']>;
  activeListing_gt?: InputMaybe<Scalars['BigInt']['input']>;
  activeListing_gte?: InputMaybe<Scalars['BigInt']['input']>;
  activeListing_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  activeListing_lt?: InputMaybe<Scalars['BigInt']['input']>;
  activeListing_lte?: InputMaybe<Scalars['BigInt']['input']>;
  activeListing_not?: InputMaybe<Scalars['BigInt']['input']>;
  activeListing_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Aavegotchi_Filter>>>;
  baseRarityScore?: InputMaybe<Scalars['BigInt']['input']>;
  baseRarityScore_gt?: InputMaybe<Scalars['BigInt']['input']>;
  baseRarityScore_gte?: InputMaybe<Scalars['BigInt']['input']>;
  baseRarityScore_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  baseRarityScore_lt?: InputMaybe<Scalars['BigInt']['input']>;
  baseRarityScore_lte?: InputMaybe<Scalars['BigInt']['input']>;
  baseRarityScore_not?: InputMaybe<Scalars['BigInt']['input']>;
  baseRarityScore_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  claimedAt?: InputMaybe<Scalars['BigInt']['input']>;
  claimedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  claimedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  claimedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  claimedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  claimedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  claimedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  claimedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateral?: InputMaybe<Scalars['Bytes']['input']>;
  collateral_contains?: InputMaybe<Scalars['Bytes']['input']>;
  collateral_gt?: InputMaybe<Scalars['Bytes']['input']>;
  collateral_gte?: InputMaybe<Scalars['Bytes']['input']>;
  collateral_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  collateral_lt?: InputMaybe<Scalars['Bytes']['input']>;
  collateral_lte?: InputMaybe<Scalars['Bytes']['input']>;
  collateral_not?: InputMaybe<Scalars['Bytes']['input']>;
  collateral_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  collateral_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  createdAt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  equippedSetID?: InputMaybe<Scalars['BigInt']['input']>;
  equippedSetID_gt?: InputMaybe<Scalars['BigInt']['input']>;
  equippedSetID_gte?: InputMaybe<Scalars['BigInt']['input']>;
  equippedSetID_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  equippedSetID_lt?: InputMaybe<Scalars['BigInt']['input']>;
  equippedSetID_lte?: InputMaybe<Scalars['BigInt']['input']>;
  equippedSetID_not?: InputMaybe<Scalars['BigInt']['input']>;
  equippedSetID_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  equippedSetName?: InputMaybe<Scalars['String']['input']>;
  equippedSetName_contains?: InputMaybe<Scalars['String']['input']>;
  equippedSetName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  equippedSetName_ends_with?: InputMaybe<Scalars['String']['input']>;
  equippedSetName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  equippedSetName_gt?: InputMaybe<Scalars['String']['input']>;
  equippedSetName_gte?: InputMaybe<Scalars['String']['input']>;
  equippedSetName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  equippedSetName_lt?: InputMaybe<Scalars['String']['input']>;
  equippedSetName_lte?: InputMaybe<Scalars['String']['input']>;
  equippedSetName_not?: InputMaybe<Scalars['String']['input']>;
  equippedSetName_not_contains?: InputMaybe<Scalars['String']['input']>;
  equippedSetName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  equippedSetName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  equippedSetName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  equippedSetName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  equippedSetName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  equippedSetName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  equippedSetName_starts_with?: InputMaybe<Scalars['String']['input']>;
  equippedSetName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  equippedWearables?: InputMaybe<Array<Scalars['Int']['input']>>;
  equippedWearables_contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  equippedWearables_contains_nocase?: InputMaybe<Array<Scalars['Int']['input']>>;
  equippedWearables_not?: InputMaybe<Array<Scalars['Int']['input']>>;
  equippedWearables_not_contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  equippedWearables_not_contains_nocase?: InputMaybe<Array<Scalars['Int']['input']>>;
  escrow?: InputMaybe<Scalars['Bytes']['input']>;
  escrow_contains?: InputMaybe<Scalars['Bytes']['input']>;
  escrow_gt?: InputMaybe<Scalars['Bytes']['input']>;
  escrow_gte?: InputMaybe<Scalars['Bytes']['input']>;
  escrow_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  escrow_lt?: InputMaybe<Scalars['Bytes']['input']>;
  escrow_lte?: InputMaybe<Scalars['Bytes']['input']>;
  escrow_not?: InputMaybe<Scalars['Bytes']['input']>;
  escrow_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  escrow_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  experience?: InputMaybe<Scalars['BigInt']['input']>;
  experience_gt?: InputMaybe<Scalars['BigInt']['input']>;
  experience_gte?: InputMaybe<Scalars['BigInt']['input']>;
  experience_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  experience_lt?: InputMaybe<Scalars['BigInt']['input']>;
  experience_lte?: InputMaybe<Scalars['BigInt']['input']>;
  experience_not?: InputMaybe<Scalars['BigInt']['input']>;
  experience_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gotchiId?: InputMaybe<Scalars['BigInt']['input']>;
  gotchiId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gotchiId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gotchiId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gotchiId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gotchiId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gotchiId_not?: InputMaybe<Scalars['BigInt']['input']>;
  gotchiId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  hauntId?: InputMaybe<Scalars['BigInt']['input']>;
  hauntId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  hauntId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  hauntId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  hauntId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  hauntId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  hauntId_not?: InputMaybe<Scalars['BigInt']['input']>;
  hauntId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  historicalPrices?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  historicalPrices_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  historicalPrices_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  historicalPrices_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  historicalPrices_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  historicalPrices_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  kinship?: InputMaybe<Scalars['BigInt']['input']>;
  kinship_gt?: InputMaybe<Scalars['BigInt']['input']>;
  kinship_gte?: InputMaybe<Scalars['BigInt']['input']>;
  kinship_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  kinship_lt?: InputMaybe<Scalars['BigInt']['input']>;
  kinship_lte?: InputMaybe<Scalars['BigInt']['input']>;
  kinship_not?: InputMaybe<Scalars['BigInt']['input']>;
  kinship_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastInteracted?: InputMaybe<Scalars['BigInt']['input']>;
  lastInteracted_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastInteracted_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastInteracted_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastInteracted_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastInteracted_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastInteracted_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastInteracted_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lending?: InputMaybe<Scalars['BigInt']['input']>;
  lending_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lending_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lending_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lending_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lending_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lending_not?: InputMaybe<Scalars['BigInt']['input']>;
  lending_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  level?: InputMaybe<Scalars['BigInt']['input']>;
  level_gt?: InputMaybe<Scalars['BigInt']['input']>;
  level_gte?: InputMaybe<Scalars['BigInt']['input']>;
  level_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  level_lt?: InputMaybe<Scalars['BigInt']['input']>;
  level_lte?: InputMaybe<Scalars['BigInt']['input']>;
  level_not?: InputMaybe<Scalars['BigInt']['input']>;
  level_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  listings_?: InputMaybe<Erc721Listing_Filter>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  locked_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  locked_not?: InputMaybe<Scalars['Boolean']['input']>;
  locked_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  minimumStake?: InputMaybe<Scalars['BigInt']['input']>;
  minimumStake_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minimumStake_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minimumStake_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minimumStake_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minimumStake_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minimumStake_not?: InputMaybe<Scalars['BigInt']['input']>;
  minimumStake_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  modifiedNumericTraits?: InputMaybe<Array<Scalars['Int']['input']>>;
  modifiedNumericTraits_contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  modifiedNumericTraits_contains_nocase?: InputMaybe<Array<Scalars['Int']['input']>>;
  modifiedNumericTraits_not?: InputMaybe<Array<Scalars['Int']['input']>>;
  modifiedNumericTraits_not_contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  modifiedNumericTraits_not_contains_nocase?: InputMaybe<Array<Scalars['Int']['input']>>;
  modifiedRarityScore?: InputMaybe<Scalars['BigInt']['input']>;
  modifiedRarityScore_gt?: InputMaybe<Scalars['BigInt']['input']>;
  modifiedRarityScore_gte?: InputMaybe<Scalars['BigInt']['input']>;
  modifiedRarityScore_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  modifiedRarityScore_lt?: InputMaybe<Scalars['BigInt']['input']>;
  modifiedRarityScore_lte?: InputMaybe<Scalars['BigInt']['input']>;
  modifiedRarityScore_not?: InputMaybe<Scalars['BigInt']['input']>;
  modifiedRarityScore_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameLowerCase?: InputMaybe<Scalars['String']['input']>;
  nameLowerCase_contains?: InputMaybe<Scalars['String']['input']>;
  nameLowerCase_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nameLowerCase_ends_with?: InputMaybe<Scalars['String']['input']>;
  nameLowerCase_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nameLowerCase_gt?: InputMaybe<Scalars['String']['input']>;
  nameLowerCase_gte?: InputMaybe<Scalars['String']['input']>;
  nameLowerCase_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nameLowerCase_lt?: InputMaybe<Scalars['String']['input']>;
  nameLowerCase_lte?: InputMaybe<Scalars['String']['input']>;
  nameLowerCase_not?: InputMaybe<Scalars['String']['input']>;
  nameLowerCase_not_contains?: InputMaybe<Scalars['String']['input']>;
  nameLowerCase_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nameLowerCase_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nameLowerCase_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nameLowerCase_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nameLowerCase_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nameLowerCase_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nameLowerCase_starts_with?: InputMaybe<Scalars['String']['input']>;
  nameLowerCase_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  numericTraits?: InputMaybe<Array<Scalars['Int']['input']>>;
  numericTraits_contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  numericTraits_contains_nocase?: InputMaybe<Array<Scalars['Int']['input']>>;
  numericTraits_not?: InputMaybe<Array<Scalars['Int']['input']>>;
  numericTraits_not_contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  numericTraits_not_contains_nocase?: InputMaybe<Array<Scalars['Int']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Aavegotchi_Filter>>>;
  originalOwner?: InputMaybe<Scalars['String']['input']>;
  originalOwner_?: InputMaybe<User_Filter>;
  originalOwner_contains?: InputMaybe<Scalars['String']['input']>;
  originalOwner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  originalOwner_ends_with?: InputMaybe<Scalars['String']['input']>;
  originalOwner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  originalOwner_gt?: InputMaybe<Scalars['String']['input']>;
  originalOwner_gte?: InputMaybe<Scalars['String']['input']>;
  originalOwner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  originalOwner_lt?: InputMaybe<Scalars['String']['input']>;
  originalOwner_lte?: InputMaybe<Scalars['String']['input']>;
  originalOwner_not?: InputMaybe<Scalars['String']['input']>;
  originalOwner_not_contains?: InputMaybe<Scalars['String']['input']>;
  originalOwner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  originalOwner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  originalOwner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  originalOwner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  originalOwner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  originalOwner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  originalOwner_starts_with?: InputMaybe<Scalars['String']['input']>;
  originalOwner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_?: InputMaybe<User_Filter>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_gt?: InputMaybe<Scalars['String']['input']>;
  owner_gte?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_lt?: InputMaybe<Scalars['String']['input']>;
  owner_lte?: InputMaybe<Scalars['String']['input']>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  portal_?: InputMaybe<Portal_Filter>;
  possibleSets?: InputMaybe<Scalars['BigInt']['input']>;
  possibleSets_gt?: InputMaybe<Scalars['BigInt']['input']>;
  possibleSets_gte?: InputMaybe<Scalars['BigInt']['input']>;
  possibleSets_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  possibleSets_lt?: InputMaybe<Scalars['BigInt']['input']>;
  possibleSets_lte?: InputMaybe<Scalars['BigInt']['input']>;
  possibleSets_not?: InputMaybe<Scalars['BigInt']['input']>;
  possibleSets_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  randomNumber?: InputMaybe<Scalars['BigInt']['input']>;
  randomNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  randomNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  randomNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  randomNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  randomNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  randomNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  randomNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakedAmount?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakedAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  status?: InputMaybe<Scalars['BigInt']['input']>;
  status_gt?: InputMaybe<Scalars['BigInt']['input']>;
  status_gte?: InputMaybe<Scalars['BigInt']['input']>;
  status_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  status_lt?: InputMaybe<Scalars['BigInt']['input']>;
  status_lte?: InputMaybe<Scalars['BigInt']['input']>;
  status_not?: InputMaybe<Scalars['BigInt']['input']>;
  status_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timesTraded?: InputMaybe<Scalars['BigInt']['input']>;
  timesTraded_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timesTraded_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timesTraded_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timesTraded_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timesTraded_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timesTraded_not?: InputMaybe<Scalars['BigInt']['input']>;
  timesTraded_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  toNextLevel?: InputMaybe<Scalars['BigInt']['input']>;
  toNextLevel_gt?: InputMaybe<Scalars['BigInt']['input']>;
  toNextLevel_gte?: InputMaybe<Scalars['BigInt']['input']>;
  toNextLevel_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  toNextLevel_lt?: InputMaybe<Scalars['BigInt']['input']>;
  toNextLevel_lte?: InputMaybe<Scalars['BigInt']['input']>;
  toNextLevel_not?: InputMaybe<Scalars['BigInt']['input']>;
  toNextLevel_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  usedSkillPoints?: InputMaybe<Scalars['BigInt']['input']>;
  usedSkillPoints_gt?: InputMaybe<Scalars['BigInt']['input']>;
  usedSkillPoints_gte?: InputMaybe<Scalars['BigInt']['input']>;
  usedSkillPoints_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  usedSkillPoints_lt?: InputMaybe<Scalars['BigInt']['input']>;
  usedSkillPoints_lte?: InputMaybe<Scalars['BigInt']['input']>;
  usedSkillPoints_not?: InputMaybe<Scalars['BigInt']['input']>;
  usedSkillPoints_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  withSetsNumericTraits?: InputMaybe<Array<Scalars['Int']['input']>>;
  withSetsNumericTraits_contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  withSetsNumericTraits_contains_nocase?: InputMaybe<Array<Scalars['Int']['input']>>;
  withSetsNumericTraits_not?: InputMaybe<Array<Scalars['Int']['input']>>;
  withSetsNumericTraits_not_contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  withSetsNumericTraits_not_contains_nocase?: InputMaybe<Array<Scalars['Int']['input']>>;
  withSetsRarityScore?: InputMaybe<Scalars['BigInt']['input']>;
  withSetsRarityScore_gt?: InputMaybe<Scalars['BigInt']['input']>;
  withSetsRarityScore_gte?: InputMaybe<Scalars['BigInt']['input']>;
  withSetsRarityScore_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  withSetsRarityScore_lt?: InputMaybe<Scalars['BigInt']['input']>;
  withSetsRarityScore_lte?: InputMaybe<Scalars['BigInt']['input']>;
  withSetsRarityScore_not?: InputMaybe<Scalars['BigInt']['input']>;
  withSetsRarityScore_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Aavegotchi_OrderBy {
  ActiveListing = 'activeListing',
  BaseRarityScore = 'baseRarityScore',
  ClaimedAt = 'claimedAt',
  Collateral = 'collateral',
  CreatedAt = 'createdAt',
  EquippedSetId = 'equippedSetID',
  EquippedSetName = 'equippedSetName',
  EquippedWearables = 'equippedWearables',
  Escrow = 'escrow',
  Experience = 'experience',
  GotchiId = 'gotchiId',
  HauntId = 'hauntId',
  HistoricalPrices = 'historicalPrices',
  Id = 'id',
  Kinship = 'kinship',
  LastInteracted = 'lastInteracted',
  Lending = 'lending',
  Level = 'level',
  Listings = 'listings',
  Locked = 'locked',
  MinimumStake = 'minimumStake',
  ModifiedNumericTraits = 'modifiedNumericTraits',
  ModifiedRarityScore = 'modifiedRarityScore',
  Name = 'name',
  NameLowerCase = 'nameLowerCase',
  NumericTraits = 'numericTraits',
  OriginalOwner = 'originalOwner',
  OriginalOwnerId = 'originalOwner__id',
  Owner = 'owner',
  OwnerId = 'owner__id',
  Portal = 'portal',
  PortalActiveListing = 'portal__activeListing',
  PortalBoughtAt = 'portal__boughtAt',
  PortalClaimedAt = 'portal__claimedAt',
  PortalGotchiId = 'portal__gotchiId',
  PortalHauntId = 'portal__hauntId',
  PortalId = 'portal__id',
  PortalOpenedAt = 'portal__openedAt',
  PortalStatus = 'portal__status',
  PortalTimesTraded = 'portal__timesTraded',
  PossibleSets = 'possibleSets',
  RandomNumber = 'randomNumber',
  StakedAmount = 'stakedAmount',
  Status = 'status',
  TimesTraded = 'timesTraded',
  ToNextLevel = 'toNextLevel',
  UsedSkillPoints = 'usedSkillPoints',
  WithSetsNumericTraits = 'withSetsNumericTraits',
  WithSetsRarityScore = 'withSetsRarityScore'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type ClaimedToken = {
  __typename?: 'ClaimedToken';
  amount: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  lending: GotchiLending;
  token: Scalars['Bytes']['output'];
};

export type ClaimedToken_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<ClaimedToken_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lending?: InputMaybe<Scalars['String']['input']>;
  lending_?: InputMaybe<GotchiLending_Filter>;
  lending_contains?: InputMaybe<Scalars['String']['input']>;
  lending_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lending_ends_with?: InputMaybe<Scalars['String']['input']>;
  lending_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lending_gt?: InputMaybe<Scalars['String']['input']>;
  lending_gte?: InputMaybe<Scalars['String']['input']>;
  lending_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lending_lt?: InputMaybe<Scalars['String']['input']>;
  lending_lte?: InputMaybe<Scalars['String']['input']>;
  lending_not?: InputMaybe<Scalars['String']['input']>;
  lending_not_contains?: InputMaybe<Scalars['String']['input']>;
  lending_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lending_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  lending_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lending_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lending_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  lending_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lending_starts_with?: InputMaybe<Scalars['String']['input']>;
  lending_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<ClaimedToken_Filter>>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum ClaimedToken_OrderBy {
  Amount = 'amount',
  Id = 'id',
  Lending = 'lending',
  LendingBorrower = 'lending__borrower',
  LendingCancelled = 'lending__cancelled',
  LendingCompleted = 'lending__completed',
  LendingGotchiBrs = 'lending__gotchiBRS',
  LendingGotchiKinship = 'lending__gotchiKinship',
  LendingGotchiTokenId = 'lending__gotchiTokenId',
  LendingId = 'lending__id',
  LendingLastClaimed = 'lending__lastClaimed',
  LendingLender = 'lending__lender',
  LendingOriginalOwner = 'lending__originalOwner',
  LendingPeriod = 'lending__period',
  LendingRentDuration = 'lending__rentDuration',
  LendingSplitBorrower = 'lending__splitBorrower',
  LendingSplitOther = 'lending__splitOther',
  LendingSplitOwner = 'lending__splitOwner',
  LendingThirdPartyAddress = 'lending__thirdPartyAddress',
  LendingTimeAgreed = 'lending__timeAgreed',
  LendingTimeCreated = 'lending__timeCreated',
  LendingTimeEnded = 'lending__timeEnded',
  LendingUpfrontCost = 'lending__upfrontCost',
  LendingWhitelistId = 'lending__whitelistId',
  Token = 'token'
}

export type Erc721Listing = {
  __typename?: 'ERC721Listing';
  aggTrait?: Maybe<Scalars['BigInt']['output']>;
  alphaBoost?: Maybe<Scalars['BigInt']['output']>;
  amountEquippedWearables?: Maybe<Scalars['Int']['output']>;
  baseRarityScore?: Maybe<Scalars['BigInt']['output']>;
  blockCreated: Scalars['BigInt']['output'];
  brnTrait?: Maybe<Scalars['BigInt']['output']>;
  buyer?: Maybe<Scalars['Bytes']['output']>;
  cancelled?: Maybe<Scalars['Boolean']['output']>;
  category: Scalars['BigInt']['output'];
  claimedAt?: Maybe<Scalars['BigInt']['output']>;
  collateral?: Maybe<Scalars['Bytes']['output']>;
  coordinateX?: Maybe<Scalars['BigInt']['output']>;
  coordinateY?: Maybe<Scalars['BigInt']['output']>;
  district?: Maybe<Scalars['BigInt']['output']>;
  equippedWearables?: Maybe<Array<Scalars['Int']['output']>>;
  erc721TokenAddress: Scalars['Bytes']['output'];
  experience?: Maybe<Scalars['BigInt']['output']>;
  eycTrait?: Maybe<Scalars['BigInt']['output']>;
  eysTrait?: Maybe<Scalars['BigInt']['output']>;
  fomoBoost?: Maybe<Scalars['BigInt']['output']>;
  fudBoost?: Maybe<Scalars['BigInt']['output']>;
  gotchi?: Maybe<Aavegotchi>;
  hauntId?: Maybe<Scalars['BigInt']['output']>;
  id: Scalars['ID']['output'];
  kekBoost?: Maybe<Scalars['BigInt']['output']>;
  kinship?: Maybe<Scalars['BigInt']['output']>;
  modifiedRarityScore?: Maybe<Scalars['BigInt']['output']>;
  nameLowerCase?: Maybe<Scalars['String']['output']>;
  nrgTrait?: Maybe<Scalars['BigInt']['output']>;
  parcel?: Maybe<Parcel>;
  parcelHash?: Maybe<Scalars['String']['output']>;
  portal?: Maybe<Portal>;
  priceInWei: Scalars['BigInt']['output'];
  recipient?: Maybe<Scalars['Bytes']['output']>;
  seller: Scalars['Bytes']['output'];
  size?: Maybe<Scalars['BigInt']['output']>;
  soldBefore?: Maybe<Scalars['Boolean']['output']>;
  spkTrait?: Maybe<Scalars['BigInt']['output']>;
  timeCreated: Scalars['BigInt']['output'];
  timePurchased?: Maybe<Scalars['BigInt']['output']>;
  tokenId: Scalars['BigInt']['output'];
};

export type Erc721Listing_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  aggTrait?: InputMaybe<Scalars['BigInt']['input']>;
  aggTrait_gt?: InputMaybe<Scalars['BigInt']['input']>;
  aggTrait_gte?: InputMaybe<Scalars['BigInt']['input']>;
  aggTrait_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  aggTrait_lt?: InputMaybe<Scalars['BigInt']['input']>;
  aggTrait_lte?: InputMaybe<Scalars['BigInt']['input']>;
  aggTrait_not?: InputMaybe<Scalars['BigInt']['input']>;
  aggTrait_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  alphaBoost?: InputMaybe<Scalars['BigInt']['input']>;
  alphaBoost_gt?: InputMaybe<Scalars['BigInt']['input']>;
  alphaBoost_gte?: InputMaybe<Scalars['BigInt']['input']>;
  alphaBoost_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  alphaBoost_lt?: InputMaybe<Scalars['BigInt']['input']>;
  alphaBoost_lte?: InputMaybe<Scalars['BigInt']['input']>;
  alphaBoost_not?: InputMaybe<Scalars['BigInt']['input']>;
  alphaBoost_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountEquippedWearables?: InputMaybe<Scalars['Int']['input']>;
  amountEquippedWearables_gt?: InputMaybe<Scalars['Int']['input']>;
  amountEquippedWearables_gte?: InputMaybe<Scalars['Int']['input']>;
  amountEquippedWearables_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  amountEquippedWearables_lt?: InputMaybe<Scalars['Int']['input']>;
  amountEquippedWearables_lte?: InputMaybe<Scalars['Int']['input']>;
  amountEquippedWearables_not?: InputMaybe<Scalars['Int']['input']>;
  amountEquippedWearables_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Erc721Listing_Filter>>>;
  baseRarityScore?: InputMaybe<Scalars['BigInt']['input']>;
  baseRarityScore_gt?: InputMaybe<Scalars['BigInt']['input']>;
  baseRarityScore_gte?: InputMaybe<Scalars['BigInt']['input']>;
  baseRarityScore_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  baseRarityScore_lt?: InputMaybe<Scalars['BigInt']['input']>;
  baseRarityScore_lte?: InputMaybe<Scalars['BigInt']['input']>;
  baseRarityScore_not?: InputMaybe<Scalars['BigInt']['input']>;
  baseRarityScore_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockCreated?: InputMaybe<Scalars['BigInt']['input']>;
  blockCreated_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockCreated_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockCreated_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockCreated_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockCreated_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockCreated_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockCreated_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  brnTrait?: InputMaybe<Scalars['BigInt']['input']>;
  brnTrait_gt?: InputMaybe<Scalars['BigInt']['input']>;
  brnTrait_gte?: InputMaybe<Scalars['BigInt']['input']>;
  brnTrait_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  brnTrait_lt?: InputMaybe<Scalars['BigInt']['input']>;
  brnTrait_lte?: InputMaybe<Scalars['BigInt']['input']>;
  brnTrait_not?: InputMaybe<Scalars['BigInt']['input']>;
  brnTrait_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  buyer?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_contains?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_gt?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_gte?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  buyer_lt?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_lte?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_not?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  cancelled?: InputMaybe<Scalars['Boolean']['input']>;
  cancelled_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  cancelled_not?: InputMaybe<Scalars['Boolean']['input']>;
  cancelled_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  category?: InputMaybe<Scalars['BigInt']['input']>;
  category_gt?: InputMaybe<Scalars['BigInt']['input']>;
  category_gte?: InputMaybe<Scalars['BigInt']['input']>;
  category_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  category_lt?: InputMaybe<Scalars['BigInt']['input']>;
  category_lte?: InputMaybe<Scalars['BigInt']['input']>;
  category_not?: InputMaybe<Scalars['BigInt']['input']>;
  category_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  claimedAt?: InputMaybe<Scalars['BigInt']['input']>;
  claimedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  claimedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  claimedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  claimedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  claimedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  claimedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  claimedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateral?: InputMaybe<Scalars['Bytes']['input']>;
  collateral_contains?: InputMaybe<Scalars['Bytes']['input']>;
  collateral_gt?: InputMaybe<Scalars['Bytes']['input']>;
  collateral_gte?: InputMaybe<Scalars['Bytes']['input']>;
  collateral_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  collateral_lt?: InputMaybe<Scalars['Bytes']['input']>;
  collateral_lte?: InputMaybe<Scalars['Bytes']['input']>;
  collateral_not?: InputMaybe<Scalars['Bytes']['input']>;
  collateral_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  collateral_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  coordinateX?: InputMaybe<Scalars['BigInt']['input']>;
  coordinateX_gt?: InputMaybe<Scalars['BigInt']['input']>;
  coordinateX_gte?: InputMaybe<Scalars['BigInt']['input']>;
  coordinateX_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  coordinateX_lt?: InputMaybe<Scalars['BigInt']['input']>;
  coordinateX_lte?: InputMaybe<Scalars['BigInt']['input']>;
  coordinateX_not?: InputMaybe<Scalars['BigInt']['input']>;
  coordinateX_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  coordinateY?: InputMaybe<Scalars['BigInt']['input']>;
  coordinateY_gt?: InputMaybe<Scalars['BigInt']['input']>;
  coordinateY_gte?: InputMaybe<Scalars['BigInt']['input']>;
  coordinateY_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  coordinateY_lt?: InputMaybe<Scalars['BigInt']['input']>;
  coordinateY_lte?: InputMaybe<Scalars['BigInt']['input']>;
  coordinateY_not?: InputMaybe<Scalars['BigInt']['input']>;
  coordinateY_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  district?: InputMaybe<Scalars['BigInt']['input']>;
  district_gt?: InputMaybe<Scalars['BigInt']['input']>;
  district_gte?: InputMaybe<Scalars['BigInt']['input']>;
  district_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  district_lt?: InputMaybe<Scalars['BigInt']['input']>;
  district_lte?: InputMaybe<Scalars['BigInt']['input']>;
  district_not?: InputMaybe<Scalars['BigInt']['input']>;
  district_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  equippedWearables?: InputMaybe<Array<Scalars['Int']['input']>>;
  equippedWearables_contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  equippedWearables_contains_nocase?: InputMaybe<Array<Scalars['Int']['input']>>;
  equippedWearables_not?: InputMaybe<Array<Scalars['Int']['input']>>;
  equippedWearables_not_contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  equippedWearables_not_contains_nocase?: InputMaybe<Array<Scalars['Int']['input']>>;
  erc721TokenAddress?: InputMaybe<Scalars['Bytes']['input']>;
  erc721TokenAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  erc721TokenAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  erc721TokenAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  erc721TokenAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  erc721TokenAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  erc721TokenAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  erc721TokenAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  erc721TokenAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  erc721TokenAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  experience?: InputMaybe<Scalars['BigInt']['input']>;
  experience_gt?: InputMaybe<Scalars['BigInt']['input']>;
  experience_gte?: InputMaybe<Scalars['BigInt']['input']>;
  experience_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  experience_lt?: InputMaybe<Scalars['BigInt']['input']>;
  experience_lte?: InputMaybe<Scalars['BigInt']['input']>;
  experience_not?: InputMaybe<Scalars['BigInt']['input']>;
  experience_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eycTrait?: InputMaybe<Scalars['BigInt']['input']>;
  eycTrait_gt?: InputMaybe<Scalars['BigInt']['input']>;
  eycTrait_gte?: InputMaybe<Scalars['BigInt']['input']>;
  eycTrait_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eycTrait_lt?: InputMaybe<Scalars['BigInt']['input']>;
  eycTrait_lte?: InputMaybe<Scalars['BigInt']['input']>;
  eycTrait_not?: InputMaybe<Scalars['BigInt']['input']>;
  eycTrait_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eysTrait?: InputMaybe<Scalars['BigInt']['input']>;
  eysTrait_gt?: InputMaybe<Scalars['BigInt']['input']>;
  eysTrait_gte?: InputMaybe<Scalars['BigInt']['input']>;
  eysTrait_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eysTrait_lt?: InputMaybe<Scalars['BigInt']['input']>;
  eysTrait_lte?: InputMaybe<Scalars['BigInt']['input']>;
  eysTrait_not?: InputMaybe<Scalars['BigInt']['input']>;
  eysTrait_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fomoBoost?: InputMaybe<Scalars['BigInt']['input']>;
  fomoBoost_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fomoBoost_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fomoBoost_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fomoBoost_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fomoBoost_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fomoBoost_not?: InputMaybe<Scalars['BigInt']['input']>;
  fomoBoost_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fudBoost?: InputMaybe<Scalars['BigInt']['input']>;
  fudBoost_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fudBoost_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fudBoost_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fudBoost_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fudBoost_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fudBoost_not?: InputMaybe<Scalars['BigInt']['input']>;
  fudBoost_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gotchi?: InputMaybe<Scalars['String']['input']>;
  gotchi_?: InputMaybe<Aavegotchi_Filter>;
  gotchi_contains?: InputMaybe<Scalars['String']['input']>;
  gotchi_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  gotchi_ends_with?: InputMaybe<Scalars['String']['input']>;
  gotchi_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  gotchi_gt?: InputMaybe<Scalars['String']['input']>;
  gotchi_gte?: InputMaybe<Scalars['String']['input']>;
  gotchi_in?: InputMaybe<Array<Scalars['String']['input']>>;
  gotchi_lt?: InputMaybe<Scalars['String']['input']>;
  gotchi_lte?: InputMaybe<Scalars['String']['input']>;
  gotchi_not?: InputMaybe<Scalars['String']['input']>;
  gotchi_not_contains?: InputMaybe<Scalars['String']['input']>;
  gotchi_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  gotchi_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  gotchi_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  gotchi_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  gotchi_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  gotchi_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  gotchi_starts_with?: InputMaybe<Scalars['String']['input']>;
  gotchi_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hauntId?: InputMaybe<Scalars['BigInt']['input']>;
  hauntId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  hauntId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  hauntId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  hauntId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  hauntId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  hauntId_not?: InputMaybe<Scalars['BigInt']['input']>;
  hauntId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  kekBoost?: InputMaybe<Scalars['BigInt']['input']>;
  kekBoost_gt?: InputMaybe<Scalars['BigInt']['input']>;
  kekBoost_gte?: InputMaybe<Scalars['BigInt']['input']>;
  kekBoost_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  kekBoost_lt?: InputMaybe<Scalars['BigInt']['input']>;
  kekBoost_lte?: InputMaybe<Scalars['BigInt']['input']>;
  kekBoost_not?: InputMaybe<Scalars['BigInt']['input']>;
  kekBoost_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  kinship?: InputMaybe<Scalars['BigInt']['input']>;
  kinship_gt?: InputMaybe<Scalars['BigInt']['input']>;
  kinship_gte?: InputMaybe<Scalars['BigInt']['input']>;
  kinship_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  kinship_lt?: InputMaybe<Scalars['BigInt']['input']>;
  kinship_lte?: InputMaybe<Scalars['BigInt']['input']>;
  kinship_not?: InputMaybe<Scalars['BigInt']['input']>;
  kinship_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  modifiedRarityScore?: InputMaybe<Scalars['BigInt']['input']>;
  modifiedRarityScore_gt?: InputMaybe<Scalars['BigInt']['input']>;
  modifiedRarityScore_gte?: InputMaybe<Scalars['BigInt']['input']>;
  modifiedRarityScore_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  modifiedRarityScore_lt?: InputMaybe<Scalars['BigInt']['input']>;
  modifiedRarityScore_lte?: InputMaybe<Scalars['BigInt']['input']>;
  modifiedRarityScore_not?: InputMaybe<Scalars['BigInt']['input']>;
  modifiedRarityScore_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nameLowerCase?: InputMaybe<Scalars['String']['input']>;
  nameLowerCase_contains?: InputMaybe<Scalars['String']['input']>;
  nameLowerCase_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nameLowerCase_ends_with?: InputMaybe<Scalars['String']['input']>;
  nameLowerCase_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nameLowerCase_gt?: InputMaybe<Scalars['String']['input']>;
  nameLowerCase_gte?: InputMaybe<Scalars['String']['input']>;
  nameLowerCase_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nameLowerCase_lt?: InputMaybe<Scalars['String']['input']>;
  nameLowerCase_lte?: InputMaybe<Scalars['String']['input']>;
  nameLowerCase_not?: InputMaybe<Scalars['String']['input']>;
  nameLowerCase_not_contains?: InputMaybe<Scalars['String']['input']>;
  nameLowerCase_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nameLowerCase_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nameLowerCase_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nameLowerCase_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nameLowerCase_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nameLowerCase_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nameLowerCase_starts_with?: InputMaybe<Scalars['String']['input']>;
  nameLowerCase_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nrgTrait?: InputMaybe<Scalars['BigInt']['input']>;
  nrgTrait_gt?: InputMaybe<Scalars['BigInt']['input']>;
  nrgTrait_gte?: InputMaybe<Scalars['BigInt']['input']>;
  nrgTrait_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nrgTrait_lt?: InputMaybe<Scalars['BigInt']['input']>;
  nrgTrait_lte?: InputMaybe<Scalars['BigInt']['input']>;
  nrgTrait_not?: InputMaybe<Scalars['BigInt']['input']>;
  nrgTrait_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Erc721Listing_Filter>>>;
  parcel?: InputMaybe<Scalars['String']['input']>;
  parcelHash?: InputMaybe<Scalars['String']['input']>;
  parcelHash_contains?: InputMaybe<Scalars['String']['input']>;
  parcelHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  parcelHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  parcelHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  parcelHash_gt?: InputMaybe<Scalars['String']['input']>;
  parcelHash_gte?: InputMaybe<Scalars['String']['input']>;
  parcelHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  parcelHash_lt?: InputMaybe<Scalars['String']['input']>;
  parcelHash_lte?: InputMaybe<Scalars['String']['input']>;
  parcelHash_not?: InputMaybe<Scalars['String']['input']>;
  parcelHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  parcelHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  parcelHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  parcelHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  parcelHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  parcelHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  parcelHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  parcelHash_starts_with?: InputMaybe<Scalars['String']['input']>;
  parcelHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  parcel_?: InputMaybe<Parcel_Filter>;
  parcel_contains?: InputMaybe<Scalars['String']['input']>;
  parcel_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  parcel_ends_with?: InputMaybe<Scalars['String']['input']>;
  parcel_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  parcel_gt?: InputMaybe<Scalars['String']['input']>;
  parcel_gte?: InputMaybe<Scalars['String']['input']>;
  parcel_in?: InputMaybe<Array<Scalars['String']['input']>>;
  parcel_lt?: InputMaybe<Scalars['String']['input']>;
  parcel_lte?: InputMaybe<Scalars['String']['input']>;
  parcel_not?: InputMaybe<Scalars['String']['input']>;
  parcel_not_contains?: InputMaybe<Scalars['String']['input']>;
  parcel_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  parcel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  parcel_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  parcel_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  parcel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  parcel_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  parcel_starts_with?: InputMaybe<Scalars['String']['input']>;
  parcel_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  portal?: InputMaybe<Scalars['String']['input']>;
  portal_?: InputMaybe<Portal_Filter>;
  portal_contains?: InputMaybe<Scalars['String']['input']>;
  portal_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  portal_ends_with?: InputMaybe<Scalars['String']['input']>;
  portal_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  portal_gt?: InputMaybe<Scalars['String']['input']>;
  portal_gte?: InputMaybe<Scalars['String']['input']>;
  portal_in?: InputMaybe<Array<Scalars['String']['input']>>;
  portal_lt?: InputMaybe<Scalars['String']['input']>;
  portal_lte?: InputMaybe<Scalars['String']['input']>;
  portal_not?: InputMaybe<Scalars['String']['input']>;
  portal_not_contains?: InputMaybe<Scalars['String']['input']>;
  portal_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  portal_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  portal_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  portal_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  portal_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  portal_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  portal_starts_with?: InputMaybe<Scalars['String']['input']>;
  portal_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  priceInWei?: InputMaybe<Scalars['BigInt']['input']>;
  priceInWei_gt?: InputMaybe<Scalars['BigInt']['input']>;
  priceInWei_gte?: InputMaybe<Scalars['BigInt']['input']>;
  priceInWei_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  priceInWei_lt?: InputMaybe<Scalars['BigInt']['input']>;
  priceInWei_lte?: InputMaybe<Scalars['BigInt']['input']>;
  priceInWei_not?: InputMaybe<Scalars['BigInt']['input']>;
  priceInWei_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  recipient?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  recipient_lt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_lte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  seller?: InputMaybe<Scalars['Bytes']['input']>;
  seller_contains?: InputMaybe<Scalars['Bytes']['input']>;
  seller_gt?: InputMaybe<Scalars['Bytes']['input']>;
  seller_gte?: InputMaybe<Scalars['Bytes']['input']>;
  seller_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  seller_lt?: InputMaybe<Scalars['Bytes']['input']>;
  seller_lte?: InputMaybe<Scalars['Bytes']['input']>;
  seller_not?: InputMaybe<Scalars['Bytes']['input']>;
  seller_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  seller_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  size?: InputMaybe<Scalars['BigInt']['input']>;
  size_gt?: InputMaybe<Scalars['BigInt']['input']>;
  size_gte?: InputMaybe<Scalars['BigInt']['input']>;
  size_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  size_lt?: InputMaybe<Scalars['BigInt']['input']>;
  size_lte?: InputMaybe<Scalars['BigInt']['input']>;
  size_not?: InputMaybe<Scalars['BigInt']['input']>;
  size_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  soldBefore?: InputMaybe<Scalars['Boolean']['input']>;
  soldBefore_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  soldBefore_not?: InputMaybe<Scalars['Boolean']['input']>;
  soldBefore_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  spkTrait?: InputMaybe<Scalars['BigInt']['input']>;
  spkTrait_gt?: InputMaybe<Scalars['BigInt']['input']>;
  spkTrait_gte?: InputMaybe<Scalars['BigInt']['input']>;
  spkTrait_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  spkTrait_lt?: InputMaybe<Scalars['BigInt']['input']>;
  spkTrait_lte?: InputMaybe<Scalars['BigInt']['input']>;
  spkTrait_not?: InputMaybe<Scalars['BigInt']['input']>;
  spkTrait_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timeCreated?: InputMaybe<Scalars['BigInt']['input']>;
  timeCreated_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timeCreated_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timeCreated_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timeCreated_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timeCreated_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timeCreated_not?: InputMaybe<Scalars['BigInt']['input']>;
  timeCreated_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timePurchased?: InputMaybe<Scalars['BigInt']['input']>;
  timePurchased_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timePurchased_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timePurchased_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timePurchased_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timePurchased_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timePurchased_not?: InputMaybe<Scalars['BigInt']['input']>;
  timePurchased_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenId?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Erc721Listing_OrderBy {
  AggTrait = 'aggTrait',
  AlphaBoost = 'alphaBoost',
  AmountEquippedWearables = 'amountEquippedWearables',
  BaseRarityScore = 'baseRarityScore',
  BlockCreated = 'blockCreated',
  BrnTrait = 'brnTrait',
  Buyer = 'buyer',
  Cancelled = 'cancelled',
  Category = 'category',
  ClaimedAt = 'claimedAt',
  Collateral = 'collateral',
  CoordinateX = 'coordinateX',
  CoordinateY = 'coordinateY',
  District = 'district',
  EquippedWearables = 'equippedWearables',
  Erc721TokenAddress = 'erc721TokenAddress',
  Experience = 'experience',
  EycTrait = 'eycTrait',
  EysTrait = 'eysTrait',
  FomoBoost = 'fomoBoost',
  FudBoost = 'fudBoost',
  Gotchi = 'gotchi',
  GotchiActiveListing = 'gotchi__activeListing',
  GotchiBaseRarityScore = 'gotchi__baseRarityScore',
  GotchiClaimedAt = 'gotchi__claimedAt',
  GotchiCollateral = 'gotchi__collateral',
  GotchiCreatedAt = 'gotchi__createdAt',
  GotchiEquippedSetId = 'gotchi__equippedSetID',
  GotchiEquippedSetName = 'gotchi__equippedSetName',
  GotchiEscrow = 'gotchi__escrow',
  GotchiExperience = 'gotchi__experience',
  GotchiGotchiId = 'gotchi__gotchiId',
  GotchiHauntId = 'gotchi__hauntId',
  GotchiId = 'gotchi__id',
  GotchiKinship = 'gotchi__kinship',
  GotchiLastInteracted = 'gotchi__lastInteracted',
  GotchiLending = 'gotchi__lending',
  GotchiLevel = 'gotchi__level',
  GotchiLocked = 'gotchi__locked',
  GotchiMinimumStake = 'gotchi__minimumStake',
  GotchiModifiedRarityScore = 'gotchi__modifiedRarityScore',
  GotchiName = 'gotchi__name',
  GotchiNameLowerCase = 'gotchi__nameLowerCase',
  GotchiPossibleSets = 'gotchi__possibleSets',
  GotchiRandomNumber = 'gotchi__randomNumber',
  GotchiStakedAmount = 'gotchi__stakedAmount',
  GotchiStatus = 'gotchi__status',
  GotchiTimesTraded = 'gotchi__timesTraded',
  GotchiToNextLevel = 'gotchi__toNextLevel',
  GotchiUsedSkillPoints = 'gotchi__usedSkillPoints',
  GotchiWithSetsRarityScore = 'gotchi__withSetsRarityScore',
  HauntId = 'hauntId',
  Id = 'id',
  KekBoost = 'kekBoost',
  Kinship = 'kinship',
  ModifiedRarityScore = 'modifiedRarityScore',
  NameLowerCase = 'nameLowerCase',
  NrgTrait = 'nrgTrait',
  Parcel = 'parcel',
  ParcelHash = 'parcelHash',
  ParcelActiveListing = 'parcel__activeListing',
  ParcelAlphaBoost = 'parcel__alphaBoost',
  ParcelAuctionId = 'parcel__auctionId',
  ParcelCoordinateX = 'parcel__coordinateX',
  ParcelCoordinateY = 'parcel__coordinateY',
  ParcelDistrict = 'parcel__district',
  ParcelFomoBoost = 'parcel__fomoBoost',
  ParcelFudBoost = 'parcel__fudBoost',
  ParcelId = 'parcel__id',
  ParcelKekBoost = 'parcel__kekBoost',
  ParcelParcelHash = 'parcel__parcelHash',
  ParcelParcelId = 'parcel__parcelId',
  ParcelSize = 'parcel__size',
  ParcelTimesTraded = 'parcel__timesTraded',
  ParcelTokenId = 'parcel__tokenId',
  Portal = 'portal',
  PortalActiveListing = 'portal__activeListing',
  PortalBoughtAt = 'portal__boughtAt',
  PortalClaimedAt = 'portal__claimedAt',
  PortalGotchiId = 'portal__gotchiId',
  PortalHauntId = 'portal__hauntId',
  PortalId = 'portal__id',
  PortalOpenedAt = 'portal__openedAt',
  PortalStatus = 'portal__status',
  PortalTimesTraded = 'portal__timesTraded',
  PriceInWei = 'priceInWei',
  Recipient = 'recipient',
  Seller = 'seller',
  Size = 'size',
  SoldBefore = 'soldBefore',
  SpkTrait = 'spkTrait',
  TimeCreated = 'timeCreated',
  TimePurchased = 'timePurchased',
  TokenId = 'tokenId'
}

export type Erc1155Listing = {
  __typename?: 'ERC1155Listing';
  aggTraitModifier?: Maybe<Scalars['BigInt']['output']>;
  brnTraitModifier?: Maybe<Scalars['BigInt']['output']>;
  cancelled: Scalars['Boolean']['output'];
  category: Scalars['BigInt']['output'];
  erc1155TokenAddress: Scalars['Bytes']['output'];
  erc1155TypeId: Scalars['BigInt']['output'];
  eycTraitModifier?: Maybe<Scalars['BigInt']['output']>;
  eysTraitModifier?: Maybe<Scalars['BigInt']['output']>;
  id: Scalars['ID']['output'];
  nrgTraitModifier?: Maybe<Scalars['BigInt']['output']>;
  priceInWei: Scalars['BigInt']['output'];
  quantity: Scalars['BigInt']['output'];
  rarityLevel?: Maybe<Scalars['BigInt']['output']>;
  rarityScoreModifier?: Maybe<Scalars['BigInt']['output']>;
  seller: Scalars['Bytes']['output'];
  sold: Scalars['Boolean']['output'];
  spkTraitModifier?: Maybe<Scalars['BigInt']['output']>;
  timeCreated: Scalars['BigInt']['output'];
  timeLastPurchased: Scalars['BigInt']['output'];
};

export type Erc1155Listing_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  aggTraitModifier?: InputMaybe<Scalars['BigInt']['input']>;
  aggTraitModifier_gt?: InputMaybe<Scalars['BigInt']['input']>;
  aggTraitModifier_gte?: InputMaybe<Scalars['BigInt']['input']>;
  aggTraitModifier_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  aggTraitModifier_lt?: InputMaybe<Scalars['BigInt']['input']>;
  aggTraitModifier_lte?: InputMaybe<Scalars['BigInt']['input']>;
  aggTraitModifier_not?: InputMaybe<Scalars['BigInt']['input']>;
  aggTraitModifier_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Erc1155Listing_Filter>>>;
  brnTraitModifier?: InputMaybe<Scalars['BigInt']['input']>;
  brnTraitModifier_gt?: InputMaybe<Scalars['BigInt']['input']>;
  brnTraitModifier_gte?: InputMaybe<Scalars['BigInt']['input']>;
  brnTraitModifier_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  brnTraitModifier_lt?: InputMaybe<Scalars['BigInt']['input']>;
  brnTraitModifier_lte?: InputMaybe<Scalars['BigInt']['input']>;
  brnTraitModifier_not?: InputMaybe<Scalars['BigInt']['input']>;
  brnTraitModifier_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cancelled?: InputMaybe<Scalars['Boolean']['input']>;
  cancelled_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  cancelled_not?: InputMaybe<Scalars['Boolean']['input']>;
  cancelled_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  category?: InputMaybe<Scalars['BigInt']['input']>;
  category_gt?: InputMaybe<Scalars['BigInt']['input']>;
  category_gte?: InputMaybe<Scalars['BigInt']['input']>;
  category_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  category_lt?: InputMaybe<Scalars['BigInt']['input']>;
  category_lte?: InputMaybe<Scalars['BigInt']['input']>;
  category_not?: InputMaybe<Scalars['BigInt']['input']>;
  category_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  erc1155TokenAddress?: InputMaybe<Scalars['Bytes']['input']>;
  erc1155TokenAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  erc1155TokenAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  erc1155TokenAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  erc1155TokenAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  erc1155TokenAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  erc1155TokenAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  erc1155TokenAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  erc1155TokenAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  erc1155TokenAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  erc1155TypeId?: InputMaybe<Scalars['BigInt']['input']>;
  erc1155TypeId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  erc1155TypeId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  erc1155TypeId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  erc1155TypeId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  erc1155TypeId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  erc1155TypeId_not?: InputMaybe<Scalars['BigInt']['input']>;
  erc1155TypeId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eycTraitModifier?: InputMaybe<Scalars['BigInt']['input']>;
  eycTraitModifier_gt?: InputMaybe<Scalars['BigInt']['input']>;
  eycTraitModifier_gte?: InputMaybe<Scalars['BigInt']['input']>;
  eycTraitModifier_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eycTraitModifier_lt?: InputMaybe<Scalars['BigInt']['input']>;
  eycTraitModifier_lte?: InputMaybe<Scalars['BigInt']['input']>;
  eycTraitModifier_not?: InputMaybe<Scalars['BigInt']['input']>;
  eycTraitModifier_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eysTraitModifier?: InputMaybe<Scalars['BigInt']['input']>;
  eysTraitModifier_gt?: InputMaybe<Scalars['BigInt']['input']>;
  eysTraitModifier_gte?: InputMaybe<Scalars['BigInt']['input']>;
  eysTraitModifier_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eysTraitModifier_lt?: InputMaybe<Scalars['BigInt']['input']>;
  eysTraitModifier_lte?: InputMaybe<Scalars['BigInt']['input']>;
  eysTraitModifier_not?: InputMaybe<Scalars['BigInt']['input']>;
  eysTraitModifier_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  nrgTraitModifier?: InputMaybe<Scalars['BigInt']['input']>;
  nrgTraitModifier_gt?: InputMaybe<Scalars['BigInt']['input']>;
  nrgTraitModifier_gte?: InputMaybe<Scalars['BigInt']['input']>;
  nrgTraitModifier_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nrgTraitModifier_lt?: InputMaybe<Scalars['BigInt']['input']>;
  nrgTraitModifier_lte?: InputMaybe<Scalars['BigInt']['input']>;
  nrgTraitModifier_not?: InputMaybe<Scalars['BigInt']['input']>;
  nrgTraitModifier_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Erc1155Listing_Filter>>>;
  priceInWei?: InputMaybe<Scalars['BigInt']['input']>;
  priceInWei_gt?: InputMaybe<Scalars['BigInt']['input']>;
  priceInWei_gte?: InputMaybe<Scalars['BigInt']['input']>;
  priceInWei_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  priceInWei_lt?: InputMaybe<Scalars['BigInt']['input']>;
  priceInWei_lte?: InputMaybe<Scalars['BigInt']['input']>;
  priceInWei_not?: InputMaybe<Scalars['BigInt']['input']>;
  priceInWei_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quantity?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quantity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_not?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rarityLevel?: InputMaybe<Scalars['BigInt']['input']>;
  rarityLevel_gt?: InputMaybe<Scalars['BigInt']['input']>;
  rarityLevel_gte?: InputMaybe<Scalars['BigInt']['input']>;
  rarityLevel_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rarityLevel_lt?: InputMaybe<Scalars['BigInt']['input']>;
  rarityLevel_lte?: InputMaybe<Scalars['BigInt']['input']>;
  rarityLevel_not?: InputMaybe<Scalars['BigInt']['input']>;
  rarityLevel_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rarityScoreModifier?: InputMaybe<Scalars['BigInt']['input']>;
  rarityScoreModifier_gt?: InputMaybe<Scalars['BigInt']['input']>;
  rarityScoreModifier_gte?: InputMaybe<Scalars['BigInt']['input']>;
  rarityScoreModifier_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rarityScoreModifier_lt?: InputMaybe<Scalars['BigInt']['input']>;
  rarityScoreModifier_lte?: InputMaybe<Scalars['BigInt']['input']>;
  rarityScoreModifier_not?: InputMaybe<Scalars['BigInt']['input']>;
  rarityScoreModifier_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  seller?: InputMaybe<Scalars['Bytes']['input']>;
  seller_contains?: InputMaybe<Scalars['Bytes']['input']>;
  seller_gt?: InputMaybe<Scalars['Bytes']['input']>;
  seller_gte?: InputMaybe<Scalars['Bytes']['input']>;
  seller_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  seller_lt?: InputMaybe<Scalars['Bytes']['input']>;
  seller_lte?: InputMaybe<Scalars['Bytes']['input']>;
  seller_not?: InputMaybe<Scalars['Bytes']['input']>;
  seller_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  seller_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sold?: InputMaybe<Scalars['Boolean']['input']>;
  sold_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  sold_not?: InputMaybe<Scalars['Boolean']['input']>;
  sold_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  spkTraitModifier?: InputMaybe<Scalars['BigInt']['input']>;
  spkTraitModifier_gt?: InputMaybe<Scalars['BigInt']['input']>;
  spkTraitModifier_gte?: InputMaybe<Scalars['BigInt']['input']>;
  spkTraitModifier_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  spkTraitModifier_lt?: InputMaybe<Scalars['BigInt']['input']>;
  spkTraitModifier_lte?: InputMaybe<Scalars['BigInt']['input']>;
  spkTraitModifier_not?: InputMaybe<Scalars['BigInt']['input']>;
  spkTraitModifier_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timeCreated?: InputMaybe<Scalars['BigInt']['input']>;
  timeCreated_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timeCreated_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timeCreated_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timeCreated_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timeCreated_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timeCreated_not?: InputMaybe<Scalars['BigInt']['input']>;
  timeCreated_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timeLastPurchased?: InputMaybe<Scalars['BigInt']['input']>;
  timeLastPurchased_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timeLastPurchased_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timeLastPurchased_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timeLastPurchased_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timeLastPurchased_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timeLastPurchased_not?: InputMaybe<Scalars['BigInt']['input']>;
  timeLastPurchased_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Erc1155Listing_OrderBy {
  AggTraitModifier = 'aggTraitModifier',
  BrnTraitModifier = 'brnTraitModifier',
  Cancelled = 'cancelled',
  Category = 'category',
  Erc1155TokenAddress = 'erc1155TokenAddress',
  Erc1155TypeId = 'erc1155TypeId',
  EycTraitModifier = 'eycTraitModifier',
  EysTraitModifier = 'eysTraitModifier',
  Id = 'id',
  NrgTraitModifier = 'nrgTraitModifier',
  PriceInWei = 'priceInWei',
  Quantity = 'quantity',
  RarityLevel = 'rarityLevel',
  RarityScoreModifier = 'rarityScoreModifier',
  Seller = 'seller',
  Sold = 'sold',
  SpkTraitModifier = 'spkTraitModifier',
  TimeCreated = 'timeCreated',
  TimeLastPurchased = 'timeLastPurchased'
}

export type Erc1155Purchase = {
  __typename?: 'ERC1155Purchase';
  buyer: Scalars['Bytes']['output'];
  category: Scalars['BigInt']['output'];
  erc1155TokenAddress: Scalars['Bytes']['output'];
  erc1155TypeId: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  listingID: Scalars['BigInt']['output'];
  priceInWei: Scalars['BigInt']['output'];
  quantity: Scalars['BigInt']['output'];
  rarityLevel?: Maybe<Scalars['BigInt']['output']>;
  recipient?: Maybe<Scalars['Bytes']['output']>;
  seller: Scalars['Bytes']['output'];
  timeLastPurchased: Scalars['BigInt']['output'];
};

export type Erc1155Purchase_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Erc1155Purchase_Filter>>>;
  buyer?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_contains?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_gt?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_gte?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  buyer_lt?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_lte?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_not?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  category?: InputMaybe<Scalars['BigInt']['input']>;
  category_gt?: InputMaybe<Scalars['BigInt']['input']>;
  category_gte?: InputMaybe<Scalars['BigInt']['input']>;
  category_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  category_lt?: InputMaybe<Scalars['BigInt']['input']>;
  category_lte?: InputMaybe<Scalars['BigInt']['input']>;
  category_not?: InputMaybe<Scalars['BigInt']['input']>;
  category_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  erc1155TokenAddress?: InputMaybe<Scalars['Bytes']['input']>;
  erc1155TokenAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  erc1155TokenAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  erc1155TokenAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  erc1155TokenAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  erc1155TokenAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  erc1155TokenAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  erc1155TokenAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  erc1155TokenAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  erc1155TokenAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  erc1155TypeId?: InputMaybe<Scalars['BigInt']['input']>;
  erc1155TypeId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  erc1155TypeId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  erc1155TypeId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  erc1155TypeId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  erc1155TypeId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  erc1155TypeId_not?: InputMaybe<Scalars['BigInt']['input']>;
  erc1155TypeId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  listingID?: InputMaybe<Scalars['BigInt']['input']>;
  listingID_gt?: InputMaybe<Scalars['BigInt']['input']>;
  listingID_gte?: InputMaybe<Scalars['BigInt']['input']>;
  listingID_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  listingID_lt?: InputMaybe<Scalars['BigInt']['input']>;
  listingID_lte?: InputMaybe<Scalars['BigInt']['input']>;
  listingID_not?: InputMaybe<Scalars['BigInt']['input']>;
  listingID_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Erc1155Purchase_Filter>>>;
  priceInWei?: InputMaybe<Scalars['BigInt']['input']>;
  priceInWei_gt?: InputMaybe<Scalars['BigInt']['input']>;
  priceInWei_gte?: InputMaybe<Scalars['BigInt']['input']>;
  priceInWei_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  priceInWei_lt?: InputMaybe<Scalars['BigInt']['input']>;
  priceInWei_lte?: InputMaybe<Scalars['BigInt']['input']>;
  priceInWei_not?: InputMaybe<Scalars['BigInt']['input']>;
  priceInWei_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quantity?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quantity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_not?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rarityLevel?: InputMaybe<Scalars['BigInt']['input']>;
  rarityLevel_gt?: InputMaybe<Scalars['BigInt']['input']>;
  rarityLevel_gte?: InputMaybe<Scalars['BigInt']['input']>;
  rarityLevel_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rarityLevel_lt?: InputMaybe<Scalars['BigInt']['input']>;
  rarityLevel_lte?: InputMaybe<Scalars['BigInt']['input']>;
  rarityLevel_not?: InputMaybe<Scalars['BigInt']['input']>;
  rarityLevel_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  recipient?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  recipient_lt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_lte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  seller?: InputMaybe<Scalars['Bytes']['input']>;
  seller_contains?: InputMaybe<Scalars['Bytes']['input']>;
  seller_gt?: InputMaybe<Scalars['Bytes']['input']>;
  seller_gte?: InputMaybe<Scalars['Bytes']['input']>;
  seller_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  seller_lt?: InputMaybe<Scalars['Bytes']['input']>;
  seller_lte?: InputMaybe<Scalars['Bytes']['input']>;
  seller_not?: InputMaybe<Scalars['Bytes']['input']>;
  seller_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  seller_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timeLastPurchased?: InputMaybe<Scalars['BigInt']['input']>;
  timeLastPurchased_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timeLastPurchased_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timeLastPurchased_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timeLastPurchased_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timeLastPurchased_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timeLastPurchased_not?: InputMaybe<Scalars['BigInt']['input']>;
  timeLastPurchased_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Erc1155Purchase_OrderBy {
  Buyer = 'buyer',
  Category = 'category',
  Erc1155TokenAddress = 'erc1155TokenAddress',
  Erc1155TypeId = 'erc1155TypeId',
  Id = 'id',
  ListingId = 'listingID',
  PriceInWei = 'priceInWei',
  Quantity = 'quantity',
  RarityLevel = 'rarityLevel',
  Recipient = 'recipient',
  Seller = 'seller',
  TimeLastPurchased = 'timeLastPurchased'
}

export type GotchiLending = {
  __typename?: 'GotchiLending';
  borrower?: Maybe<Scalars['Bytes']['output']>;
  cancelled: Scalars['Boolean']['output'];
  claimed: Array<ClaimedToken>;
  completed: Scalars['Boolean']['output'];
  gotchi: Aavegotchi;
  gotchiBRS?: Maybe<Scalars['BigInt']['output']>;
  gotchiKinship: Scalars['BigInt']['output'];
  gotchiTokenId: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  lastClaimed?: Maybe<Scalars['BigInt']['output']>;
  lender?: Maybe<Scalars['Bytes']['output']>;
  originalOwner?: Maybe<Scalars['Bytes']['output']>;
  period: Scalars['BigInt']['output'];
  rentDuration: Scalars['BigInt']['output'];
  splitBorrower?: Maybe<Scalars['BigInt']['output']>;
  splitOther?: Maybe<Scalars['BigInt']['output']>;
  splitOwner?: Maybe<Scalars['BigInt']['output']>;
  thirdPartyAddress?: Maybe<Scalars['Bytes']['output']>;
  timeAgreed?: Maybe<Scalars['BigInt']['output']>;
  timeCreated?: Maybe<Scalars['BigInt']['output']>;
  timeEnded?: Maybe<Scalars['BigInt']['output']>;
  tokensToShare: Array<Scalars['Bytes']['output']>;
  upfrontCost: Scalars['BigInt']['output'];
  whitelist?: Maybe<Whitelist>;
  whitelistId?: Maybe<Scalars['BigInt']['output']>;
  whitelistMembers: Array<Scalars['Bytes']['output']>;
};


export type GotchiLendingClaimedArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ClaimedToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ClaimedToken_Filter>;
};

export type GotchiLending_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GotchiLending_Filter>>>;
  borrower?: InputMaybe<Scalars['Bytes']['input']>;
  borrower_contains?: InputMaybe<Scalars['Bytes']['input']>;
  borrower_gt?: InputMaybe<Scalars['Bytes']['input']>;
  borrower_gte?: InputMaybe<Scalars['Bytes']['input']>;
  borrower_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  borrower_lt?: InputMaybe<Scalars['Bytes']['input']>;
  borrower_lte?: InputMaybe<Scalars['Bytes']['input']>;
  borrower_not?: InputMaybe<Scalars['Bytes']['input']>;
  borrower_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  borrower_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  cancelled?: InputMaybe<Scalars['Boolean']['input']>;
  cancelled_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  cancelled_not?: InputMaybe<Scalars['Boolean']['input']>;
  cancelled_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  claimed_?: InputMaybe<ClaimedToken_Filter>;
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  completed_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  completed_not?: InputMaybe<Scalars['Boolean']['input']>;
  completed_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  gotchi?: InputMaybe<Scalars['String']['input']>;
  gotchiBRS?: InputMaybe<Scalars['BigInt']['input']>;
  gotchiBRS_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gotchiBRS_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gotchiBRS_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gotchiBRS_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gotchiBRS_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gotchiBRS_not?: InputMaybe<Scalars['BigInt']['input']>;
  gotchiBRS_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gotchiKinship?: InputMaybe<Scalars['BigInt']['input']>;
  gotchiKinship_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gotchiKinship_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gotchiKinship_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gotchiKinship_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gotchiKinship_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gotchiKinship_not?: InputMaybe<Scalars['BigInt']['input']>;
  gotchiKinship_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gotchiTokenId?: InputMaybe<Scalars['BigInt']['input']>;
  gotchiTokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gotchiTokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gotchiTokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gotchiTokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gotchiTokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gotchiTokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  gotchiTokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gotchi_?: InputMaybe<Aavegotchi_Filter>;
  gotchi_contains?: InputMaybe<Scalars['String']['input']>;
  gotchi_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  gotchi_ends_with?: InputMaybe<Scalars['String']['input']>;
  gotchi_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  gotchi_gt?: InputMaybe<Scalars['String']['input']>;
  gotchi_gte?: InputMaybe<Scalars['String']['input']>;
  gotchi_in?: InputMaybe<Array<Scalars['String']['input']>>;
  gotchi_lt?: InputMaybe<Scalars['String']['input']>;
  gotchi_lte?: InputMaybe<Scalars['String']['input']>;
  gotchi_not?: InputMaybe<Scalars['String']['input']>;
  gotchi_not_contains?: InputMaybe<Scalars['String']['input']>;
  gotchi_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  gotchi_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  gotchi_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  gotchi_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  gotchi_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  gotchi_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  gotchi_starts_with?: InputMaybe<Scalars['String']['input']>;
  gotchi_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lastClaimed?: InputMaybe<Scalars['BigInt']['input']>;
  lastClaimed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastClaimed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastClaimed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastClaimed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastClaimed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastClaimed_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastClaimed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lender?: InputMaybe<Scalars['Bytes']['input']>;
  lender_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lender_gt?: InputMaybe<Scalars['Bytes']['input']>;
  lender_gte?: InputMaybe<Scalars['Bytes']['input']>;
  lender_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  lender_lt?: InputMaybe<Scalars['Bytes']['input']>;
  lender_lte?: InputMaybe<Scalars['Bytes']['input']>;
  lender_not?: InputMaybe<Scalars['Bytes']['input']>;
  lender_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  lender_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<GotchiLending_Filter>>>;
  originalOwner?: InputMaybe<Scalars['Bytes']['input']>;
  originalOwner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  originalOwner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  originalOwner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  originalOwner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  originalOwner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  originalOwner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  originalOwner_not?: InputMaybe<Scalars['Bytes']['input']>;
  originalOwner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  originalOwner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  period?: InputMaybe<Scalars['BigInt']['input']>;
  period_gt?: InputMaybe<Scalars['BigInt']['input']>;
  period_gte?: InputMaybe<Scalars['BigInt']['input']>;
  period_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  period_lt?: InputMaybe<Scalars['BigInt']['input']>;
  period_lte?: InputMaybe<Scalars['BigInt']['input']>;
  period_not?: InputMaybe<Scalars['BigInt']['input']>;
  period_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rentDuration?: InputMaybe<Scalars['BigInt']['input']>;
  rentDuration_gt?: InputMaybe<Scalars['BigInt']['input']>;
  rentDuration_gte?: InputMaybe<Scalars['BigInt']['input']>;
  rentDuration_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rentDuration_lt?: InputMaybe<Scalars['BigInt']['input']>;
  rentDuration_lte?: InputMaybe<Scalars['BigInt']['input']>;
  rentDuration_not?: InputMaybe<Scalars['BigInt']['input']>;
  rentDuration_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  splitBorrower?: InputMaybe<Scalars['BigInt']['input']>;
  splitBorrower_gt?: InputMaybe<Scalars['BigInt']['input']>;
  splitBorrower_gte?: InputMaybe<Scalars['BigInt']['input']>;
  splitBorrower_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  splitBorrower_lt?: InputMaybe<Scalars['BigInt']['input']>;
  splitBorrower_lte?: InputMaybe<Scalars['BigInt']['input']>;
  splitBorrower_not?: InputMaybe<Scalars['BigInt']['input']>;
  splitBorrower_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  splitOther?: InputMaybe<Scalars['BigInt']['input']>;
  splitOther_gt?: InputMaybe<Scalars['BigInt']['input']>;
  splitOther_gte?: InputMaybe<Scalars['BigInt']['input']>;
  splitOther_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  splitOther_lt?: InputMaybe<Scalars['BigInt']['input']>;
  splitOther_lte?: InputMaybe<Scalars['BigInt']['input']>;
  splitOther_not?: InputMaybe<Scalars['BigInt']['input']>;
  splitOther_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  splitOwner?: InputMaybe<Scalars['BigInt']['input']>;
  splitOwner_gt?: InputMaybe<Scalars['BigInt']['input']>;
  splitOwner_gte?: InputMaybe<Scalars['BigInt']['input']>;
  splitOwner_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  splitOwner_lt?: InputMaybe<Scalars['BigInt']['input']>;
  splitOwner_lte?: InputMaybe<Scalars['BigInt']['input']>;
  splitOwner_not?: InputMaybe<Scalars['BigInt']['input']>;
  splitOwner_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  thirdPartyAddress?: InputMaybe<Scalars['Bytes']['input']>;
  thirdPartyAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  thirdPartyAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  thirdPartyAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  thirdPartyAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  thirdPartyAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  thirdPartyAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  thirdPartyAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  thirdPartyAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  thirdPartyAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timeAgreed?: InputMaybe<Scalars['BigInt']['input']>;
  timeAgreed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timeAgreed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timeAgreed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timeAgreed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timeAgreed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timeAgreed_not?: InputMaybe<Scalars['BigInt']['input']>;
  timeAgreed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timeCreated?: InputMaybe<Scalars['BigInt']['input']>;
  timeCreated_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timeCreated_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timeCreated_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timeCreated_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timeCreated_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timeCreated_not?: InputMaybe<Scalars['BigInt']['input']>;
  timeCreated_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timeEnded?: InputMaybe<Scalars['BigInt']['input']>;
  timeEnded_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timeEnded_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timeEnded_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timeEnded_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timeEnded_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timeEnded_not?: InputMaybe<Scalars['BigInt']['input']>;
  timeEnded_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokensToShare?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokensToShare_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokensToShare_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokensToShare_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokensToShare_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokensToShare_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  upfrontCost?: InputMaybe<Scalars['BigInt']['input']>;
  upfrontCost_gt?: InputMaybe<Scalars['BigInt']['input']>;
  upfrontCost_gte?: InputMaybe<Scalars['BigInt']['input']>;
  upfrontCost_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  upfrontCost_lt?: InputMaybe<Scalars['BigInt']['input']>;
  upfrontCost_lte?: InputMaybe<Scalars['BigInt']['input']>;
  upfrontCost_not?: InputMaybe<Scalars['BigInt']['input']>;
  upfrontCost_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  whitelist?: InputMaybe<Scalars['String']['input']>;
  whitelistId?: InputMaybe<Scalars['BigInt']['input']>;
  whitelistId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  whitelistId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  whitelistId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  whitelistId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  whitelistId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  whitelistId_not?: InputMaybe<Scalars['BigInt']['input']>;
  whitelistId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  whitelistMembers?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  whitelistMembers_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  whitelistMembers_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  whitelistMembers_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  whitelistMembers_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  whitelistMembers_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  whitelist_?: InputMaybe<Whitelist_Filter>;
  whitelist_contains?: InputMaybe<Scalars['String']['input']>;
  whitelist_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  whitelist_ends_with?: InputMaybe<Scalars['String']['input']>;
  whitelist_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  whitelist_gt?: InputMaybe<Scalars['String']['input']>;
  whitelist_gte?: InputMaybe<Scalars['String']['input']>;
  whitelist_in?: InputMaybe<Array<Scalars['String']['input']>>;
  whitelist_lt?: InputMaybe<Scalars['String']['input']>;
  whitelist_lte?: InputMaybe<Scalars['String']['input']>;
  whitelist_not?: InputMaybe<Scalars['String']['input']>;
  whitelist_not_contains?: InputMaybe<Scalars['String']['input']>;
  whitelist_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  whitelist_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  whitelist_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  whitelist_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  whitelist_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  whitelist_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  whitelist_starts_with?: InputMaybe<Scalars['String']['input']>;
  whitelist_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum GotchiLending_OrderBy {
  Borrower = 'borrower',
  Cancelled = 'cancelled',
  Claimed = 'claimed',
  Completed = 'completed',
  Gotchi = 'gotchi',
  GotchiBrs = 'gotchiBRS',
  GotchiKinship = 'gotchiKinship',
  GotchiTokenId = 'gotchiTokenId',
  GotchiActiveListing = 'gotchi__activeListing',
  GotchiBaseRarityScore = 'gotchi__baseRarityScore',
  GotchiClaimedAt = 'gotchi__claimedAt',
  GotchiCollateral = 'gotchi__collateral',
  GotchiCreatedAt = 'gotchi__createdAt',
  GotchiEquippedSetId = 'gotchi__equippedSetID',
  GotchiEquippedSetName = 'gotchi__equippedSetName',
  GotchiEscrow = 'gotchi__escrow',
  GotchiExperience = 'gotchi__experience',
  GotchiGotchiId = 'gotchi__gotchiId',
  GotchiHauntId = 'gotchi__hauntId',
  GotchiId = 'gotchi__id',
  GotchiLastInteracted = 'gotchi__lastInteracted',
  GotchiLending = 'gotchi__lending',
  GotchiLevel = 'gotchi__level',
  GotchiLocked = 'gotchi__locked',
  GotchiMinimumStake = 'gotchi__minimumStake',
  GotchiModifiedRarityScore = 'gotchi__modifiedRarityScore',
  GotchiName = 'gotchi__name',
  GotchiNameLowerCase = 'gotchi__nameLowerCase',
  GotchiPossibleSets = 'gotchi__possibleSets',
  GotchiRandomNumber = 'gotchi__randomNumber',
  GotchiStakedAmount = 'gotchi__stakedAmount',
  GotchiStatus = 'gotchi__status',
  GotchiTimesTraded = 'gotchi__timesTraded',
  GotchiToNextLevel = 'gotchi__toNextLevel',
  GotchiUsedSkillPoints = 'gotchi__usedSkillPoints',
  GotchiWithSetsRarityScore = 'gotchi__withSetsRarityScore',
  Id = 'id',
  LastClaimed = 'lastClaimed',
  Lender = 'lender',
  OriginalOwner = 'originalOwner',
  Period = 'period',
  RentDuration = 'rentDuration',
  SplitBorrower = 'splitBorrower',
  SplitOther = 'splitOther',
  SplitOwner = 'splitOwner',
  ThirdPartyAddress = 'thirdPartyAddress',
  TimeAgreed = 'timeAgreed',
  TimeCreated = 'timeCreated',
  TimeEnded = 'timeEnded',
  TokensToShare = 'tokensToShare',
  UpfrontCost = 'upfrontCost',
  Whitelist = 'whitelist',
  WhitelistId = 'whitelistId',
  WhitelistMembers = 'whitelistMembers',
  WhitelistMaxBorrowLimit = 'whitelist__maxBorrowLimit',
  WhitelistName = 'whitelist__name',
  WhitelistOwnerAddress = 'whitelist__ownerAddress'
}

export type ItemType = {
  __typename?: 'ItemType';
  author?: Maybe<Scalars['String']['output']>;
  canBeTransferred: Scalars['Boolean']['output'];
  canPurchaseWithGhst: Scalars['Boolean']['output'];
  category: Scalars['Int']['output'];
  consumed: Scalars['BigInt']['output'];
  desc?: Maybe<Scalars['String']['output']>;
  experienceBonus?: Maybe<Scalars['BigInt']['output']>;
  ghstPrice: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  kinshipBonus?: Maybe<Scalars['Int']['output']>;
  maxQuantity: Scalars['BigInt']['output'];
  minLevel?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  rarityScoreModifier: Scalars['Int']['output'];
  slotPositions?: Maybe<Array<Scalars['Boolean']['output']>>;
  svgId: Scalars['BigInt']['output'];
  totalQuantity: Scalars['BigInt']['output'];
  traitModifiers?: Maybe<Array<Scalars['Int']['output']>>;
};

export type ItemType_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ItemType_Filter>>>;
  author?: InputMaybe<Scalars['String']['input']>;
  author_contains?: InputMaybe<Scalars['String']['input']>;
  author_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  author_ends_with?: InputMaybe<Scalars['String']['input']>;
  author_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  author_gt?: InputMaybe<Scalars['String']['input']>;
  author_gte?: InputMaybe<Scalars['String']['input']>;
  author_in?: InputMaybe<Array<Scalars['String']['input']>>;
  author_lt?: InputMaybe<Scalars['String']['input']>;
  author_lte?: InputMaybe<Scalars['String']['input']>;
  author_not?: InputMaybe<Scalars['String']['input']>;
  author_not_contains?: InputMaybe<Scalars['String']['input']>;
  author_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  author_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  author_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  author_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  author_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  author_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  author_starts_with?: InputMaybe<Scalars['String']['input']>;
  author_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  canBeTransferred?: InputMaybe<Scalars['Boolean']['input']>;
  canBeTransferred_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  canBeTransferred_not?: InputMaybe<Scalars['Boolean']['input']>;
  canBeTransferred_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  canPurchaseWithGhst?: InputMaybe<Scalars['Boolean']['input']>;
  canPurchaseWithGhst_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  canPurchaseWithGhst_not?: InputMaybe<Scalars['Boolean']['input']>;
  canPurchaseWithGhst_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  category?: InputMaybe<Scalars['Int']['input']>;
  category_gt?: InputMaybe<Scalars['Int']['input']>;
  category_gte?: InputMaybe<Scalars['Int']['input']>;
  category_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  category_lt?: InputMaybe<Scalars['Int']['input']>;
  category_lte?: InputMaybe<Scalars['Int']['input']>;
  category_not?: InputMaybe<Scalars['Int']['input']>;
  category_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  consumed?: InputMaybe<Scalars['BigInt']['input']>;
  consumed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  consumed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  consumed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  consumed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  consumed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  consumed_not?: InputMaybe<Scalars['BigInt']['input']>;
  consumed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  desc?: InputMaybe<Scalars['String']['input']>;
  desc_contains?: InputMaybe<Scalars['String']['input']>;
  desc_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  desc_ends_with?: InputMaybe<Scalars['String']['input']>;
  desc_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  desc_gt?: InputMaybe<Scalars['String']['input']>;
  desc_gte?: InputMaybe<Scalars['String']['input']>;
  desc_in?: InputMaybe<Array<Scalars['String']['input']>>;
  desc_lt?: InputMaybe<Scalars['String']['input']>;
  desc_lte?: InputMaybe<Scalars['String']['input']>;
  desc_not?: InputMaybe<Scalars['String']['input']>;
  desc_not_contains?: InputMaybe<Scalars['String']['input']>;
  desc_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  desc_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  desc_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  desc_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  desc_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  desc_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  desc_starts_with?: InputMaybe<Scalars['String']['input']>;
  desc_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  experienceBonus?: InputMaybe<Scalars['BigInt']['input']>;
  experienceBonus_gt?: InputMaybe<Scalars['BigInt']['input']>;
  experienceBonus_gte?: InputMaybe<Scalars['BigInt']['input']>;
  experienceBonus_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  experienceBonus_lt?: InputMaybe<Scalars['BigInt']['input']>;
  experienceBonus_lte?: InputMaybe<Scalars['BigInt']['input']>;
  experienceBonus_not?: InputMaybe<Scalars['BigInt']['input']>;
  experienceBonus_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ghstPrice?: InputMaybe<Scalars['BigInt']['input']>;
  ghstPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  ghstPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  ghstPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ghstPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  ghstPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  ghstPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  ghstPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  kinshipBonus?: InputMaybe<Scalars['Int']['input']>;
  kinshipBonus_gt?: InputMaybe<Scalars['Int']['input']>;
  kinshipBonus_gte?: InputMaybe<Scalars['Int']['input']>;
  kinshipBonus_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  kinshipBonus_lt?: InputMaybe<Scalars['Int']['input']>;
  kinshipBonus_lte?: InputMaybe<Scalars['Int']['input']>;
  kinshipBonus_not?: InputMaybe<Scalars['Int']['input']>;
  kinshipBonus_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  maxQuantity?: InputMaybe<Scalars['BigInt']['input']>;
  maxQuantity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxQuantity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxQuantity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxQuantity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxQuantity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxQuantity_not?: InputMaybe<Scalars['BigInt']['input']>;
  maxQuantity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minLevel?: InputMaybe<Scalars['Int']['input']>;
  minLevel_gt?: InputMaybe<Scalars['Int']['input']>;
  minLevel_gte?: InputMaybe<Scalars['Int']['input']>;
  minLevel_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  minLevel_lt?: InputMaybe<Scalars['Int']['input']>;
  minLevel_lte?: InputMaybe<Scalars['Int']['input']>;
  minLevel_not?: InputMaybe<Scalars['Int']['input']>;
  minLevel_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<ItemType_Filter>>>;
  rarityScoreModifier?: InputMaybe<Scalars['Int']['input']>;
  rarityScoreModifier_gt?: InputMaybe<Scalars['Int']['input']>;
  rarityScoreModifier_gte?: InputMaybe<Scalars['Int']['input']>;
  rarityScoreModifier_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  rarityScoreModifier_lt?: InputMaybe<Scalars['Int']['input']>;
  rarityScoreModifier_lte?: InputMaybe<Scalars['Int']['input']>;
  rarityScoreModifier_not?: InputMaybe<Scalars['Int']['input']>;
  rarityScoreModifier_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  slotPositions?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  slotPositions_contains?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  slotPositions_contains_nocase?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  slotPositions_not?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  slotPositions_not_contains?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  slotPositions_not_contains_nocase?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  svgId?: InputMaybe<Scalars['BigInt']['input']>;
  svgId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  svgId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  svgId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  svgId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  svgId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  svgId_not?: InputMaybe<Scalars['BigInt']['input']>;
  svgId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalQuantity?: InputMaybe<Scalars['BigInt']['input']>;
  totalQuantity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalQuantity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalQuantity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalQuantity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalQuantity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalQuantity_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalQuantity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  traitModifiers?: InputMaybe<Array<Scalars['Int']['input']>>;
  traitModifiers_contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  traitModifiers_contains_nocase?: InputMaybe<Array<Scalars['Int']['input']>>;
  traitModifiers_not?: InputMaybe<Array<Scalars['Int']['input']>>;
  traitModifiers_not_contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  traitModifiers_not_contains_nocase?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export enum ItemType_OrderBy {
  Author = 'author',
  CanBeTransferred = 'canBeTransferred',
  CanPurchaseWithGhst = 'canPurchaseWithGhst',
  Category = 'category',
  Consumed = 'consumed',
  Desc = 'desc',
  ExperienceBonus = 'experienceBonus',
  GhstPrice = 'ghstPrice',
  Id = 'id',
  KinshipBonus = 'kinshipBonus',
  MaxQuantity = 'maxQuantity',
  MinLevel = 'minLevel',
  Name = 'name',
  RarityScoreModifier = 'rarityScoreModifier',
  SlotPositions = 'slotPositions',
  SvgId = 'svgId',
  TotalQuantity = 'totalQuantity',
  TraitModifiers = 'traitModifiers'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Parcel = {
  __typename?: 'Parcel';
  activeListing?: Maybe<Scalars['BigInt']['output']>;
  alphaBoost: Scalars['BigInt']['output'];
  auctionId?: Maybe<Scalars['String']['output']>;
  coordinateX: Scalars['BigInt']['output'];
  coordinateY: Scalars['BigInt']['output'];
  district: Scalars['BigInt']['output'];
  fomoBoost: Scalars['BigInt']['output'];
  fudBoost: Scalars['BigInt']['output'];
  historicalPrices?: Maybe<Array<Scalars['BigInt']['output']>>;
  id: Scalars['ID']['output'];
  kekBoost: Scalars['BigInt']['output'];
  owner: User;
  parcelHash: Scalars['String']['output'];
  parcelId: Scalars['String']['output'];
  size: Scalars['BigInt']['output'];
  timesTraded: Scalars['BigInt']['output'];
  tokenId: Scalars['BigInt']['output'];
};

export type Parcel_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  activeListing?: InputMaybe<Scalars['BigInt']['input']>;
  activeListing_gt?: InputMaybe<Scalars['BigInt']['input']>;
  activeListing_gte?: InputMaybe<Scalars['BigInt']['input']>;
  activeListing_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  activeListing_lt?: InputMaybe<Scalars['BigInt']['input']>;
  activeListing_lte?: InputMaybe<Scalars['BigInt']['input']>;
  activeListing_not?: InputMaybe<Scalars['BigInt']['input']>;
  activeListing_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  alphaBoost?: InputMaybe<Scalars['BigInt']['input']>;
  alphaBoost_gt?: InputMaybe<Scalars['BigInt']['input']>;
  alphaBoost_gte?: InputMaybe<Scalars['BigInt']['input']>;
  alphaBoost_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  alphaBoost_lt?: InputMaybe<Scalars['BigInt']['input']>;
  alphaBoost_lte?: InputMaybe<Scalars['BigInt']['input']>;
  alphaBoost_not?: InputMaybe<Scalars['BigInt']['input']>;
  alphaBoost_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Parcel_Filter>>>;
  auctionId?: InputMaybe<Scalars['String']['input']>;
  auctionId_contains?: InputMaybe<Scalars['String']['input']>;
  auctionId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  auctionId_ends_with?: InputMaybe<Scalars['String']['input']>;
  auctionId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  auctionId_gt?: InputMaybe<Scalars['String']['input']>;
  auctionId_gte?: InputMaybe<Scalars['String']['input']>;
  auctionId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  auctionId_lt?: InputMaybe<Scalars['String']['input']>;
  auctionId_lte?: InputMaybe<Scalars['String']['input']>;
  auctionId_not?: InputMaybe<Scalars['String']['input']>;
  auctionId_not_contains?: InputMaybe<Scalars['String']['input']>;
  auctionId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  auctionId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  auctionId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  auctionId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  auctionId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  auctionId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  auctionId_starts_with?: InputMaybe<Scalars['String']['input']>;
  auctionId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  coordinateX?: InputMaybe<Scalars['BigInt']['input']>;
  coordinateX_gt?: InputMaybe<Scalars['BigInt']['input']>;
  coordinateX_gte?: InputMaybe<Scalars['BigInt']['input']>;
  coordinateX_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  coordinateX_lt?: InputMaybe<Scalars['BigInt']['input']>;
  coordinateX_lte?: InputMaybe<Scalars['BigInt']['input']>;
  coordinateX_not?: InputMaybe<Scalars['BigInt']['input']>;
  coordinateX_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  coordinateY?: InputMaybe<Scalars['BigInt']['input']>;
  coordinateY_gt?: InputMaybe<Scalars['BigInt']['input']>;
  coordinateY_gte?: InputMaybe<Scalars['BigInt']['input']>;
  coordinateY_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  coordinateY_lt?: InputMaybe<Scalars['BigInt']['input']>;
  coordinateY_lte?: InputMaybe<Scalars['BigInt']['input']>;
  coordinateY_not?: InputMaybe<Scalars['BigInt']['input']>;
  coordinateY_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  district?: InputMaybe<Scalars['BigInt']['input']>;
  district_gt?: InputMaybe<Scalars['BigInt']['input']>;
  district_gte?: InputMaybe<Scalars['BigInt']['input']>;
  district_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  district_lt?: InputMaybe<Scalars['BigInt']['input']>;
  district_lte?: InputMaybe<Scalars['BigInt']['input']>;
  district_not?: InputMaybe<Scalars['BigInt']['input']>;
  district_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fomoBoost?: InputMaybe<Scalars['BigInt']['input']>;
  fomoBoost_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fomoBoost_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fomoBoost_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fomoBoost_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fomoBoost_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fomoBoost_not?: InputMaybe<Scalars['BigInt']['input']>;
  fomoBoost_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fudBoost?: InputMaybe<Scalars['BigInt']['input']>;
  fudBoost_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fudBoost_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fudBoost_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fudBoost_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fudBoost_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fudBoost_not?: InputMaybe<Scalars['BigInt']['input']>;
  fudBoost_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  historicalPrices?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  historicalPrices_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  historicalPrices_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  historicalPrices_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  historicalPrices_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  historicalPrices_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  kekBoost?: InputMaybe<Scalars['BigInt']['input']>;
  kekBoost_gt?: InputMaybe<Scalars['BigInt']['input']>;
  kekBoost_gte?: InputMaybe<Scalars['BigInt']['input']>;
  kekBoost_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  kekBoost_lt?: InputMaybe<Scalars['BigInt']['input']>;
  kekBoost_lte?: InputMaybe<Scalars['BigInt']['input']>;
  kekBoost_not?: InputMaybe<Scalars['BigInt']['input']>;
  kekBoost_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Parcel_Filter>>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_?: InputMaybe<User_Filter>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_gt?: InputMaybe<Scalars['String']['input']>;
  owner_gte?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_lt?: InputMaybe<Scalars['String']['input']>;
  owner_lte?: InputMaybe<Scalars['String']['input']>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  parcelHash?: InputMaybe<Scalars['String']['input']>;
  parcelHash_contains?: InputMaybe<Scalars['String']['input']>;
  parcelHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  parcelHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  parcelHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  parcelHash_gt?: InputMaybe<Scalars['String']['input']>;
  parcelHash_gte?: InputMaybe<Scalars['String']['input']>;
  parcelHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  parcelHash_lt?: InputMaybe<Scalars['String']['input']>;
  parcelHash_lte?: InputMaybe<Scalars['String']['input']>;
  parcelHash_not?: InputMaybe<Scalars['String']['input']>;
  parcelHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  parcelHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  parcelHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  parcelHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  parcelHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  parcelHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  parcelHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  parcelHash_starts_with?: InputMaybe<Scalars['String']['input']>;
  parcelHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  parcelId?: InputMaybe<Scalars['String']['input']>;
  parcelId_contains?: InputMaybe<Scalars['String']['input']>;
  parcelId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  parcelId_ends_with?: InputMaybe<Scalars['String']['input']>;
  parcelId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  parcelId_gt?: InputMaybe<Scalars['String']['input']>;
  parcelId_gte?: InputMaybe<Scalars['String']['input']>;
  parcelId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  parcelId_lt?: InputMaybe<Scalars['String']['input']>;
  parcelId_lte?: InputMaybe<Scalars['String']['input']>;
  parcelId_not?: InputMaybe<Scalars['String']['input']>;
  parcelId_not_contains?: InputMaybe<Scalars['String']['input']>;
  parcelId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  parcelId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  parcelId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  parcelId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  parcelId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  parcelId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  parcelId_starts_with?: InputMaybe<Scalars['String']['input']>;
  parcelId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['BigInt']['input']>;
  size_gt?: InputMaybe<Scalars['BigInt']['input']>;
  size_gte?: InputMaybe<Scalars['BigInt']['input']>;
  size_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  size_lt?: InputMaybe<Scalars['BigInt']['input']>;
  size_lte?: InputMaybe<Scalars['BigInt']['input']>;
  size_not?: InputMaybe<Scalars['BigInt']['input']>;
  size_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timesTraded?: InputMaybe<Scalars['BigInt']['input']>;
  timesTraded_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timesTraded_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timesTraded_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timesTraded_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timesTraded_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timesTraded_not?: InputMaybe<Scalars['BigInt']['input']>;
  timesTraded_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenId?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Parcel_OrderBy {
  ActiveListing = 'activeListing',
  AlphaBoost = 'alphaBoost',
  AuctionId = 'auctionId',
  CoordinateX = 'coordinateX',
  CoordinateY = 'coordinateY',
  District = 'district',
  FomoBoost = 'fomoBoost',
  FudBoost = 'fudBoost',
  HistoricalPrices = 'historicalPrices',
  Id = 'id',
  KekBoost = 'kekBoost',
  Owner = 'owner',
  OwnerId = 'owner__id',
  ParcelHash = 'parcelHash',
  ParcelId = 'parcelId',
  Size = 'size',
  TimesTraded = 'timesTraded',
  TokenId = 'tokenId'
}

export type Portal = {
  __typename?: 'Portal';
  activeListing?: Maybe<Scalars['BigInt']['output']>;
  boughtAt?: Maybe<Scalars['BigInt']['output']>;
  buyer: User;
  claimedAt?: Maybe<Scalars['BigInt']['output']>;
  gotchi?: Maybe<Aavegotchi>;
  gotchiId?: Maybe<Scalars['BigInt']['output']>;
  hauntId: Scalars['BigInt']['output'];
  historicalPrices?: Maybe<Array<Scalars['BigInt']['output']>>;
  id: Scalars['ID']['output'];
  openedAt?: Maybe<Scalars['BigInt']['output']>;
  options: Array<AavegotchiOption>;
  owner: User;
  status: PortalStatus;
  timesTraded: Scalars['BigInt']['output'];
};


export type PortalOptionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AavegotchiOption_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AavegotchiOption_Filter>;
};

export enum PortalStatus {
  Bought = 'Bought',
  Claimed = 'Claimed',
  Opened = 'Opened'
}

export type Portal_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  activeListing?: InputMaybe<Scalars['BigInt']['input']>;
  activeListing_gt?: InputMaybe<Scalars['BigInt']['input']>;
  activeListing_gte?: InputMaybe<Scalars['BigInt']['input']>;
  activeListing_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  activeListing_lt?: InputMaybe<Scalars['BigInt']['input']>;
  activeListing_lte?: InputMaybe<Scalars['BigInt']['input']>;
  activeListing_not?: InputMaybe<Scalars['BigInt']['input']>;
  activeListing_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Portal_Filter>>>;
  boughtAt?: InputMaybe<Scalars['BigInt']['input']>;
  boughtAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  boughtAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  boughtAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  boughtAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  boughtAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  boughtAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  boughtAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  buyer?: InputMaybe<Scalars['String']['input']>;
  buyer_?: InputMaybe<User_Filter>;
  buyer_contains?: InputMaybe<Scalars['String']['input']>;
  buyer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  buyer_ends_with?: InputMaybe<Scalars['String']['input']>;
  buyer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  buyer_gt?: InputMaybe<Scalars['String']['input']>;
  buyer_gte?: InputMaybe<Scalars['String']['input']>;
  buyer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  buyer_lt?: InputMaybe<Scalars['String']['input']>;
  buyer_lte?: InputMaybe<Scalars['String']['input']>;
  buyer_not?: InputMaybe<Scalars['String']['input']>;
  buyer_not_contains?: InputMaybe<Scalars['String']['input']>;
  buyer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  buyer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  buyer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  buyer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  buyer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  buyer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  buyer_starts_with?: InputMaybe<Scalars['String']['input']>;
  buyer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  claimedAt?: InputMaybe<Scalars['BigInt']['input']>;
  claimedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  claimedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  claimedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  claimedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  claimedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  claimedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  claimedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gotchi?: InputMaybe<Scalars['String']['input']>;
  gotchiId?: InputMaybe<Scalars['BigInt']['input']>;
  gotchiId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gotchiId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gotchiId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gotchiId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gotchiId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gotchiId_not?: InputMaybe<Scalars['BigInt']['input']>;
  gotchiId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gotchi_?: InputMaybe<Aavegotchi_Filter>;
  gotchi_contains?: InputMaybe<Scalars['String']['input']>;
  gotchi_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  gotchi_ends_with?: InputMaybe<Scalars['String']['input']>;
  gotchi_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  gotchi_gt?: InputMaybe<Scalars['String']['input']>;
  gotchi_gte?: InputMaybe<Scalars['String']['input']>;
  gotchi_in?: InputMaybe<Array<Scalars['String']['input']>>;
  gotchi_lt?: InputMaybe<Scalars['String']['input']>;
  gotchi_lte?: InputMaybe<Scalars['String']['input']>;
  gotchi_not?: InputMaybe<Scalars['String']['input']>;
  gotchi_not_contains?: InputMaybe<Scalars['String']['input']>;
  gotchi_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  gotchi_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  gotchi_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  gotchi_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  gotchi_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  gotchi_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  gotchi_starts_with?: InputMaybe<Scalars['String']['input']>;
  gotchi_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  hauntId?: InputMaybe<Scalars['BigInt']['input']>;
  hauntId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  hauntId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  hauntId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  hauntId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  hauntId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  hauntId_not?: InputMaybe<Scalars['BigInt']['input']>;
  hauntId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  historicalPrices?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  historicalPrices_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  historicalPrices_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  historicalPrices_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  historicalPrices_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  historicalPrices_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  openedAt?: InputMaybe<Scalars['BigInt']['input']>;
  openedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  openedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  openedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  openedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  openedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  openedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  options_?: InputMaybe<AavegotchiOption_Filter>;
  or?: InputMaybe<Array<InputMaybe<Portal_Filter>>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_?: InputMaybe<User_Filter>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_gt?: InputMaybe<Scalars['String']['input']>;
  owner_gte?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_lt?: InputMaybe<Scalars['String']['input']>;
  owner_lte?: InputMaybe<Scalars['String']['input']>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<PortalStatus>;
  status_in?: InputMaybe<Array<PortalStatus>>;
  status_not?: InputMaybe<PortalStatus>;
  status_not_in?: InputMaybe<Array<PortalStatus>>;
  timesTraded?: InputMaybe<Scalars['BigInt']['input']>;
  timesTraded_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timesTraded_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timesTraded_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timesTraded_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timesTraded_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timesTraded_not?: InputMaybe<Scalars['BigInt']['input']>;
  timesTraded_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Portal_OrderBy {
  ActiveListing = 'activeListing',
  BoughtAt = 'boughtAt',
  Buyer = 'buyer',
  BuyerId = 'buyer__id',
  ClaimedAt = 'claimedAt',
  Gotchi = 'gotchi',
  GotchiId = 'gotchiId',
  GotchiActiveListing = 'gotchi__activeListing',
  GotchiBaseRarityScore = 'gotchi__baseRarityScore',
  GotchiClaimedAt = 'gotchi__claimedAt',
  GotchiCollateral = 'gotchi__collateral',
  GotchiCreatedAt = 'gotchi__createdAt',
  GotchiEquippedSetId = 'gotchi__equippedSetID',
  GotchiEquippedSetName = 'gotchi__equippedSetName',
  GotchiEscrow = 'gotchi__escrow',
  GotchiExperience = 'gotchi__experience',
  GotchiGotchiId = 'gotchi__gotchiId',
  GotchiHauntId = 'gotchi__hauntId',
GotchiKinship = 'gotchi__kinship',
  GotchiLastInteracted = 'gotchi__lastInteracted',
  GotchiLending = 'gotchi__lending',
  GotchiLevel = 'gotchi__level',
  GotchiLocked = 'gotchi__locked',
  GotchiMinimumStake = 'gotchi__minimumStake',
  GotchiModifiedRarityScore = 'gotchi__modifiedRarityScore',
  GotchiName = 'gotchi__name',
  GotchiNameLowerCase = 'gotchi__nameLowerCase',
  GotchiPossibleSets = 'gotchi__possibleSets',
  GotchiRandomNumber = 'gotchi__randomNumber',
  GotchiStakedAmount = 'gotchi__stakedAmount',
  GotchiStatus = 'gotchi__status',
  GotchiTimesTraded = 'gotchi__timesTraded',
  GotchiToNextLevel = 'gotchi__toNextLevel',
  GotchiUsedSkillPoints = 'gotchi__usedSkillPoints',
  GotchiWithSetsRarityScore = 'gotchi__withSetsRarityScore',
  HauntId = 'hauntId',
  HistoricalPrices = 'historicalPrices',
  Id = 'id',
  OpenedAt = 'openedAt',
  Options = 'options',
  Owner = 'owner',
  OwnerId = 'owner__id',
  Status = 'status',
  TimesTraded = 'timesTraded'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  aavegotchi?: Maybe<Aavegotchi>;
  aavegotchiOption?: Maybe<AavegotchiOption>;
  aavegotchiOptions: Array<AavegotchiOption>;
  aavegotchis: Array<Aavegotchi>;
  claimedToken?: Maybe<ClaimedToken>;
  claimedTokens: Array<ClaimedToken>;
  erc721Listing?: Maybe<Erc721Listing>;
  erc721Listings: Array<Erc721Listing>;
  erc1155Listing?: Maybe<Erc1155Listing>;
  erc1155Listings: Array<Erc1155Listing>;
  erc1155Purchase?: Maybe<Erc1155Purchase>;
  erc1155Purchases: Array<Erc1155Purchase>;
  gotchiLending?: Maybe<GotchiLending>;
  gotchiLendings: Array<GotchiLending>;
  itemType?: Maybe<ItemType>;
  itemTypes: Array<ItemType>;
  parcel?: Maybe<Parcel>;
  parcels: Array<Parcel>;
  portal?: Maybe<Portal>;
  portals: Array<Portal>;
  statistic?: Maybe<Statistic>;
  statistics: Array<Statistic>;
  user?: Maybe<User>;
  users: Array<User>;
  wearableSet?: Maybe<WearableSet>;
  wearableSets: Array<WearableSet>;
  whitelist?: Maybe<Whitelist>;
  whitelists: Array<Whitelist>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAavegotchiArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAavegotchiOptionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAavegotchiOptionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AavegotchiOption_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AavegotchiOption_Filter>;
};


export type QueryAavegotchisArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Aavegotchi_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Aavegotchi_Filter>;
};


export type QueryClaimedTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryClaimedTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ClaimedToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ClaimedToken_Filter>;
};


export type QueryErc721ListingArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryErc721ListingsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc721Listing_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc721Listing_Filter>;
};


export type QueryErc1155ListingArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryErc1155ListingsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1155Listing_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1155Listing_Filter>;
};


export type QueryErc1155PurchaseArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryErc1155PurchasesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1155Purchase_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1155Purchase_Filter>;
};


export type QueryGotchiLendingArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGotchiLendingsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GotchiLending_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GotchiLending_Filter>;
};


export type QueryItemTypeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryItemTypesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ItemType_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ItemType_Filter>;
};


export type QueryParcelArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryParcelsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Parcel_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Parcel_Filter>;
};


export type QueryPortalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPortalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Portal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Portal_Filter>;
};


export type QueryStatisticArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStatisticsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Statistic_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Statistic_Filter>;
};


export type QueryUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};


export type QueryWearableSetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryWearableSetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WearableSet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WearableSet_Filter>;
};


export type QueryWhitelistArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryWhitelistsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Whitelist_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Whitelist_Filter>;
};

export type Statistic = {
  __typename?: 'Statistic';
  /** Total amount of Aavegotchis borrowed */
  aavegotchisBorrowed: Scalars['BigInt']['output'];
  /** Total amount of Aavegotchis claimed */
  aavegotchisClaimed: Scalars['BigInt']['output'];
  /** Total amount of Aavegotchis sacrificed */
  aavegotchisSacrificed: Scalars['BigInt']['output'];
  erc721ActiveListingCount: Scalars['BigInt']['output'];
  erc721TotalVolume: Scalars['BigInt']['output'];
  erc1155ActiveListingCount: Scalars['BigInt']['output'];
  erc1155TotalVolume: Scalars['BigInt']['output'];
  /** There will be a single Statistic entity with id = '0' */
  id: Scalars['ID']['output'];
  /** Total amount of portals that have been bought. */
  portalsBought: Scalars['BigInt']['output'];
  /** Total amount of portals that have been opened */
  portalsOpened: Scalars['BigInt']['output'];
  totalConsumablesVolume: Scalars['BigInt']['output'];
  totalTicketsVolume: Scalars['BigInt']['output'];
  totalWearablesVolume: Scalars['BigInt']['output'];
};

export type Statistic_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  aavegotchisBorrowed?: InputMaybe<Scalars['BigInt']['input']>;
  aavegotchisBorrowed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  aavegotchisBorrowed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  aavegotchisBorrowed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  aavegotchisBorrowed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  aavegotchisBorrowed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  aavegotchisBorrowed_not?: InputMaybe<Scalars['BigInt']['input']>;
  aavegotchisBorrowed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  aavegotchisClaimed?: InputMaybe<Scalars['BigInt']['input']>;
  aavegotchisClaimed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  aavegotchisClaimed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  aavegotchisClaimed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  aavegotchisClaimed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  aavegotchisClaimed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  aavegotchisClaimed_not?: InputMaybe<Scalars['BigInt']['input']>;
  aavegotchisClaimed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  aavegotchisSacrificed?: InputMaybe<Scalars['BigInt']['input']>;
  aavegotchisSacrificed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  aavegotchisSacrificed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  aavegotchisSacrificed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  aavegotchisSacrificed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  aavegotchisSacrificed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  aavegotchisSacrificed_not?: InputMaybe<Scalars['BigInt']['input']>;
  aavegotchisSacrificed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Statistic_Filter>>>;
  erc721ActiveListingCount?: InputMaybe<Scalars['BigInt']['input']>;
  erc721ActiveListingCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  erc721ActiveListingCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  erc721ActiveListingCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  erc721ActiveListingCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  erc721ActiveListingCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  erc721ActiveListingCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  erc721ActiveListingCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  erc721TotalVolume?: InputMaybe<Scalars['BigInt']['input']>;
  erc721TotalVolume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  erc721TotalVolume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  erc721TotalVolume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  erc721TotalVolume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  erc721TotalVolume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  erc721TotalVolume_not?: InputMaybe<Scalars['BigInt']['input']>;
  erc721TotalVolume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  erc1155ActiveListingCount?: InputMaybe<Scalars['BigInt']['input']>;
  erc1155ActiveListingCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  erc1155ActiveListingCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  erc1155ActiveListingCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  erc1155ActiveListingCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  erc1155ActiveListingCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  erc1155ActiveListingCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  erc1155ActiveListingCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  erc1155TotalVolume?: InputMaybe<Scalars['BigInt']['input']>;
  erc1155TotalVolume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  erc1155TotalVolume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  erc1155TotalVolume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  erc1155TotalVolume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  erc1155TotalVolume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  erc1155TotalVolume_not?: InputMaybe<Scalars['BigInt']['input']>;
  erc1155TotalVolume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Statistic_Filter>>>;
  portalsBought?: InputMaybe<Scalars['BigInt']['input']>;
  portalsBought_gt?: InputMaybe<Scalars['BigInt']['input']>;
  portalsBought_gte?: InputMaybe<Scalars['BigInt']['input']>;
  portalsBought_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  portalsBought_lt?: InputMaybe<Scalars['BigInt']['input']>;
  portalsBought_lte?: InputMaybe<Scalars['BigInt']['input']>;
  portalsBought_not?: InputMaybe<Scalars['BigInt']['input']>;
  portalsBought_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  portalsOpened?: InputMaybe<Scalars['BigInt']['input']>;
  portalsOpened_gt?: InputMaybe<Scalars['BigInt']['input']>;
  portalsOpened_gte?: InputMaybe<Scalars['BigInt']['input']>;
  portalsOpened_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  portalsOpened_lt?: InputMaybe<Scalars['BigInt']['input']>;
  portalsOpened_lte?: InputMaybe<Scalars['BigInt']['input']>;
  portalsOpened_not?: InputMaybe<Scalars['BigInt']['input']>;
  portalsOpened_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalConsumablesVolume?: InputMaybe<Scalars['BigInt']['input']>;
  totalConsumablesVolume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalConsumablesVolume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalConsumablesVolume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalConsumablesVolume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalConsumablesVolume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalConsumablesVolume_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalConsumablesVolume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTicketsVolume?: InputMaybe<Scalars['BigInt']['input']>;
  totalTicketsVolume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTicketsVolume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTicketsVolume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTicketsVolume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTicketsVolume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTicketsVolume_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalTicketsVolume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalWearablesVolume?: InputMaybe<Scalars['BigInt']['input']>;
  totalWearablesVolume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalWearablesVolume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalWearablesVolume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalWearablesVolume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalWearablesVolume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalWearablesVolume_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalWearablesVolume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Statistic_OrderBy {
  AavegotchisBorrowed = 'aavegotchisBorrowed',
  AavegotchisClaimed = 'aavegotchisClaimed',
  AavegotchisSacrificed = 'aavegotchisSacrificed',
  Erc721ActiveListingCount = 'erc721ActiveListingCount',
  Erc721TotalVolume = 'erc721TotalVolume',
  Erc1155ActiveListingCount = 'erc1155ActiveListingCount',
  Erc1155TotalVolume = 'erc1155TotalVolume',
  Id = 'id',
  PortalsBought = 'portalsBought',
  PortalsOpened = 'portalsOpened',
  TotalConsumablesVolume = 'totalConsumablesVolume',
  TotalTicketsVolume = 'totalTicketsVolume',
  TotalWearablesVolume = 'totalWearablesVolume'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  aavegotchi?: Maybe<Aavegotchi>;
  aavegotchiOption?: Maybe<AavegotchiOption>;
  aavegotchiOptions: Array<AavegotchiOption>;
  aavegotchis: Array<Aavegotchi>;
  claimedToken?: Maybe<ClaimedToken>;
  claimedTokens: Array<ClaimedToken>;
  erc721Listing?: Maybe<Erc721Listing>;
  erc721Listings: Array<Erc721Listing>;
  erc1155Listing?: Maybe<Erc1155Listing>;
  erc1155Listings: Array<Erc1155Listing>;
  erc1155Purchase?: Maybe<Erc1155Purchase>;
  erc1155Purchases: Array<Erc1155Purchase>;
  gotchiLending?: Maybe<GotchiLending>;
  gotchiLendings: Array<GotchiLending>;
  itemType?: Maybe<ItemType>;
  itemTypes: Array<ItemType>;
  parcel?: Maybe<Parcel>;
  parcels: Array<Parcel>;
  portal?: Maybe<Portal>;
  portals: Array<Portal>;
  statistic?: Maybe<Statistic>;
  statistics: Array<Statistic>;
  user?: Maybe<User>;
  users: Array<User>;
  wearableSet?: Maybe<WearableSet>;
  wearableSets: Array<WearableSet>;
  whitelist?: Maybe<Whitelist>;
  whitelists: Array<Whitelist>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionAavegotchiArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAavegotchiOptionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAavegotchiOptionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AavegotchiOption_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AavegotchiOption_Filter>;
};


export type SubscriptionAavegotchisArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Aavegotchi_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Aavegotchi_Filter>;
};


export type SubscriptionClaimedTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionClaimedTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ClaimedToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ClaimedToken_Filter>;
};


export type SubscriptionErc721ListingArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionErc721ListingsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc721Listing_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc721Listing_Filter>;
};


export type SubscriptionErc1155ListingArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionErc1155ListingsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1155Listing_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1155Listing_Filter>;
};


export type SubscriptionErc1155PurchaseArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionErc1155PurchasesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1155Purchase_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1155Purchase_Filter>;
};


export type SubscriptionGotchiLendingArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGotchiLendingsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GotchiLending_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GotchiLending_Filter>;
};


export type SubscriptionItemTypeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionItemTypesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ItemType_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ItemType_Filter>;
};


export type SubscriptionParcelArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionParcelsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Parcel_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Parcel_Filter>;
};


export type SubscriptionPortalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPortalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Portal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Portal_Filter>;
};


export type SubscriptionStatisticArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionStatisticsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Statistic_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Statistic_Filter>;
};


export type SubscriptionUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};


export type SubscriptionWearableSetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionWearableSetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WearableSet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WearableSet_Filter>;
};


export type SubscriptionWhitelistArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionWhitelistsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Whitelist_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Whitelist_Filter>;
};

export type User = {
  __typename?: 'User';
  gotchisBorrowed: Array<Scalars['BigInt']['output']>;
  gotchisLentOut: Array<Scalars['BigInt']['output']>;
  gotchisOriginalOwned: Array<Aavegotchi>;
  gotchisOwned: Array<Aavegotchi>;
  id: Scalars['ID']['output'];
  parcelsOwned: Array<Parcel>;
  portalsBought: Array<Portal>;
  portalsOwned: Array<Portal>;
};


export type UserGotchisOriginalOwnedArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Aavegotchi_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Aavegotchi_Filter>;
};


export type UserGotchisOwnedArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Aavegotchi_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Aavegotchi_Filter>;
};


export type UserParcelsOwnedArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Parcel_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Parcel_Filter>;
};


export type UserPortalsBoughtArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Portal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Portal_Filter>;
};


export type UserPortalsOwnedArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Portal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Portal_Filter>;
};

export type User_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<User_Filter>>>;
  gotchisBorrowed?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gotchisBorrowed_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gotchisBorrowed_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gotchisBorrowed_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gotchisBorrowed_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gotchisBorrowed_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gotchisLentOut?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gotchisLentOut_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gotchisLentOut_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gotchisLentOut_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gotchisLentOut_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gotchisLentOut_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gotchisOriginalOwned_?: InputMaybe<Aavegotchi_Filter>;
  gotchisOwned_?: InputMaybe<Aavegotchi_Filter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<User_Filter>>>;
  parcelsOwned_?: InputMaybe<Parcel_Filter>;
  portalsBought_?: InputMaybe<Portal_Filter>;
  portalsOwned_?: InputMaybe<Portal_Filter>;
};

export enum User_OrderBy {
  GotchisBorrowed = 'gotchisBorrowed',
  GotchisLentOut = 'gotchisLentOut',
  GotchisOriginalOwned = 'gotchisOriginalOwned',
  GotchisOwned = 'gotchisOwned',
  Id = 'id',
  ParcelsOwned = 'parcelsOwned',
  PortalsBought = 'portalsBought',
  PortalsOwned = 'portalsOwned'
}

export type WearableSet = {
  __typename?: 'WearableSet';
  allowedCollaterals?: Maybe<Array<Scalars['Int']['output']>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  traitBonuses?: Maybe<Array<Scalars['Int']['output']>>;
  wearableIds?: Maybe<Array<Scalars['Int']['output']>>;
};

export type WearableSet_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  allowedCollaterals?: InputMaybe<Array<Scalars['Int']['input']>>;
  allowedCollaterals_contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  allowedCollaterals_contains_nocase?: InputMaybe<Array<Scalars['Int']['input']>>;
  allowedCollaterals_not?: InputMaybe<Array<Scalars['Int']['input']>>;
  allowedCollaterals_not_contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  allowedCollaterals_not_contains_nocase?: InputMaybe<Array<Scalars['Int']['input']>>;
  and?: InputMaybe<Array<InputMaybe<WearableSet_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<WearableSet_Filter>>>;
  traitBonuses?: InputMaybe<Array<Scalars['Int']['input']>>;
  traitBonuses_contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  traitBonuses_contains_nocase?: InputMaybe<Array<Scalars['Int']['input']>>;
  traitBonuses_not?: InputMaybe<Array<Scalars['Int']['input']>>;
  traitBonuses_not_contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  traitBonuses_not_contains_nocase?: InputMaybe<Array<Scalars['Int']['input']>>;
  wearableIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  wearableIds_contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  wearableIds_contains_nocase?: InputMaybe<Array<Scalars['Int']['input']>>;
  wearableIds_not?: InputMaybe<Array<Scalars['Int']['input']>>;
  wearableIds_not_contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  wearableIds_not_contains_nocase?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export enum WearableSet_OrderBy {
  AllowedCollaterals = 'allowedCollaterals',
  Id = 'id',
  Name = 'name',
  TraitBonuses = 'traitBonuses',
  WearableIds = 'wearableIds'
}

export type Whitelist = {
  __typename?: 'Whitelist';
  id: Scalars['ID']['output'];
  /** Access Right for max borrowed Gotchis, default 1 */
  maxBorrowLimit?: Maybe<Scalars['Int']['output']>;
  members: Array<Scalars['Bytes']['output']>;
  name: Scalars['String']['output'];
  owner: User;
  ownerAddress: Scalars['Bytes']['output'];
};

export type Whitelist_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Whitelist_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  maxBorrowLimit?: InputMaybe<Scalars['Int']['input']>;
  maxBorrowLimit_gt?: InputMaybe<Scalars['Int']['input']>;
  maxBorrowLimit_gte?: InputMaybe<Scalars['Int']['input']>;
  maxBorrowLimit_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  maxBorrowLimit_lt?: InputMaybe<Scalars['Int']['input']>;
  maxBorrowLimit_lte?: InputMaybe<Scalars['Int']['input']>;
  maxBorrowLimit_not?: InputMaybe<Scalars['Int']['input']>;
  maxBorrowLimit_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  members?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  members_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  members_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  members_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  members_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  members_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Whitelist_Filter>>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  ownerAddress?: InputMaybe<Scalars['Bytes']['input']>;
  ownerAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  ownerAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  ownerAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  ownerAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  ownerAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  ownerAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  ownerAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  ownerAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  ownerAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  owner_?: InputMaybe<User_Filter>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_gt?: InputMaybe<Scalars['String']['input']>;
  owner_gte?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_lt?: InputMaybe<Scalars['String']['input']>;
  owner_lte?: InputMaybe<Scalars['String']['input']>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Whitelist_OrderBy {
  Id = 'id',
  MaxBorrowLimit = 'maxBorrowLimit',
  Members = 'members',
  Name = 'name',
  Owner = 'owner',
  OwnerAddress = 'ownerAddress',
  OwnerId = 'owner__id'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type GotchiFieldsFragment = { __typename?: 'Aavegotchi', id: string, gotchiId: any, name: string, status: any, baseRarityScore: any, modifiedRarityScore: any, kinship: any, locked: boolean, equippedWearables: Array<number>, numericTraits: Array<number>, modifiedNumericTraits: Array<number>, level: any, experience: any };

export type PortalFieldsFragment = { __typename?: 'Portal', id: string, hauntId: any, openedAt?: any | null, status: PortalStatus };

export type GotchiQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GotchiQuery = { __typename?: 'Query', aavegotchi?: { __typename?: 'Aavegotchi', id: string, gotchiId: any, name: string, status: any, baseRarityScore: any, modifiedRarityScore: any, kinship: any, locked: boolean, equippedWearables: Array<number>, numericTraits: Array<number>, modifiedNumericTraits: Array<number>, level: any, experience: any } | null };

export type GotchisQueryVariables = Exact<{
  owner: Scalars['String']['input'];
}>;


export type GotchisQuery = { __typename?: 'Query', aavegotchis: Array<{ __typename?: 'Aavegotchi', id: string, gotchiId: any, name: string, status: any, baseRarityScore: any, modifiedRarityScore: any, kinship: any, locked: boolean, equippedWearables: Array<number>, numericTraits: Array<number>, modifiedNumericTraits: Array<number>, level: any, experience: any }> };

export type GotchisByIdQueryVariables = Exact<{
  ids?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
}>;


export type GotchisByIdQuery = { __typename?: 'Query', aavegotchis: Array<{ __typename?: 'Aavegotchi', id: string, gotchiId: any, name: string, status: any, baseRarityScore: any, modifiedRarityScore: any, kinship: any, locked: boolean, equippedWearables: Array<number>, numericTraits: Array<number>, modifiedNumericTraits: Array<number>, level: any, experience: any }> };

export type PortalsQueryVariables = Exact<{
  owner: Scalars['String']['input'];
}>;


export type PortalsQuery = { __typename?: 'Query', portals: Array<{ __typename?: 'Portal', id: string, hauntId: any, openedAt?: any | null, status: PortalStatus }> };

export type PortalsByIdQueryVariables = Exact<{
  ids?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
}>;


export type PortalsByIdQuery = { __typename?: 'Query', portals: Array<{ __typename?: 'Portal', id: string, hauntId: any, openedAt?: any | null, status: PortalStatus }> };

export const GotchiFieldsFragmentDoc = gql`
    fragment GotchiFields on Aavegotchi {
  id
  gotchiId
  name
  status
  baseRarityScore
  modifiedRarityScore
  kinship
  locked
  equippedWearables
  numericTraits
  modifiedNumericTraits
  level
  experience
}
    `;
export const PortalFieldsFragmentDoc = gql`
    fragment PortalFields on Portal {
  id
  hauntId
  openedAt
  status
}
    `;
export const GotchiDocument = gql`
    query gotchi($id: ID!) {
  aavegotchi(id: $id) {
    ...GotchiFields
  }
}
    ${GotchiFieldsFragmentDoc}`;

/**
 * __useGotchiQuery__
 *
 * To run a query within a React component, call `useGotchiQuery` and pass it any options that fit your needs.
 * When your component renders, `useGotchiQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGotchiQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGotchiQuery(baseOptions: Apollo.QueryHookOptions<GotchiQuery, GotchiQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GotchiQuery, GotchiQueryVariables>(GotchiDocument, options);
      }
export function useGotchiLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GotchiQuery, GotchiQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GotchiQuery, GotchiQueryVariables>(GotchiDocument, options);
        }
export type GotchiQueryHookResult = ReturnType<typeof useGotchiQuery>;
export type GotchiLazyQueryHookResult = ReturnType<typeof useGotchiLazyQuery>;
export type GotchiQueryResult = Apollo.QueryResult<GotchiQuery, GotchiQueryVariables>;
export const GotchisDocument = gql`
    query gotchis($owner: String!) {
  aavegotchis(where: {originalOwner: $owner}) {
    ...GotchiFields
  }
}
    ${GotchiFieldsFragmentDoc}`;

/**
 * __useGotchisQuery__
 *
 * To run a query within a React component, call `useGotchisQuery` and pass it any options that fit your needs.
 * When your component renders, `useGotchisQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGotchisQuery({
 *   variables: {
 *      owner: // value for 'owner'
 *   },
 * });
 */
export function useGotchisQuery(baseOptions: Apollo.QueryHookOptions<GotchisQuery, GotchisQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GotchisQuery, GotchisQueryVariables>(GotchisDocument, options);
      }
export function useGotchisLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GotchisQuery, GotchisQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GotchisQuery, GotchisQueryVariables>(GotchisDocument, options);
        }
export type GotchisQueryHookResult = ReturnType<typeof useGotchisQuery>;
export type GotchisLazyQueryHookResult = ReturnType<typeof useGotchisLazyQuery>;
export type GotchisQueryResult = Apollo.QueryResult<GotchisQuery, GotchisQueryVariables>;
export const GotchisByIdDocument = gql`
    query gotchisById($ids: [ID!]) {
  aavegotchis(where: {id_in: $ids}) {
    ...GotchiFields
  }
}
    ${GotchiFieldsFragmentDoc}`;

/**
 * __useGotchisByIdQuery__
 *
 * To run a query within a React component, call `useGotchisByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGotchisByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGotchisByIdQuery({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useGotchisByIdQuery(baseOptions?: Apollo.QueryHookOptions<GotchisByIdQuery, GotchisByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GotchisByIdQuery, GotchisByIdQueryVariables>(GotchisByIdDocument, options);
      }
export function useGotchisByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GotchisByIdQuery, GotchisByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GotchisByIdQuery, GotchisByIdQueryVariables>(GotchisByIdDocument, options);
        }
export type GotchisByIdQueryHookResult = ReturnType<typeof useGotchisByIdQuery>;
export type GotchisByIdLazyQueryHookResult = ReturnType<typeof useGotchisByIdLazyQuery>;
export type GotchisByIdQueryResult = Apollo.QueryResult<GotchisByIdQuery, GotchisByIdQueryVariables>;
export const PortalsDocument = gql`
    query portals($owner: String!) {
  portals(where: {owner: $owner, openedAt: null}) {
    ...PortalFields
  }
}
    ${PortalFieldsFragmentDoc}`;

/**
 * __usePortalsQuery__
 *
 * To run a query within a React component, call `usePortalsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePortalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePortalsQuery({
 *   variables: {
 *      owner: // value for 'owner'
 *   },
 * });
 */
export function usePortalsQuery(baseOptions: Apollo.QueryHookOptions<PortalsQuery, PortalsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PortalsQuery, PortalsQueryVariables>(PortalsDocument, options);
      }
export function usePortalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PortalsQuery, PortalsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PortalsQuery, PortalsQueryVariables>(PortalsDocument, options);
        }
export type PortalsQueryHookResult = ReturnType<typeof usePortalsQuery>;
export type PortalsLazyQueryHookResult = ReturnType<typeof usePortalsLazyQuery>;
export type PortalsQueryResult = Apollo.QueryResult<PortalsQuery, PortalsQueryVariables>;
export const PortalsByIdDocument = gql`
    query portalsById($ids: [ID!]) {
  portals(where: {id_in: $ids}) {
    ...PortalFields
  }
}
    ${PortalFieldsFragmentDoc}`;

/**
 * __usePortalsByIdQuery__
 *
 * To run a query within a React component, call `usePortalsByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `usePortalsByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePortalsByIdQuery({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function usePortalsByIdQuery(baseOptions?: Apollo.QueryHookOptions<PortalsByIdQuery, PortalsByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PortalsByIdQuery, PortalsByIdQueryVariables>(PortalsByIdDocument, options);
      }
export function usePortalsByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PortalsByIdQuery, PortalsByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PortalsByIdQuery, PortalsByIdQueryVariables>(PortalsByIdDocument, options);
        }
export type PortalsByIdQueryHookResult = ReturnType<typeof usePortalsByIdQuery>;
export type PortalsByIdLazyQueryHookResult = ReturnType<typeof usePortalsByIdLazyQuery>;
export type PortalsByIdQueryResult = Apollo.QueryResult<PortalsByIdQuery, PortalsByIdQueryVariables>;