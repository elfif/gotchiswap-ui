import config from "next/config";
import { PropsWithChildren } from "react";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { polygon } from "viem/chains";
import { WagmiConfig, configureChains, createConfig } from "wagmi";

export const InjectWagmi = (props: PropsWithChildren) => {
  // const config = createConfig(
  //   getDefaultConfig({
  //     autoConnect: true,
  //     walletConnectProjectId: "0feff3f81d41f59c2705120f38efc5d6",
  //     alchemyId: "EJ6zUpMF_iE-s-oaFUdk3J_8jQunUrPo",
  //     appName: "Gotchiswap",
  //     appDescription: "AAvegotchi OTC trading Dapp",
  //     appUrl: "https://gotchiswap.xyz",
  //     appIcon: "https://gotchiswap.xyz/images/logo.png",
  //     publicClient: createPublicClient({
  //       chain: polygon,
  //       transport: http(),
  //     }),
  //   })
  // );

  const chains = [polygon];
  const projectId = "0feff3f81d41f59c2705120f38efc5d6";

  const { publicClient } = configureChains(chains, [
    w3mProvider({ projectId }),
  ]);
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, chains }),
    publicClient,
  });
  const ethereumClient = new EthereumClient(wagmiConfig, chains);

  return (
    <>
      <WagmiConfig config={wagmiConfig}>{props.children}</WagmiConfig>;
      <Web3Modal
        projectId={projectId}
        ethereumClient={ethereumClient}
        defaultChain={polygon}
        themeMode="dark"
        themeVariables={{
          '--w3m-font-family': 'Kanit, sans-serif',
          '--w3m-accent-color': '#fff',
          '--w3m-accent-fill-color': '#000000',
          '--w3m-overlay-background-color': '#3b0764',
          '--w3m-background-color' :  '#fff',
          '--w3m-logo-image-url': 'http://localhost:3000/images/wallet.png',

        }}
      />
    </>
  );
};
