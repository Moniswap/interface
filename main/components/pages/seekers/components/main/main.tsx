/* eslint-disable react/no-unescaped-entities */
import { Button, Card } from '@/components/common'
import { PigIcon, RefecernceIcon, StarIcon } from '@/icons'
import Image from 'next/image'

export const Main = () => {
  return (
    <div className='container pt-[113px] xl:pt-[148px] px-5 lg:px-8 xl:px-0 '>
      <div className='flex flex-col xl:flex-row gap-x-[129px] items-center'>
        <Card className='text-white relative px-[15px] xl:px-[32px] '>
          <h3 className='text-white w-full xl:w-[65%]  text-[18px] xl:text-[25px]  font-medium leading-[normal]'>
            Claim Your Early Access Airdrop via the Moniswap Seekers Challenge
          </h3>
          <div className='pt-[28px] border-t border-[#47473F] mt-[13px]'>
            <p className='text-[#CFCFCF] w-[90%] xl:w-[40%] text-[13px]  font-normal leading-[normal]'>
              We're offering $MONI rewards to our esteemed community members
              through the Moniswap Seekers Program. Simply complete the tasks
              below - the more task you complete, the more $MONI tokens you'll
              receive!
            </p>
          </div>

          <div className='flex justify-end w-full'>
            <Button
              theme='orange'
              className='text-white text-[11.975px]  font-medium leading-[normal]'
              icon={<PigIcon />}
            >
              Learn More
            </Button>
          </div>
          <Image
            src='/images/bea.png'
            className=' absolute top-[11px] right-[14px]'
            width={64}
            height={56}
            alt='images'
          />
        </Card>
        <Card className='border w-full mt-[33px] xl:mt-0 xl:w-auto rounded-[0px_12.796px_12.796px_12.796px] text-white border-solid border-[#47473F]'>
          <div className='pb-[21px]'>
            <p className='flex gap-x-5 items-center text-white text-[15px]  font-medium leading-[normal]'>
              <RefecernceIcon /> 4,301 {' '}
              <span className='text-[#CFCFCF]'>points</span>
            </p>
          </div>

          <div className='pt-[24px] border-t-[#5A5B5A] border-t border-solid'>
            <p className='flex  gap-x-5 items-center text-white text-[15px]  font-medium leading-[normal]'>
              <StarIcon /> Ranked{' '}
              <span className='text-[#CFCFCF]'># 13963</span>
            </p>
          </div>
        </Card>
        <Image
          src={'/images/Group 11950 (2).png'}
          alt='img'
          width={509}
          height={486}
          className='absolute top-[77px] right-[14px] z-[-1]'
        />
      </div>
    </div>
  )
}
