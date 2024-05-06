import { Modal } from '@/components/common'
import { __PROVIDERS__ } from '@/constants'
import Image from 'next/image'
import { useConfig, useConnect } from 'wagmi'

type Props = {
  open: boolean
  setOpen: (open: boolean) => void
}
export const ConnectWallet = ({ open, setOpen }: Props) => {
  const handleClose = () => {
    setOpen(false)
  }
  const { connect, connectors } = useConnect()
  const { chains } = useConfig()
  const handleConnect = (connector: any) => {
    connect({ connector, chainId: chains[0].id })
    if (handleClose) handleClose()
  }
  return (
    <Modal open={open} close={handleClose}>
      <h1 className='text-white text-[20.18px]  xl:text-3xl  font-medium leading-[normal]'>
        Welcome to Moniswap
      </h1>
      <p className='text-[#CFCFCF] text-[12.12px] xl:text-[15px]  font-normal leading-[normal] mt-[5px]'>
        To get started, please connect your wallet.
      </p>
      <div className='flex flex-col gap-y-[13px] mt-[13px]'>
        {connectors
          .filter((conn) => conn.id !== 'io.metamask')
          .map((connector, index) => {
            return (
              <button
                key={index}
                onClick={() => handleConnect(connector)}
                className='flex items-center h-[53px] overflow-hidden xl:h-auto text-white rounded-2xl bg-[#1E1E1E] hover:bg-zinc-700 w-full'
              >
                <div className='w-2 xl:w-3 rounded-l-2xl bg-zinc-500 h-full xl:h-[79px]' />
                <div className='flex ml-[21px] items-center'>
                  <Image
                    src={
                      __PROVIDERS__[connector.id as keyof typeof __PROVIDERS__]
                        ?.image
                    }
                    alt={
                      __PROVIDERS__[connector.id as keyof typeof __PROVIDERS__]
                        ?.name
                    }
                    width={24}
                    height={24}
                    className=' w-6 aspect-square'
                  />
                  <div className='xl:text-lg ml-[16px] text-white text-[13.454px]  font-normal leading-[normal]'>
                    Connect with{' '}
                    {
                      __PROVIDERS__[connector.id as keyof typeof __PROVIDERS__]
                        ?.name
                    }
                  </div>
                </div>
              </button>
            )
          })}
      </div>
    </Modal>
  )
}
