import { Avatar } from '@/components/common'
import { BearIcon } from '@/icons/beard'
import { WarningIcon } from '@/icons/warning'

export const VotingItem = () => (
  <div className='w-full pl-[15px] xl:pl-[30px] mt-[26px] rounded-xl pr-[20px] pt-[25px] bg-[#1E1E1E] py-[25px]'>
    <div className='flex flex-col xl:flex-row justify-between'>
      <div className='flex pl-[20px] items-center gap-x-[15px]'>
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
      <div className='mt-[18px] pb-[14px] pt-[17px] xl:pb-0 xl:pt-0 xl:mt-0 border-t border-[#33332D] xl:border-none'>
        <p className='text-[#7D7D7D] text-left xl:text-right text-[13px]  font-normal leading-[normal]'>
          Emissions APR
        </p>
        <p className=' mt-[21px] text-white text-left xl:text-right text-[13px]  font-normal leading-[normal]'>
          23.03%
        </p>
      </div>
      <div className='border-t border-[#33332D] pb-[10px] xl:pb-0 pt-[10px] xl:pt-0 xl:border-none '>
        <p className='text-[#7D7D7D] text-left xl:text-right text-[13px]  font-normal leading-[normal]'>
          Emissions
        </p>
        <p className=' mt-[21px] text-white text-left xl:text-right text-[13px]  font-normal leading-[normal]'>
          0.00019 <span>MONI</span>
        </p>
      </div>
      <div className='flex flex-col items xl:items-end border-t border-t-[#33332D] xl:border-none pt-[16px] xl:pt-0'>
        <p className='text-[#7D7D7D] text-left xl:text-right text-[13px]  font-normal leading-[normal]'>
          Trading Fees
        </p>
        <p className='mt-[21px] text-white text-left xl:text-right text-[13px]  font-normal leading-[normal]'>
          0.0 <span className='text-[#7D7D7D]'>WETH</span>
        </p>
        <p className='text-white mt-[21px] text-left xl:text-right text-[13px]  font-normal leading-[normal]'>
          0.0 <span className='text-[#7D7D7D]'>DOG</span>
        </p>
        <p className='mt-[21px]  xl:text-right items-center gap-x-2 flex text-[#FC8415] text-left text-[13px]  font-normal leading-[normal] underline'>
          <BearIcon /> <span>Claim</span>
        </p>
      </div>
    </div>
  </div>
)
