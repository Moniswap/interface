import { Button, Card, TimeLine } from '@/components/common'
import { TimeLine as TimeLineType } from '@/components/common/time-line/types'
import { HourTime, LockIcon, PenddingIcon } from '@/icons'
import { UnLockIcon } from '@/icons/unlock'

export const IncentivezeCard = () => {
  const timeline: TimeLineType[] = [
    {
      label: 'Select the liquidity pool to incentivize.',
      finishLabel: (
        <p className='text-[13px] mt-1 text-white-1  font-normal leading-[15.73px]'>
          Gauge for vAMM-WETH/MONI found
        </p>
      ),
      icon: <HourTime className=' w-2.5 h-[11.82px] text-[#34D22C]' />,
    },
    {
      label: 'Select the token you want to use for the incentive.',
      icon: <UnLockIcon className='w-2.5 h-[13.13px] text-[#34D22C]' />,
      finishLabel: (
        <p className='text-[13px]  mt-1 text-white-1  font-normal leading-[15.73px]'>
          MONI can be used for incentives
        </p>
      ),
    },
    {
      label: 'Specify the amount of your incentive.',
      icon: <LockIcon className='w-2.5 h-[13.13px] text-orange-2' />,
      finishLabel: (
        <>
          <p className='text-[13px] text-white-1  font-normal leading-[15.73px]'>
            Allowance not granted for MONI
          </p>
          <Button
            className='border border-black-9 transition-all duration-200 hover:text-white-1 hover:bg-orange-1 flex justify-center items-center py-[18px]  mt-4 w-full text-white text-[15px]  font-medium leading-[18.15px]'
            rightIcon={<UnLockIcon className='w-[13px] h-[14.45px]' />}
          >
            Allow MONI
          </Button>
        </>
      ),
    },
    {
      label: (
        <p className='mt-2 text-[13px] text-white-1  font-normal leading-[15.73px]'>
          Waiting for pending actions...
        </p>
      ),
      icon: <PenddingIcon />,
      finishLabel: (
        <p className='mt-2 text-[13px] text-white-1  font-normal leading-[15.73px]'>
          Waiting for pending actions...
        </p>
      ),
    },
  ]

  return (
    <Card data-aos='fade-up'>
      <h3 className='text-[15.1px]  font-medium leading-[18.27px] text-white'>
        Incentivize
      </h3>
      <p className='text-[13px] mt-[35px] mb-[52px] text-white-1  font-normal leading-[15.73px] '>
        Voting and adding incentives for this epoch ends in a day and there will
        be{' '}
        <span className='text-[13px]  font-bold text-white leading-[15.73px]'>
          0.0
        </span>{' '}
        distributed to all liquidity providers. By providing an incentive, you
        draw more liquidity providers to this pool.
      </p>
      <TimeLine timeLines={timeline} active={3} />
      <Button
        className='text-[15px] w-full py-[18px] mt-10  font-medium leading-[18.15px]'
        theme='dark-orange'
      >
        Add Incentives
      </Button>
    </Card>
  )
}
