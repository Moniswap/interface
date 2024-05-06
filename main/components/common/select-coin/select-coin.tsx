'use client'
import { cn } from '@/lib/utils'
import { Props } from './types'
import { Avatar } from '../avatar'
import { GiBearFace } from 'react-icons/gi'
import { ArrowDownIcon } from '@/icons'
import { useEffect, useState } from 'react'
export const SelectCoin = ({ className, onClick, value, onChange }: Props) => {
  const [price, setPrice] = useState(value?.value)

  useEffect(() => {
    if (onChange && value) {
      onChange(value)
    }
  }, [value])

  useEffect(() => {
    if (value?.value) {
      setPrice(value?.value)
    }
  }, [value?.value])

  return (
    <div className={cn('flex rounded-[12.8px] items-center', className)}>
      <div
        onClick={onClick}
        className=' gap-[9px] w-[70%] lg:w-[40%] rounded-l-[12.8px] border-l border-t border-t-black-9  border-b border-b-black-9  border-l-black-9  h-full  px-[15px] py-4 flex items-center cursor-pointer'
      >
        <Avatar
          className='w-[28px] h-[28px]'
          src={value?.icon ? value?.icon : ''}
          icon={!value?.icon ? <GiBearFace /> : ''}
          name='bear'
        />
        <span className='text-white-1 font-medium  text-[15px]'>
          {value?.label || 'Select Coin'}
        </span>
        <ArrowDownIcon className='w-[9px] h-[9px] text-[#CFCFCF]' />
      </div>
      <input
        value={String(price)}
        type='number'
        onChange={(e) => setPrice(Number(e.target.value))}
        className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none font-medium focus:border-[#FFB443] focus:border-l-black-9 outline-none bg-transparent leading-[21px]   border-l w-[30%]  lg:w-[60%] border rounded-r-[12.8px] border-black-9 text-white h-full  px-[15px] py-[20px] flex items-center cursor-pointer'
      />
    </div>
  )
}
