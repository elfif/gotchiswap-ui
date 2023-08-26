import "./globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { Layout } from "../components/layout";
import { InjectApollo } from "@/components/hoc/apollo";
import { InjectWagmi } from "@/components/hoc/wagmi";
import { TxContextProvider } from "@/contexts/TxContext";
import { ModalContextProvider } from "@/contexts/ModalContext";
import { CartContextProvider } from "@/contexts/CartContext";
import { ConnectedCheck } from "@/components/hoc/wallet";
import { Header } from "@/components/hoc/header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <InjectApollo>
      <InjectWagmi>
        <Layout>
          <ConnectedCheck>
            <CartContextProvider>
              <TxContextProvider>
                <ModalContextProvider>
                  <Header>
                    <Component {...pageProps} />
                  </Header>
                </ModalContextProvider>
              </TxContextProvider>
            </CartContextProvider>
          </ConnectedCheck>
        </Layout>
      </InjectWagmi>
    </InjectApollo>
  );
}
