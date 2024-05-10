'use client'
import { Button } from '@/components/common'
import { QuestionIcon } from '@/icons'
import { useState } from 'react'
import { Empty } from './components'
import { VotingRewardsItem } from './components/voting-rewards-item/voting-rewards-item'

export const VotingRewards = () => {
  const [liquidity, setLiquidity] = useState<'empty' | 'fill'>('fill')

  return (
    <section className='w-full mt-[119px] pb-[2rem]'>
      <div className='container'>
        <div className='flex justify-between w-full'>
          <h2 className='flex gap-2 items-center text-white  16px xl:text-[25px]   font-medium leading-[30.26px]'>
            Voting Rewards <QuestionIcon />{' '}
          </h2>
          <Button className='border border-[#1E1E1A] hover:bg-orange-1 py-[14px] px-[14px] text-[#CFCFCF]'>
            Claim All
          </Button>
        </div>

        {liquidity === 'empty' && <Empty />}
        {liquidity === 'fill' && <VotingRewardsItem />}
      </div>
    </section>
  )
}
