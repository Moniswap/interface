import { Button, Card, TimeLine } from '@/components/common'
import { MdLock, MdLockOpen } from 'react-icons/md'
import { HourTime, LockIcon, PigIcon } from '@/icons'
import Image from 'next/image'

export const TimeLineCard = () => {
  const TIMELINES = [
    {
      label: '1.0% slippage applied... Adjust',
      finishLabel: (
        <>
          <span className=' text-[13px]  font-normal leading-[15.73px] text-white-1'>
            Found the deposit available for staking
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
            Gauge available for this pool
          </span>
        </>
      ),
      icon: <HourTime className='w-2.5 h-[11.82px] text-[#34D22C]' />,
    },
    {
      label: 'Allowance not granted for vAMM-WETH/MONI',
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
      icon: <LockIcon className='w-2.5 h-[11.82px] text-[#BAB300]' />,
    },

    {
      label: '1.0% slippage applied... Adjust',
      finishLabel: (
        <>
          <span className=' text-[13px]  font-normal leading-[15.73px] text-white-1'>
            Waiting for pending actions...
          </span>
        </>
      ),
      icon: <PigIcon />,
    },
  ]

  return (
    <Card data-aos='fade-up' className='w-full xl:w-[40%]'>
      <div className='flex w-full justify-between'>
        <p className='font-medium  text-[15px] leadin-[18px] text-white'>
          Staking
        </p>
        <Image
          src='/images/bea.png'
          width={40}
          height={40}
          alt='Traders'
          className='object-contain'
        />
      </div>
      <TimeLine active={3} timeLines={TIMELINES} className='mt-[17px]' />
      <Button
        className='text-[15px] w-full py-[18px] mt-10  font-medium leading-[18.15px]'
        theme='dark-orange'
      >
        Stake
      </Button>
    </Card>
  )
}
