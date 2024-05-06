'use client'
import { Button } from '@/components/common'
import { GridIcon, QuestionIcon } from '@/icons'
import { useState } from 'react'
import { Empty, RelayItem } from './components'

export const Relay = () => {
  const [relay, setRelay] = useState<'empty' | 'fill'>('fill')

  const handleAllClick = () => {
    if (relay === 'empty') {
      setRelay('fill')
    } else {
      setRelay('empty')
    }
  }

  return (
    <section className='w-full mt-[119px] '>
      <div className='container'>
        <div className='flex justify-between w-full'>
          <h2
            data-aos='fade-up'
            className='flex gap-2 items-center text-white 16px xl:text-[25px]   font-medium leading-[30.26px]'
          >
            Relay <QuestionIcon />{' '}
          </h2>
          <Button
            data-aos='fade-up'
            onClick={handleAllClick}
            className='border border-[#1E1E1A] hover:bg-orange-1 py-[14px] px-[14px] text-[#CFCFCF]'
            rightIcon={<GridIcon className='w-3 h-3' />}
          >
            All Relays
          </Button>
        </div>
        <div className='mt-[46px]'>
          {relay === 'empty' && <Empty />}
          {relay === 'fill' && <RelayItem />}
        </div>
      </div>
    </section>
  )
}
