import { Fragment, useContext, useEffect, useState } from "react";
import { classNames, shortenAddress } from "@/helpers/tools";
import { Transition, Dialog } from "@headlessui/react";
import { TxContextType } from "@/types/types";
import { TxStatus } from "@/helpers/enums";
import { StatusDisplay } from "./StatusDisplay";
import { Loader } from "@/components/generics/loaders/Loader";

export const TxModal = (props: { txContext: TxContextType }) => {
  // const ctx = useContext(TxContext);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log("Modal UseEffect", props.txContext.status);
    if (
      props.txContext &&
      props.txContext.status 
    ) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [props.txContext]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-2000"
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
              leave="ease-in duration-1600"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-md bg-purple-950 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <div className=" text-white">
                      <div className="flex flex-col gap-y-3">
                        <div className="font-semibold text-lg">
                          {props.txContext.operation}
                        </div>
                        <Loader status={props.txContext.status}/>
                        <div>
                          <StatusDisplay status={props.txContext.status} />
                        </div>
                        <div className={classNames((!props.txContext.status || props.txContext.hash === "0x0") && 'text-purple-950')}>
                          <a
                            href={`https://basescan.org/tx/${props.txContext.hash}`}
                            target="_blank"
                          >
                            Tx hash: {shortenAddress(props.txContext.hash)}
                          </a>
                        </div>
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
  );
};
