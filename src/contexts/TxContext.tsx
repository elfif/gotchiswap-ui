import { TxContextType, txContextDefaultValue } from "@/types/types";
import {
  PropsWithChildren,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

// The context itself
export const TxContext = createContext<{txContextValue: TxContextType; setTxContextValue: Dispatch<SetStateAction<TxContextType>>;}>(undefined!);

// The context provider
// By embedding a state in the context, we can use it to read / write the status of the Tx in any component through useContext function
export const TxContextProvider = (props: PropsWithChildren) => {
  const [txContextValue, setTxContextValue] = useState<TxContextType>(
    txContextDefaultValue
  );
  return (
    <TxContext.Provider value={{ txContextValue, setTxContextValue }}>
      {props.children}
    </TxContext.Provider>
  );
};
