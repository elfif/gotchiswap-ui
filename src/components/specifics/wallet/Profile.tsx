import { useAccount } from 'wagmi'
import { useAppKit } from '@reown/appkit/react'
import { Connected } from './Connected'

export const Profile = () => {
  const { address, isConnected } = useAccount()
  const { open } = useAppKit()

  if (isConnected && address) {
    return <Connected />
  }

  return (
    <button
      onClick={() => open()}
      className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors"
    >
      Connect Wallet
    </button>
  )
}
