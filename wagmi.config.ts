import { defineConfig } from '@wagmi/cli'
import { etherscan, react } from '@wagmi/cli/plugins'
import { base } from 'wagmi/chains'

export default defineConfig({
  out: 'src/contracts/_generated.ts',
  contracts: [],
  plugins: [
    etherscan({
      apiKey: "J216UIQZC5WPZNQIKD1CX38C8X8CVAQPAA",
      chainId: base.id,
      contracts: [
        // {
        //   name: 'Escrow',
        //   address: {
        //     [polygon.id]: '0xD54b603e5a93ECb7B72c2c8825Aa1091b6B0Bcc0'
        //   }
        // }, 
        {
          name: 'AavegotchiDiamond',
          address: '0xa99c4b08201f2913db8d28e71d020c4298f29dbf'
        },
        {
          name: 'Wearables',
          address: '0x052e6c114a166B0e91C2340370d72D4C33752B4b'
        },
      ]
    }),
    react()
  ],
})
