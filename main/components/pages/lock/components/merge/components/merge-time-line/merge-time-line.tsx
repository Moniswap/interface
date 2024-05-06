import { Button, Card, TimeLine } from '@/components/common'
import { HourTime, LockIcon, OutlineStarIcon, UnLockIcon } from '@/icons'
import Image from 'next/image'
import { Props } from './types'

export const MergeTimeLine = ({ setPage }: Props) => {
  const TIMELINES = [
    {
      label: 'Select the amount of MONI you want to lock.',
      finishLabel: (
        <p className='text-[13px]  font-normal leading-[15.73px] text-[#CFCFCF]'>
          Merging Lock 14578 into Lock 12337
        </p>
      ),
      icon: <LockIcon className='w-[11px] h-3 text-[#34D22C]' />,
    },
    {
      label:
        'Select the number of weeks. The minimum lock time is one week, and the maximum lock time is 4 years.',
      finishLabel: (
        <p className='font-normal  mt-[5] text-[13px] leading-[15px] text-white-1'>
          New estimated lock time is 2 years
        </p>
      ),
      icon: <HourTime className=' w-2.5 h-[11.82px] text-[#34D22C]' />,
    },
    {
      label: 'Confirm the locking!',
      finishLabel: (
        <p className='font-normal  mt-[5] text-[13px] leading-[15px] text-white-1'>
          Lock 14578 selected.
        </p>
      ),
      icon: <OutlineStarIcon className=' w-[15px] h-[15px] text-[#34D22C]' />,
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
    <Card data-aos='fade-up' className='w-full xl:w-[40%]'>
      <div className='flex w-full justify-between'>
        <p className='font-medium  text-[15px] leadin-[18px] text-white'>
          Merge
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
        onClick={() => setPage('lock_transfer')}
      >
        Merge
      </Button>
    </Card>
  )
}
