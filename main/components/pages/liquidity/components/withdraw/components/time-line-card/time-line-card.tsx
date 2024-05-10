import { Button, Card, TimeLine } from '@/components/common'
import { MdLock, MdLockOpen } from 'react-icons/md'
import { CalculatorIcon, PigIcon, PlusIcon } from '@/icons'
import Image from 'next/image'
import Link from 'next/link'
import { FaCalculator } from 'react-icons/fa'
import { IoIosSwap } from 'react-icons/io'

export const TimeLineCard = () => {
  const TIMELINES = [
    {
      label: '1.0% slippage applied... Adjust',
      finishLabel: (
        <>
          <span className=' text-[13px]  font-normal leading-[15.73px] text-white-1'>
            1.0% slippage applied... Adjust
          </span>
        </>
      ),
      icon: <PigIcon className='w-[13px] h-[10.79px] text-[#34D22C] ' />,
    },
    {
      label: '1.0% slippage applied... Adjust',
      finishLabel: (
        <>
          <span className=' text-[13px]  font-normal leading-[15.73px] text-white-1'>
            Allowance not granted for vAMM-WETH/MONI
          </span>
          <Button
            theme='dark'
            className='!border border-black-9 mt-[36px] text-[15px]  font-medium leading-[18.15px] text-center'
            rightIcon={<MdLockOpen className='w-[13px] h-[14.45px]' />}
          >
            Allow vAMM-WETH/DOG
          </Button>
        </>
      ),
      icon: <MdLock className='w-2.5 h-[13.13px]' />,
    },

    {
      label: '1.0% slippage applied... Adjust',
      finishLabel: (
        <>
          <span className=' text-[13px]  font-normal leading-[15.73px] text-white-1'>
            1.0% slippage applied... Adjust
          </span>
        </>
      ),
      icon: <PigIcon />,
    },
  ]

  return (
    <Card className='w-full xl:w-[40%]'>
      <div className='flex w-full justify-between'>
        <p className='font-medium  text-[15px] leadin-[18px] text-white'>
          Withdraw
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
    </Card>
  )
}
