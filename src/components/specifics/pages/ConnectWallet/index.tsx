import { useAppKit } from '@reown/appkit/react'

export const ConnectWallet = () => {
  const { open } = useAppKit()

  return (
    <div className="flex flex-col gap-y-10">
      <p className="text-2xl">
        Welcome to Gotchiswap. Please connect your wallet to start using the dapp.
      </p>
      <div className="self-center">
        <button
          onClick={() => open()}
          className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors"
        >
          Connect Wallet
        </button>
      </div>
    </div>
  )
}
