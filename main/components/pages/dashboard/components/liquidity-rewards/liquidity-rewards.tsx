'use client'
import { Button } from '@/components/common'
import { Empty, VotingItem } from './components'
import { CriclePlus, QuestionIcon } from '@/icons'
import { useState } from 'react'

export const LiquidityRewards = () => {
  const [liquidity, setLiquidity] = useState<'empty' | 'fill'>('fill')

  return (
    <section className='w-full mt-[119px] '>
      <div className='container'>
        <div className='flex justify-between w-full'>
          <h2
            data-aos='fade-up'
            className='flex gap-2 items-center text-white 16px xl:text-[25px]  font-medium leading-[30.26px]'
          >
            Liquidity Rewards <QuestionIcon />{' '}
          </h2>
        </div>
        {liquidity === 'empty' && <Empty />}
        {liquidity === 'fill' && <VotingItem />}
      </div>
    </section>
  )
}
