import { cn } from '@/lib/utils'
import { Props } from './types'
import { IoMdLock } from 'react-icons/io'
import { useMemo } from 'react'
import { HourGlassIcon, LockIcon } from '@/icons'

export const TimeLine = ({ active, timeLines, className }: Props) => {
  const renderIcon = (currentIndex: number) => {
    if (!active) {
      return currentIndex + 1
    }

    if (currentIndex === active) {
      return <HourGlassIcon className='w-[13px] h-[14px] text-black-13' />
    } else if (active < currentIndex) {
      return <LockIcon className='w-2.5 h-[13px]' />
    } else if (active > currentIndex) {
      return timeLines[currentIndex].icon
    }
  }

  const renderLabel = (currentIndex: number) => {
    if (active) {
      if (active > currentIndex) {
        return timeLines[currentIndex].finishLabel
      } else {
        return (
          <p className='w-full font-normal  text-[13px] leading-[15px] text-white'>
            {timeLines[currentIndex].label}
          </p>
        )
      }
    } else {
      return (
        <p className='w-full font-normal  text-[13px] leading-[15px] text-white'>
          {timeLines[currentIndex].label}
        </p>
      )
    }
  }

  return (
    <div className={cn('flex gap-[54px] w-full flex-col relative', className)}>
      {timeLines?.map((item, index) => (
        <div key={index} className={`w-full flex gap-[16px] relative`}>
          <div className='w-[30px] text-white font-medium leading-[17px] text-[14px] z-10 h-[30px]  pr-px  rounded-[10px] bg-black-12 flex justify-center items-center'>
            {renderIcon(index)}
          </div>
          <div className='w-[90%]'>{renderLabel(index)}</div>
        </div>
      ))}
      <div className='absolute left-[15px] h-[95%] w-[1px] bg-black-13'></div>
    </div>
  )
}
