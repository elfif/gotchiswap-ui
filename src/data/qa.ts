import { qaItem } from "@/types/types"

export const qaArray: qaItem[] = [{
  q: `What is Gotchiswap?`,
  a: `Gotchiswap is an OTC exchange dapp for Aavegotchi assets. It is built on top of the Aavegotchi ecosystem and allows users to trade Aavegotchis, wearables, and portals in a permissionless and trustless manner.`,
}, {
  q: `Who are you guys ?`,
  a: `We are PG and FiFoOoO long-standing members of the community who wanted to contribute back`
}, {
  q: `How to contact us ?`,
  a: `You can reach both of us on Discord (Click on the name to open profile): 
  * [*pgendreau*](https://discordapp.com/users/829312065437040730)
  * [*fifoooo*](https://discordapp.com/users/276081752236097536)`
}, {
  q: `Why did you build Gotchiswap ?`,
  a: `We are a close knit community so we know each other pretty well and have a level of trust rarely seen in crypto but on multiple occasions members of the community got scammed by fake OTC deals and lost their assets. We believe as we grow it will become harder to know everyone and we wanted to provide a safe way to do those exchanges.`
}, {
  q: `What are the next features that will be implemented`,
  a: `Next features should be, in order:

  * The ability to trade assets against any ERC20 token that belongs to the Aavegotchi ecosystem. This will allow users to do some OTC with alchemicas or GLTR.
  * Include all aavegotchi ecosystem missing assets. Parcels, all forges items are the priority.
  * Last we would like to allow users to trade assets vs assets. For example I could trade 1 gotchi + some wearables against another gotchi + GLTR.
  Actually all those features are already implemented in the smart contract, but not in the UI. 
  `
}, {
  q: `What technologies are used for the GotchiSwap dapp / frontend?`,
  a: `We used the following technologies:

  * NextJs 13 framework with Typescript.
  * TailwindCss for stylings
  * Wagmi.sh and Web3Modal for wallet connection and transactions.
  * Apollo + Codegen for the graphql client.`
}, {
  q: `Is the contract audited ?`,
  a: `No, but the contract is verified on polygonscan and the code is open source.
  * [*Click here to access the contract on polygonscan*](https://polygonscan.com/address/0xfe4b96f1860c5a2a09cd4bd5c341632c9e9486e6)
  * [*Click here to access the contract on github*](https://github.com/pgendreau/gotchiswap-contracts)`
}, {
  q: `But it is upgradable, can it be rugged ?`,
  a: `Yes, it means the owner could make changes to the code. This is still early code and it deals with real assets so we prefer to keep the ability to fix any bugs that arise. Right now the owner is a 2 of 3 multisig including the devs and a trusted member of the community. The ownership of the proxy can also be renounced eventually.`
}, {
  q: `What is the admin address and who controls it ?`,
  a: `This is the address that can manage the list of available token contracts that can be traded for or against. If new asset are introduced in the ecosystem it will allow to add them. It is also able to rescue assets from the escrow in case of a bug with the contract or someone send something to the contract by error. Right now this is set to  the same 2 of 3 multisig that include the devs and a trusted member of the community. `
}
]
