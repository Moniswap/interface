'use client'
import { Card, Notifaction } from '@/components/common'
import { SelectCoinValue } from '@/components/common/select-coin/types'
import { useState } from 'react'
import { ReloadIcon } from '@/icons'
import { Switch } from '@/components/ui/switch'
import Link from 'next/link'
import { Slider } from '@/components/ui/slider'

export const AmountToLockCard = () => {
  const [procent, setProcent] = useState([0])

  return (
    <Card data-aos='fade-up' className='w-full xl:w-[60%]'>
      <h3 className='text-[15.1px]  mb-[20px] text-white font-medium leading-[18.27px]'>
        Extending lock for Lock 12337
      </h3>
      <p className='text-[13px]  text-[#CFCFCF] font-normal leading-[15.73px] '>
        35.41  <span className='text-[#7D7D7D]'>MONI</span> locked for 12 hours
      </p>
      <p className='text-[13px]  font-normal leading-[15.73px] mt-[20px] text-[#CFCFCF]'>
        0.01238  <span className='text-[#7D7D7D]'>veMONI</span> voting power
        granted
      </p>
      <div className='border-t pt-[22px] mt-[35px] border-t-[#2B2B2B] '>
        <div className='px-[18px] pb-[35px] py-[12px] bg-[#141414]  rounded-[12px]'>
          <div className='flex justify-between'>
            <p className='flex text-white gap-x-3 items-center text-[13px]  font-medium leading-[15.73px]'>
              <ReloadIcon /> Auto Max-Lock Mode
            </p>
            <Switch />
          </div>
          <p className='text-[13px] mt-[22px] text-[#7D7D7D]  font-normal leading-[15.73px]'>
            When activated, it sets the lock to maximum unlock time, until
            disabled. Once disabled, the regular vesting unlock time will apply.
            Maximum unlock time gives a 1-to-1 voting power to the amount of
            locked tokens.
          </p>
        </div>
      </div>

      <div className='pt-[15px] border-t mt-[21px] border-[#2B2B2B]'>
        <p className=' text-[15.1px] text-white  font-medium leading-[18.27px] '>
          Extending to 4 years for 34.88 {' '}
          <span className='text-[#7D7D7D]'>veMONI</span> voting power.
        </p>
        <Slider
          className='mt-[21px] mb-[18px]'
          onValueChange={(e) => setProcent(e)}
          defaultValue={procent}
          max={100}
          step={1}
        />
        <div className='flex justify-between  text-[13px]  font-normal leading-[15.73px]  text-[#CFCFCF]'>
          <p>Min</p>
          <p>Max</p>
        </div>
      </div>

      <div className='border-t mt-[21px] border-t-[#2B2B2B] pt-[27px] '>
        <Notifaction
          className='py-[20px] '
          title={
            <p>
              You can extend the lock or{' '}
              <Link href='/' className='underline'>
                increase the lock amount.
              </Link>{' '}
              These actions will increase your voting power. The maximum lock
              time is 4 years!
            </p>
          }
        />
      </div>
    </Card>
  )
}
