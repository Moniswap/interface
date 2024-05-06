'use client'
import { Button } from '@/components/common'
import { BearIcon2, CopyIcon, GridIcon, LockIcon, PigIcon } from '@/icons'
import Link from 'next/link'
import { useState } from 'react'
import { Props } from './types'

export const RelayItem = ({ onClick }: Props) => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    if (onClick) {
      onClick()
    }

    setOpen((prev) => !prev)
  }

  return (
    <div data-aos='fade-up'>
      <div
        onClick={handleClick}
        className='px-[25px] cursor-pointer select-none rounded-xl py-[28px] bg-[#1E1E1E] flex items-start flex-col xl:flex-row xl:items-center justify-between'
      >
        <div className='flex items-center gap-[19px]'>
          <div className='w-[50px] h-[50px] rounded-[12px] bg-[#33332D] flex justify-center items-center '>
            <GridIcon className='w-6 h-6 text-white' />
          </div>
          <div>
            <div className='flex gap-2 items-center'>
              <h2 className=' text-[13.1px] xl:text-base  font-medium leading-[19.36px] text-white'>
                Moonwell veMONI
              </h2>
              <Button theme='dark' className='py-2'>
                ID 11129
              </Button>
            </div>
            <p className='text-[13px] mt-[14px]  text-[#CFCFCF] font-normal leading-[15.73px]'>
              Updated 5 days ago · 0xc981...EF14f{' '}
              <button className='text-white'>
                <CopyIcon className='w-3.5 h-3.5' />
              </button>{' '}
            </p>
          </div>
        </div>

        <div className='xl:pt-0 mt-[19px] xl:mt-[0px] pt-[12px] border-t border-[#33332D] w-full xl:w-auto xl:border-none'>
          <p className='text-[13px] xl:text-right  font-normal text-left leading-[15.73px] text-[#7D7D7D] '>
            APR
          </p>
          <p className='text-[13px] text-left xl:text-right mt-[9px] xl:mt-[21px] text-[#CFCFCF]  font-normal leading-[15.73px]'>
            {' '}
            48.26%
          </p>
        </div>
        <Button
          theme='dark'
          className='py-[17px] px-[12px] hidden xl:block  text-[13px]  font-normal leading-[15.73px]'
        >
          Reward{' '}
          <span className='text-[13px]  text-[#CFCFCF] font-normal leading-[15.73px]'>
            MONI
          </span>
        </Button>

        <div className='xl:pt-0 pt-[12px] border-t border-[#33332D] w-full xl:w-auto xl:border-none'>
          <p className='text-[13px]   text-left xl:text-right font-normal leading-[15.73px] text-[#7D7D7D]'>
            Voting Power
          </p>
          <p className='text-[13px] mt-[9px] xl:mt-[21px] text-left xl:text-right  font-normal  leading-[15.73px] text-[#CFCFCF]'>
            10,486,701.61 veMONI
          </p>
        </div>

        <Button
          icon={<PigIcon className=' w-4 h-[13.28px]' />}
          className='border-[#33332D] text-white mt-[22px] xl:mt-0 border py-[11px] xl:py-[13px] px-[15px]  text-[13px]  font-medium leading-[15.73px] text-center'
        >
          Deposit Lock
        </Button>
      </div>
      <div
        className={`w-[95%] transition-all duration-300 pb-[9px] xl:pb-0 overflow-hidden ${open ? 'max-h-[187px] xl:max-h-[86px]' : 'max-h-0'} m-auto rounded-b-xl bg-[#131212] `}
      >
        <div className='px-[14px] pr-[18px] rounded-xl pb-[12px] pt-[13px]  '>
          <div className='bg-[#1E1E1E] w-full flex flex-col xl:flex-row items-start xl:items-center rounded-xl justify-between px-[8px] pt-[22px] pb-[19px] '>
            <div className='flex flex-col xl:flex-row gap-y-[14px] xl:gap-y-0  gap-x-10'>
              <h3 className='flex text-base gap-2 text-[#CFCFCF]  font-medium items-center leading-[19.36px]'>
                Lock ID 12337 <LockIcon />
              </h3>
              <p className='text-[15px]  text-[#7D7D7D] font-normal leading-[18.15px]'>
                0.1 MONI locked for 4 years
              </p>
              <p className='text-[15px]  font-normal text-[#7D7D7D] leading-[18.15px]'>
                0.0 MONI compounded
              </p>
            </div>

            <div className='mt-[26px] xl:mt-0'>
              <Link
                href='/'
                className='flex items-center text-[#FC8415] gap-x-3 text-[15px]  font-normal leading-[18.15px] underline '
              >
                {' '}
                <BearIcon2 /> Withdraw Lock
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
