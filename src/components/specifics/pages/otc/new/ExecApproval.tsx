import { TxModal } from "@/components/specifics/modals/tx/TxModal";
import { CartContext } from "@/contexts/CartContext";
import { TxContext } from "@/contexts/TxContext";
import { TxStatus } from "@/helpers/enums";
import { sleep } from "@/helpers/tools";
import { useApprovalExec } from "@/hooks/ApprovalExec";
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

export const ExecApproval = () => {
  const [approveTxStarted, setApproveTxStarted] = useState<boolean>(false);
  const cartCtx = useContext(CartContext);
  console.log("render ExecApproval");
  return (
    <>
      <div className="flex flex-col gap-y-5 place-items-center">
        <ul>
          {cartCtx.assets
            .filter(
              (asset) => !asset.approved && asset.__typename !== "wearable"
            )
            .map((asset) => (
              <li
                className="font-kanit before:content-['G.'] before:font-gotchi before:mr-1"
                key={asset.id}
              >
                {asset.__typename} {asset.id} needs to be approved
              </li>
            ))}
          {cartCtx.assets.findIndex(
            (asset) => !asset.approved && asset.__typename === "wearable"
          ) > -1 && (
            <li className="font-kanit before:content-['V.'] before:font-gotchi before:mr-1">
              Wearables need to be approved
            </li>
          )}
        </ul>
        {!approveTxStarted && (
          <button
            className="btn-pink"
            onClick={() => {
              setApproveTxStarted(true);
            }}
          >
            Approuver
          </button>
        )}

        {approveTxStarted && (
          <ExecTx
            approveTxStarted={approveTxStarted}
            setApproveTxStarted={setApproveTxStarted}
          />
        )}
      </div>
    </>
  );
};

const ExecTx = (props: {
  approveTxStarted: boolean;
  setApproveTxStarted: Dispatch<SetStateAction<boolean>>;
}) => {
  console.log("render ExecTx");
  const cartCtx = useContext(CartContext);
  //const txContext2 = useContext(TxContext);
  // I don't want to send a state var into the hook, so I copy the array
  // Not sure that is necessary
  const assetsCopy = [...cartCtx.assets];
  const { status, txContext, assets } = useApprovalExec(assetsCopy, props.setApproveTxStarted);

  //txContext2.setTxContextValue(txContext);

  useEffect(() => {
    console.log("useEffect in ExecTx");
    cartCtx.setAssets(assets);
    //txContext2.setTxContextValue(txContext);
  }, [cartCtx.setAssets, assets, sleep]);

  // return <>Transaction in progress</>
  return <TxModal txContext={txContext} />;
};
