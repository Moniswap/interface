'use client'
import { Card, SelectCoin, SwapperCoin } from '@/components/common'
import { SelectCoinValue } from '@/components/common/select-coin/types'
import { useState } from 'react'
import { CoinModal, LiquidityRouting } from './components'

export const SwapCard = () => {
  const [from, setFrom] = useState<SelectCoinValue | undefined>(undefined)
  const [to, setTo] = useState<SelectCoinValue | undefined>(undefined)

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
      <div className='flex justify-between text-white mb-[29px]'>
        <p className='font-medium  text-[15px] leadin-[18px]'>Swap</p>
        <p className='font-medium  text-[13px] leadin-[15px]'>
          Available 0.0 MONI
        </p>
      </div>
      <SelectCoin
        onClick={() => setOpenCoinFrom(true)}
        value={from}
        resultValueclassName={
          from ? 'border-orange-1 border text-orange-1' : ''
        }
      />
      <SwapperCoin onClick={swapCoin} className='my-[50px] ' />
      <div className='flex justify-between text-white  mb-[29px]'>
        <p className='font-medium  text-[15px] leadin-[18px]'>To</p>
        <p className='font-medium  text-[13px] leadin-[15px]'>
          Available 0.0 USDC
        </p>
      </div>
      <SelectCoin value={to} onClick={() => setOpenCointo(true)} />
      {from && to && (
        <div className='pb-[35px]'>
          <LiquidityRouting from={from || {}} to={to || {}} />
        </div>
      )}
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
