import { Button, Card, TimeLine } from '@/components/common'
import { CalculatorIcon, PlusIcon } from '@/icons'
// import { TIMELINES } from "@/constants";
import Image from 'next/image'
import Link from 'next/link'
import { FaCalculator } from 'react-icons/fa'
import { IoIosSwap } from 'react-icons/io'
import { Props } from './types'

export const TimeLineCard = ({ setPathRoute }: Props) => {
  const TIMELINES = [
    {
      label:
        'Start by selecting the First Pool Token and the amount you want to deposit.',
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
        'Next select the Second Pool Token. If the liquidity pool exists, you will see the estimated amount required to match the conversion rate for the liquidity pool.',
      finishLabel: (
        <p className='font-normal  text-[13px] leading-[15px] text-white-1'>
          1.0% slippage applied... Adjust
        </p>
      ),
      icon: <PlusIcon className='w-[13px] h-[13px] text-[#34D22C]' />,
    },
    {
      label:
        'If the liquidity pool needs to be created, you can choose the initial pool amount for each of the tokens. You will have to create the pool first before completing the deposit.',
      finishLabel: (
        <p className='font-normal  text-[13px] leading-[15px] text-white-1'>
          Minimum received 27.08 USDC
        </p>
      ),
      icon: <PlusIcon className='w-[13px] h-[13px] text-[#34D22C]' />,
    },
    {
      label: 'Confirm and stake the deposited liquidity!',
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
    <Card data-aos='fade-up' className='w-full xl:w-[40%]'>
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
      <TimeLine timeLines={TIMELINES} className='mt-[17px]' />
      <Button
        onClick={() => setPathRoute('withdraw')}
        className='w-full py-[18px] text-[15px] mt-[19px]  font-medium leading-[18.15px] text-center'
        theme='orange'
      >
        Stake Your Deposit
      </Button>
    </Card>
  )
}
