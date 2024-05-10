'use client'
import { useState } from 'react'
import { Empty, LockItem } from './components'
import { QuestionIcon } from '@/icons'

export const Locks = () => {
  const [deposit, setDeposit] = useState<'empty' | 'fill'>('fill')

  return (
    <>
      <section className='w-full mt-[119px] '>
        <div className='container'>
          <h2 className='flex gap-2 mb-[46px] items-center text-white  16px xl:text-[25px]  font-medium leading-[30.26px]'>
            Locks <QuestionIcon />{' '}
          </h2>

          {deposit === 'empty' && <Empty />}

          {deposit === 'fill' && (
            <div className='w-full min-h-[124px] py-[28px] px-[21px] xl:px-[34px] bg-[#1E1E1E] rounded-xl'>
              <LockItem />
            </div>
          )}
        </div>
      </section>
    </>
  )
}
