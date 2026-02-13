import { ApprovableAsset } from "@/types/types";
import {
  PropsWithChildren,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";


// The context itself
// Note the undefined! type assertion. This is a non-null assertion operator. It tells the compiler that the value is not null or undefined.
// That trick prevents the compiler from complaining about the value being undefined. 
export const CartContext = createContext<{assets: ApprovableAsset[]; setAssets: Dispatch<SetStateAction<ApprovableAsset[]>>;}>(undefined!);

export const CartContextProvider = (props: PropsWithChildren) => {
  const [assets, setAssets] = useState<ApprovableAsset[]>([]);
  return (
    <CartContext.Provider value={{ assets, setAssets }}>
      {props.children}
    </CartContext.Provider>
  );
};