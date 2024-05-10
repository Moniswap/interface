'use client'
import {
  Avatar,
  Button,
  Card,
  Notifaction,
  SelectCoin,
  SwapperCoin,
} from '@/components/common'
import { SelectCoinValue } from '@/components/common/select-coin/types'
import { useState } from 'react'
import { CoinModal } from './components'
import { Props } from './types'
import { Slider } from '@/components/ui/slider'

export const AmountToLockCard = () => {
  const [from, setFrom] = useState<SelectCoinValue | undefined>(undefined)
  const [to, setTo] = useState<SelectCoinValue | undefined>(undefined)
  const [procent, setProcent] = useState([0])

  const [openCoinFrom, setOpenCoinFrom] = useState(false)
  const [openCointo, setOpenCointo] = useState(false)

  const swapCoin = () => {
    if (from && to) {
      const fromCurrent = { ...from }
      const toCurrent = { ...to }
      setTo(fromCurrent)
      setFrom(toCurrent)
    }
  }

  return (
    <Card className='w-full xl:w-[60%]'>
      <div className='flex justify-between text-white  mb-[29px]'>
        <p className='font-medium  text-[15px] leadin-[18px]'>Amount to lock</p>
        <p className='font-medium  text-[13px] leadin-[15px]'>
          Available 0.0 MONI
        </p>
      </div>

      <SelectCoin value={to} onClick={() => setOpenCointo(true)} />
      <div className='pt-[31px] mt-[50px] border-t border-t-[#2B2B2B]'>
        <p className='text-[15.1px]  font-medium leading-[18.27px] text-white'>
          Locking for 4 years for 0.0 
          <span className='text-[#7D7D7D]'>veMONI</span> voting power.
        </p>
      </div>

      <Slider
        className='mt-[20px]'
        onValueChange={(e) => setProcent(e)}
        defaultValue={procent}
        max={100}
        step={1}
      />

      <div className='flex  text-[13px]  font-normal leading-[15.73px] pt-[18px] pb-[35px] border-b text-[#CFCFCF] border-[#2B2B2B] w-full justify-between'>
        <div>7 days</div>
        <div>1 years</div>
        <div>2 years</div>
        <div>3 years</div>
        <div>4 years</div>
      </div>

      <Notifaction
        className='mt-[24px]'
        title='Locking will give you an NFT, referred to as a veNFT. You can increase the Lock amount or extend the Lock time at any point after.'
      />

      <CoinModal
        onChange={(val) =>
          setFrom({ icon: val.icon, label: val.label, value: val.value })
        }
        open={openCoinFrom}
        close={() => setOpenCoinFrom(false)}
      />
      <CoinModal
        onChange={(val) => setTo(val)}
        open={openCointo}
        close={() => setOpenCointo(false)}
      />
    </Card>
  )
}
