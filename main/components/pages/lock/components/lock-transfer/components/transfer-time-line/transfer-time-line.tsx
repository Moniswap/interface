import { Button, Card, TimeLine } from '@/components/common'
import {
  HourTime,
  LockIcon,
  OutlineStarIcon,
  UnLockIcon,
  WalletIcon,
} from '@/icons'
import Image from 'next/image'
import { Props } from './types'

export const TransferTimeLine = ({ setPage }: Props) => {
  const TIMELINES = [
    {
      label: 'Select the amount of MONI you want to lock.',
      finishLabel: (
        <p className='text-[13px]  font-normal leading-[15.73px] text-[#CFCFCF]'>
          Enter the wallet address where the lock will be transferred
        </p>
      ),
      icon: <WalletIcon className='w-[11px] h-3 text-[#BAB300]' />,
    },
    {
      label:
        'Select the number of weeks. The minimum lock time is one week, and the maximum lock time is 4 years.',
      finishLabel: (
        <>
          <p className='font-normal  mt-[5] text-[13px] leading-[15px] text-white-1'>
            Reset is required for Lock 12337
          </p>
          <Button
            onClick={() => setPage('main')}
            className='text-white hover:bg-orange-1 mt-[27px] w-full border border-[#2B2B2B] text-[15px]  font-medium leading-[18.15px] text-center'
          >
            Reset
          </Button>
        </>
      ),
      icon: <HourTime className=' w-2.5 h-[11.82px] text-[#34D22C]' />,
    },
    {
      label: 'Waiting for pending actions...',
      finishLabel: (
        <p className='font-normal  mt-[5] text-[13px] leading-[15px] text-white-1'>
          Lock 14578 selected.
        </p>
      ),
      icon: <OutlineStarIcon className=' w-[15px] h-[15px] text-[#34D22C]' />,
    },
  ]

  return (
    <Card className='w-full xl:w-[40%]'>
      <div className='flex w-full justify-between'>
        <p className='font-medium  text-[15px] leadin-[18px] text-white'>
          Transfer
        </p>
        <Image
          src='/images/bea.png'
          width={40}
          height={40}
          alt='Traders'
          className='object-contain'
        />
      </div>
      <TimeLine active={2} timeLines={TIMELINES} className='mt-[17px]' />
      <Button
        className='w-full py-[18px] text-white  text-[15px] mt-[19px]  font-medium leading-[18.15px] text-center'
        theme='orange'
        onClick={() => setPage('main')}
      >
        Transfer
      </Button>
    </Card>
  )
}
