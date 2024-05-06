'use client'
import { cn } from '@/lib/utils'
import { Props } from './types'
import { useEffect, useState } from 'react'

export const TabFilter = ({
  name,
  tabs,
  className,
  onChange,
  value,
}: Props) => {
  const [tabValue, setTabValue] = useState(value || '')

  useEffect(() => {
    if (onChange) {
      onChange(tabValue)
    }
  }, [onChange, tabValue])

  useEffect(() => {
    if (value) {
      setTabValue(value)
    }
  }, [value])

  return (
    <div className={cn(`w-full flex`, className)}>
      {tabs.map((tab, index) => (
        <div
          onClick={() => setTabValue(tab.value)}
          key={index}
          className={`${tabValue === tab.value ? 'bg-orange ' : 'bg-black-14'}  ${index === 0 ? 'rounded-l-[12px] max-w-full border-l' : ''} ${tabs.length - 1 === index ? 'rounded-r-[12px]' : ''} text-white flex justify-center items-center border-t border-r border-b border-black-11 cursor-pointer py-[19px] px-[28px] text-[13px]  leading-[15px] font-medium `}
        >
          {tab.label}
        </div>
      ))}
    </div>
  )
}
