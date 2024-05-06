import { Modak } from 'next/font/google'
import { Props } from './types'
import { Button, Input, Modal } from '@/components/common'
import { CopyIcon, CricleWalletIcon } from '@/icons'
import { useState } from 'react'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { IoCloseOutline } from 'react-icons/io5'
import { useDisconnect } from 'wagmi'

const TOLERANCE = ['0.01', '0.1', '0.5', '1', '5']

export const DisconnectModal = ({ open, close }: Props) => {
  const [procent, setProcent] = useState('')
  const [procentOne, setProcentOne] = useState([0])
  const [switchDisConnect, setSwitchDisConnect] = useState(false)
  const { disconnect } = useDisconnect()

  const disconnectWallet = () => {
    disconnect()
    close()
  }
  return (
    <Modal
      hideCloseButton
      open={open}
      close={close}
      className='max-w-[552px] overflow-y-auto h-[80vh]'
    >
      <div className='flex items-center gap-x-[5px]'>
        <CricleWalletIcon className='w-[38px] h-[38px] xl:w-[49.831px] xl:h-[49.831px]' />
        <div>
          <p className='text-[#CFCFCF] text-[11px] xl:text-[15px]  items-center gap-2  font-medium leading-[normal] flex'>
            0x0678...9520D <CopyIcon className='w-3 h-3 text-[#7D7D7D]' />{' '}
          </p>
          <p className='text-[#7D7D7D] text-[11px] xl:text-[15px]  font-normal leading-[normal]'>
            Balance:  0.00001 BERA
          </p>
        </div>
      </div>

      <div className='border-t border-t-[#33332D] pt-[22px] mt-[38px]'>
        <div className=' rounded-[12.796px]  pb-[20px] bg-[#1E1E1E] pt-[13px] pl-[17px] pr-[15px]'>
          <p className='text-[#CFCFCF] text-[10px]  xl:text-[13px]  font-normal leading-[normal]'>
            To communicate with the network with your personal RPC, add it here
            and reload the page. This is saved only in your browser, locally.
          </p>
          <Input
            type='text'
            baseClassName='mt-[15px] py-[10px] h-[30px] xl:h-auto mb-[19px]'
            placeholder='RPC URL.......'
          />
          <p className='text-[#CFCFCF] mt-[19px] text-[10.056px] xl:text-[13px]  font-normal leading-[normal]'>
            Leave blank if you want to use the RPC provided by us.
          </p>
        </div>
      </div>

      <div className='border-t mt-[8px] border-t-[#33332D] pt-[13px]'>
        <div className=' rounded-[12.796px]  pb-[20px] bg-[#1E1E1E] pt-[13px] pl-[17px] pr-[15px]'>
          <p className='text-[#CFCFCF] text-[10px] xl:text-[13px]  font-normal leading-[normal]'>
            Slippage tolerance {`${procent}%`}
          </p>
          <div className='w-full flex mt-[12px] overflow-hidden rounded-[10px] border border-solid border-[#403B3B]'>
            {TOLERANCE.map((item) => {
              return (
                <div
                  onClick={() => setProcent(item)}
                  className={` ${item === procent ? 'bg-orange' : ''} py-[11px] h-[34px] xl:h-auto px-[6px] w-[14%]  cursor-pointer flex justify-center items-center border-r border-r-[#403B3B] text-[#CFCFCF] text-[10.056px] xl:text-[13px]  font-bold leading-[normal]`}
                  key={item}
                >
                  <p>{item}</p>
                </div>
              )
            })}
            <div className='hidden xl:block py-[11px] px-[6px] w-[15%] border-r border-r-[#403B3B] text-[#CFCFCF] text-center text-[13px]  font-normal leading-[normal]'>
              or
            </div>
            <input
              defaultValue={'0.1'}
              onChange={(e) => setProcent(e.target.value)}
              className={` bg-transparent  hidden xl:block outline-none cursor-pointer py-[11px] w-[20%] px-[6px] border-l border-l-[#403B3B] text-[#CFCFCF] text-center text-[13px]  font-normal leading-[normal]`}
            />
          </div>
          <p className='text-[#CFCFCF] block xl:hidden mt-[5px] mb-[4px] text-center text-[10.056px]  font-normal leading-[normal]'>
            or
          </p>
          <input
            defaultValue={'0.1'}
            onChange={(e) => setProcent(e.target.value)}
            className='bg-transparent block xl:hidden pl-[9px] py-[11.9px] outline-none h-[32px] rounded-[7.736px] w-full border border-[#403B3B] text-[#CFCFCF] text-[10.056px]  font-bold leading-[normal]'
          />
        </div>
      </div>

      <div className='border-t mt-[8px] border-t-[#33332D] pt-[13px]'>
        <div className=' rounded-[12.796px]  pb-[20px] bg-[#1E1E1E] pt-[13px] pl-[17px] pr-[15px]'>
          <p className='text-[#CFCFCF] text-[10.056px] xl:text-[13px]  font-normal leading-[normal]'>
            Transaction execution deadline
          </p>
          <div className='flex items-center gap-4'>
            <Slider
              className='mt-[21px] mb-[18px]'
              onValueChange={(e) => setProcentOne(e)}
              defaultValue={procentOne}
              max={100}
              step={1}
            />
            <p className='text-[#CFCFCF] text-right text-[13px]  font-bold leading-[normal]'>
              {procentOne[0].toFixed(1)} minutes
            </p>
          </div>
        </div>
      </div>
      <div className='border-t mt-[8px] border-t-[#33332D] pt-[13px]'>
        <div className='relative rounded-[12.796px]  pb-[20px] bg-[#1E1E1E] pt-[13px] pl-[17px] pr-[15px]'>
          <p className='text-[#CFCFCF] text-[13px]  font-semibold leading-[normal]'>
            Allow unsafe trades
          </p>
          <p className='text-[#7D7D7D] mt-[9px] w-[80%] xl:w-1/2 text-[10.056px] xl:text-[13px]  font-normal leading-[normal]'>
            Enabling this will allow trading on quotes with high price impact
            and could lead to loss of funds.
          </p>
          <div className=' absolute bottom-[12px] right-[12px]'>
            <Switch
              checked={switchDisConnect}
              onCheckedChange={(val) => setSwitchDisConnect(val)}
            />
          </div>
        </div>
      </div>

      <button
        onClick={close}
        className='w-[18px] h-[18px] xl:w-[34px] xl:h-[34px] transition-all duration-300 absolute hover:bg-black hover:text-white  right-[-18px] top-[-30px] rounded-full bg-white flex justify-center items-center'
      >
        <IoCloseOutline className='text-[22px]' />
      </button>

      <Button
        className='border w-full py-[25px] mt-[19px] text-[#CFCFCF] text-center text-[10.056px] xl:text-[13px]  font-bold leading-[normal] rounded-[12.796px] border-solid border-[#33332D] transition-all duration-300 hover:bg-orange'
        onClick={disconnectWallet}
      >
        Disconnect Wallet
      </Button>
    </Modal>
  )
}
