import { PropsWithChildren } from "react";
import { createAppKit } from '@reown/appkit/react'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { base } from '@reown/appkit/networks'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Set up queryClient
const queryClient = new QueryClient()

// Project ID from Reown Cloud
const projectId = "7f6a737c75dd9d6d06d4e0d99705d599";

// Create Wagmi Adapter
const wagmiAdapter = new WagmiAdapter({
  networks: [base],
  projectId,
  ssr: false // Set to true if using Next.js SSR
});

// Create modal
createAppKit({
  adapters: [wagmiAdapter],
  networks: [base],
  projectId,
  defaultNetwork: base,
  features: {
    analytics: true,
  },
  themeMode: 'dark',
  themeVariables: {
    '--w3m-font-family': 'Kanit, sans-serif',
    '--w3m-accent': '#fff',
    '--w3m-color-mix': '#000000',
    '--w3m-border-radius-master': '2px'
  }
});

export const InjectWagmi = (props: PropsWithChildren) => {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </WagmiProvider>
  );
};
