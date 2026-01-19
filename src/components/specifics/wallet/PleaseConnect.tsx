import { useAppKit } from '@reown/appkit/react'

export const PleaseConnect = () => {
    const { open } = useAppKit()

    return (
        <div className="text-2xl flex flex-col justify-center place-items-center gap-y-10">
            <p>To create an OTC deal, please first connect your wallet</p>
            <button
                onClick={() => open()}
                className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors"
            >
                Connect Wallet
            </button>
        </div>
    )
}
