import { Button, Card } from '@/components/common'
import Image from 'next/image'
import { LuClock } from 'react-icons/lu'

export const Hero = () => (
  <div className='container px-5 lg:px-8 xl:px-0'>
    <Card data-aos='fade-up' className='px-[32px] relative'>
      <p className='text-[15.1px] mb-[19px]  font-medium leading-[18.27px] max-w-[90%] xl:max-w-[35%] text-white'>
        Voters earn a share of transaction fees and incentives for helping
        govern how emissions are distributed.
      </p>
      <div className='flex flex-col xl:flex-row justify-between pt-[11px] items-end border-none xl:border-t border-black-12'>
        <div className='flex flex-col w-full  xl:flex-row items-start xl:items-center gap-x-2'>
          <p className='flex gap-x-1 text-[9px] xl:text-[13px] text-white-1  font-normal leading-[11px] xl:leading-[15.73px]'>
            <LuClock /> Current voting round
          </p>
          <Button
            theme='dark'
            className='xl:w-auto mt-[17px] w-full !transition-all !duration-300'
          >
            ends in a day
          </Button>
        </div>
        <div className='flex xl:hidden mt-[10px] flex-col w-full  xl:flex-row items-start gap-x-2'>
          <p className='flex gap-x-1 text-[9px] xl:text-[13px] text-white-1  font-normal leading-[11px] xl:leading-[15.73px]'>
            <LuClock /> Total voting power available for this epoch
          </p>
          <Button
            theme='dark'
            className='xl:w-auto mt-[17px] w-full !transition-all !duration-300'
          >
            559,841,723.54 
          </Button>
        </div>
        <div className='xl:flex-row xl:py-0 py-[18px] items-start w-full xl:w-auto flex-col xl:gap gap-5 flex gap-3'>
          <p className='text-[13px] text-black-4  font-medium leading-[15.73px]'>
            Total Fees:{' '}
            <span className='text-[13px]  text-white font-medium leading-[15.73px]'>
              ~$1,629,655.42
            </span>{' '}
          </p>
          <p className='text-[13px] text-black-4  font-medium leading-[15.73px]'>
            Total Incentives:{' '}
            <span className='text-[13px]  text-white font-medium leading-[15.73px]'>
              ~$604,095.07
            </span>{' '}
          </p>
          <p className='text-[13px] text-black-4  font-medium leading-[15.73px]'>
            New Emissions:{' '}
            <span className='text-[13px]  text-white font-medium leading-[15.73px]'>
              13,140,559.9 
            </span>{' '}
          </p>
        </div>
      </div>

      <div className='hidden xl:flex gap-2 items-center mt-[15px]'>
        <p className='text-[13px]  font-normal text-black-4 leading-[15.73px]'>
          Total voting power available for this epoch
        </p>{' '}
        <Button theme='dark'>559,841,723.54 </Button>
      </div>

      <Image
        src='/images/bea.png'
        alt='bea'
        width={64}
        height={56}
        className='absolute top-[7px] right-[23px]'
      />
    </Card>
  </div>
)
