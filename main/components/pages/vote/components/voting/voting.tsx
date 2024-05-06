'use client'
import { Input, TabFilter } from '@/components/common'
import { VOTE } from '@/constants'
import { VoteItem } from './components'
import { ArrowDownIcon } from '@/icons'
import { useState } from 'react'

export const Vote = () => {
  const [tabValue, setTabValue] = useState('most_rewarded')
  return (
    <div className='container pt-[89px] pb-4 px-5 lg:px-8 xl:px-0'>
      <h1
        data-aos='fade-up'
        className='text-[25px]  text-white font-medium leading-[30.26px]'
      >
        Select Liquidity Pools for Voting
      </h1>
      <div className='flex flex-col xl:flex-row justify-between mt-[30px] mb-[30px]'>
        <div
          data-aos='fade-up'
          className='max-w-full hide_scroll overflow-x-auto xl:w-[80%]'
        >
          <TabFilter
            value={tabValue}
            onChange={(val) => setTabValue(val)}
            name='voting'
            tabs={VOTE}
            className=''
          />
        </div>
        <div
          data-aos='fade-up'
          className='w-full mt-[20px] xl:mt-0  xl:w-[20%]'
        >
          <Input
            type='search'
            placeholder='Symbol or Address'
            className='w-full'
          />
        </div>
      </div>

      <div
        data-aos='fade-up'
        className='bg-[#1E1E1E] rounded-xl mt-[13px] grid grid-cols-5 py-[15px] pl-[32px] pr-[25px]'
      >
        <div>
          <p className='text-[#7D7D7D] text-[13px]  font-medium leading-[normal]'>
            POOLS
          </p>
        </div>
        <div className='pr-2'>
          <p className='text-[#7D7D7D] text-right text-[13px]   font-medium leading-[normal]'>
            FEES
          </p>
        </div>
        <div className='pr-3'>
          <p className='text-[#7D7D7D] text-right text-[13px]   font-medium leading-[normal]'>
            INCENTIVES
          </p>
        </div>
        <div className='flex justify-end pr-2'>
          <p className='text-[#7D7D7D] flex items-center gap-2 text-[13px]  font-medium leading-[normal]'>
            TOTAL REWARDS
            <ArrowDownIcon className='w-[9.435px] h-[4.718px] text-[#7D7D7D]' />
          </p>
        </div>
        <div className='pr-2'>
          <p className='text-[#7D7D7D] text-[13px]  font-medium  text-right leading-[normal]'>
            vAPR
          </p>
        </div>
      </div>
      <div data-aos='fade-up' className='mt-[13px] bg-[#1E1E1E] rounded-xl'>
        {new Array(10).fill(' ').map((_, index) => (
          <VoteItem key={index} />
        ))}
      </div>
    </div>
  )
}
