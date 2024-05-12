import { Avatar, Tag } from '@/components/common'
import { BearIcon, BearIcon2, LockIcon } from '@/icons'
import { WarningIcon } from '@/icons/warning'
import Link from 'next/link'

export const VotingRewardsItem = () => (
  <div className='w-full pl-[30px] mt-[33px] xl:mt-[26px] rounded-xl pr-[20px] pt-[25px] bg-[#1E1E1E] py-[25px]'>
    <div className='flex flex-col xl:flex-row justify-between'>
      <div className='flex items-start gap-x-[15px]'>
        <div className='relative'>
          <Avatar
            src='/images/cat.png'
            className='w-[32px] h-[32px]'
            name='coin'
          />
          <Avatar
            src='/images/cat.png'
            className='w-[32px] h-[32px] absolute top-0 right-5'
            name='coin'
          />
        </div>
        <div>
          <h3 className='text-white text-[15px]  font-medium leading-[normal]'>
            vAMM-WETH/DOG
          </h3>
          <p className='flex text-[#CFCFCF] text-[13px]  font-normal leading-[normal] gap-x-1 items-center'>
            Volatile Pool · 0.3% · <WarningIcon />
          </p>
        </div>
      </div>
      <div className='xl:pt-0 pt-[17px] xl:mt-0 pb-[33px] xl:pb-0 mt-[20px] xl:border-none border-t border-t-[#33332D]  '>
        <p className='text-[#CFCFCF] gap-x-2 text-start xl:text-right text-[13.097px]  font-medium leading-[normal] flex items-center'>
          <LockIcon className='w-[8.185px] h-[10.743px]' /> Lock ID 12337
        </p>
        <p className='text-[#7D7D7D] mt-[13px] text-start xl:text-right  text-[13px]  font-normal leading-[normal]'>
          0.1 MONI locked for 4 years
        </p>
      </div>
      <div className='pt-[19px] xl:pt-0 xl:border-none border-t border-[#33332D]'>
        <p className='text-[#7D7D7D] text-left xl:text-right text-[13px]  font-normal leading-[normal]'>
          Rewards
        </p>
        <div className='flex flex-col pr-[39px] xl:pr-0  items-start xl:items-end'>
          <div className='flex justify-between xl:justify-normal w-full xl:w-auto gap-x-2 mt-[13px]'>
            <div className='flex items-center gap-x-2 text-white text-right text-[13px]  font-normal leading-[normal]'>
              <Avatar
                className='w-[20px] h-[20px]'
                src='/images/incentives-about-card-logo.png'
                name='avatar'
              />{' '}
              <span>
                0.00069  <span className='text-[#7D7D7D]'>USDC</span>{' '}
              </span>
            </div>
            <Tag title='FEE' />
          </div>
          <div className='flex justify-between xl:justify-normal w-full xl:w-auto gap-x-2 mt-[13px]'>
            <div className='flex items-center gap-x-2 text-white text-right text-[13px]  font-normal leading-[normal]'>
              <Avatar
                className='w-[20px] h-[20px]'
                src='/images/incentives-about-card-logo.png'
                name='avatar'
              />{' '}
              <span>
                0.00046 <span className='text-[#7D7D7D]'>USDC</span>{' '}
              </span>
            </div>
            <Tag title='FEE' />
          </div>
          <div className='flex gap-x-2 justify-between xl:justify-normal w-full xl:w-auto mt-[13px]'>
            <div className='flex items-center gap-x-2 text-white text-right text-[13px]  font-normal leading-[normal]'>
              <Avatar
                className='w-[20px] h-[20px]'
                src='/images/incentives-about-card-logo.png'
                name='avatar'
              />{' '}
              <span>
                0.00003 <span className='text-[#7D7D7D]'>USDC</span>{' '}
              </span>
            </div>
            <Tag title='INCENTIVE' />
          </div>

          <div className='flex gap-x-2 justify-between xl:justify-normal w-full xl:w-auto mt-[13px]'>
            <div className='flex items-center gap-x-2 text-white text-right text-[13px]  font-normal leading-[normal]'>
              <Avatar
                className='w-[20px] h-[20px]'
                src='/images/incentives-about-card-logo.png'
                name='avatar'
              />{' '}
              <span>
                0.00003 <span className='text-[#7D7D7D]'>wBaseDOGE</span>{' '}
              </span>
            </div>
            <Tag title='INCENTIVE' />
          </div>
          <div className='flex gap-x-2 justify-between xl:justify-normal w-full xl:w-auto mt-[13px]'>
            <div className='flex items-center gap-x-2 text-white text-right text-[13px]  font-normal leading-[normal]'>
              <Avatar
                className='w-[20px] h-[20px]'
                src='/images/incentives-about-card-logo.png'
                name='avatar'
              />{' '}
              <span>
                0.0 <span className='text-[#7D7D7D]'>SEXY</span>{' '}
              </span>
            </div>
            <Tag title='INCENTIVE' />
          </div>
          <div className='flex gap-x-2 justify-between xl:justify-normal w-full xl:w-auto mt-[13px]'>
            <div className='flex items-center gap-x-2 text-white text-right text-[13px]  font-normal leading-[normal]'>
              <Avatar
                className='w-[20px] h-[20px]'
                src='/images/incentives-about-card-logo.png'
                name='avatar'
              />{' '}
              <span>
                0.00006 <span className='text-[#7D7D7D]'>BRETT</span>{' '}
              </span>
            </div>
            <Tag title='INCENTIVE' />
          </div>
          <div>
            <Link
              href={'/'}
              className='flex items-center gap-2 text-[#FC8415] text-right text-[13px]  font-normal leading-[normal] underline mt-[28px] xl:mt-[25px]'
            >
              <BearIcon2 />
              Claim
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)
