import { Fragment, useContext, useState } from "react";
import { TxContext, TxContextType } from "@/contexts/TxContext";
import { BaseModal } from "@/components/generics/modals/BaseModal";
import { useWaitForTransaction } from "wagmi";
import { ModalContext } from "@/contexts/ModalContext";
import { shortenAddress } from "@/helpers/tools";
import { Transition, Dialog } from "@headlessui/react";

const TxStatus = (props: TxContextType) => {
  // const { data, isError, isLoading } = useWaitForTransaction({ hash: props.hash })

  // if (isLoading) return <div>Processing…</div>
  // if (isError) return <div>Transaction error</div>

  return (
    <div className="flex flex-col gap-y-3">
      <div>{props.operation}</div>
      <div>Tx status: {props.status}</div>
      <div>Tx hash: {shortenAddress(props.hash)}</div>
    </div>
  );
};

export const TxModal = () => {
  const ctx = useContext(TxContext);
  const [open, setOpen] = useState(true);
  if (!ctx || !ctx.txContextValue.hash) {
    return <></>
  } 
  console.log("open modal");
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-purple-300 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-md bg-purple-950 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold leading-6 text-white"
                    >
                      Transaction status
                    </Dialog.Title>
                    <div className="mt-2 text-white">
                      <div className="flex flex-col gap-y-3">
                        <div>{ctx.txContextValue.operation}</div>
                        <div>Tx status: {ctx.txContextValue.status}</div>
                        <div>Tx hash: {shortenAddress(ctx.txContextValue.hash)}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-gotchi-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gotchi-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => setOpen(false)}
                  >
                    Close modal
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    // <BaseModal initialOpen={ctx.txContextValue.status === "success"}>
    //   <TxStatus {...ctx.txContextValue} />
    // </BaseModal>
  );
};
