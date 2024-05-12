import { Button, Card, TimeLine } from '@/components/common'
import {
  CalendarIcon,
  LockIcon,
  OutlineStarIcon,
  ReloadIcon,
  StarIcon,
  UnLockIcon,
} from '@/icons'
import Image from 'next/image'
import { Props } from './types'

export const LockIncreaseTimeLine = ({ setPage }: Props) => {
  const TIMELINES = [
    {
      label: 'Select the amount of MONI you want to lock.',
      finishLabel: (
        <p className='text-[13px]  font-normal leading-[15.73px] text-[#CFCFCF]'>
          New lock time Tue, 07 Mar 2028 00:00:00 GMT
        </p>
      ),
      icon: <CalendarIcon className='w-[11px] h-3 text-[#34D22C]' />,
    },
    {
      label:
        'Select the number of weeks. The minimum lock time is one week, and the maximum lock time is 4 years.',
      finishLabel: (
        <p className='font-normal  text-[13px] leading-[15px] text-white-1'>
          New estimated voting power <br /> <br /> 0.01221{' '}
          <span className='text-[#7D7D7D]'>veMONI</span>
        </p>
      ),
      icon: (
        <OutlineStarIcon className=' w-[13px] h-[12.46px] text-[#34D22C]' />
      ),
    },
    {
      label: 'Confirm the locking!',
      finishLabel: (
        <p className='font-normal  text-[13px] leading-[15px] text-white-1'>
          Auto Max-Lock Mode
        </p>
      ),
      icon: <ReloadIcon className=' w-[15px] h-[15px] text-[#34D22C]' />,
    },
    {
      label: 'Your lock will be available in the dashboard.',
      finishLabel: (
        <p className='text-[13px]  font-normal leading-[15.73px] text-white-1'>
          Waiting for pending actions...
        </p>
      ),
      icon: <UnLockIcon className='w-2.5 h-[13.13px] text-[#34D22C]' />,
    },
  ]

  return (
    <Card className='w-full xl:w-[40%]'>
      <div className='flex w-full justify-between'>
        <p className='font-medium  text-[15px] leadin-[18px] text-white'>
          Lock Increase
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
        className='w-full py-[18px] text-[15px] mt-[19px]  font-medium leading-[18.15px] text-center'
        theme='orange'
        onClick={() => setPage('merge')}
      >
        Extend
      </Button>
    </Card>
  )
}
