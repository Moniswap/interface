import { Card, TimeLine } from '@/components/common'
import { CalculatorIcon, PlusIcon } from '@/icons'
// import { TIMELINES } from "@/constants";
import Image from 'next/image'
import Link from 'next/link'
import { FaCalculator } from 'react-icons/fa'
import { IoIosSwap } from 'react-icons/io'

export const TimeLineCard = () => {
  const TIMELINES = [
    {
      label:
        'Start by selecting the token to Swap from and the amount you want to exchange',
      finishLabel: (
        <div>
          <p className='font-medium  text-[13px] leading-[13px] text-white-1'>
            Exchange rate found...
            <Link href='/' className='underline'>
              Refresh
            </Link>
          </p>
          <div className='flex gap-x-[18px] mt-[16px] text-white-1 font-medium  leading-[15px]'>
            <p className='flex gap-2'>
              1 MONI <IoIosSwap />
            </p>{' '}
            <p>0.78154 USDC</p>
          </div>
        </div>
      ),
      icon: <CalculatorIcon className='w-[14px] h-[13px] text-[#34D22C]' />,
    },
    {
      label:
        'Start by selecting the token to Swap from and the amount you want to exchange',
      finishLabel: (
        <p className='font-normal  text-[13px] leading-[15px] text-white-1'>
          1.0% slippage applied... Adjust
        </p>
      ),
      icon: <PlusIcon className='w-[13px] h-[13px] text-[#34D22C]' />,
    },
    {
      label:
        'Start by selecting the token to Swap from and the amount you want to exchange',
      finishLabel: (
        <p className='font-normal  text-[13px] leading-[15px] text-white-1'>
          Minimum received 27.08 USDC
        </p>
      ),
      icon: <PlusIcon className='w-[13px] h-[13px] text-[#34D22C]' />,
    },
    {
      label:
        'Start by selecting the token to Swap from and the amount you want to exchange',
      finishLabel: (
        <div>
          <p>
            Exchange rate found...{' '}
            <Link href='/' className='underline'>
              Refresh
            </Link>
          </p>
          <div>
            <p>1 MONI</p> <IoIosSwap /> <p>0.78154 USDC</p>
          </div>
        </div>
      ),
      icon: <FaCalculator />,
    },
  ]

  return (
    <Card className='w-full xl:w-[40%]'>
      <div className='flex w-full justify-between'>
        <p className='font-medium  text-[15px] leadin-[18px] text-white'>
          Swap
        </p>
        <Image
          src='/images/bea.png'
          width={40}
          height={40}
          alt='Traders'
          className='object-contain'
        />
      </div>
      <TimeLine timeLines={TIMELINES} active={2} className='mt-[17px]' />
    </Card>
  )
}
