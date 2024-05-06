'use client'
import {
  Avatar,
  Button,
  Card,
  SelectCoin,
  SwapperCoin,
} from '@/components/common'
import { SelectCoinValue } from '@/components/common/select-coin/types'
import { useState } from 'react'
import { CoinModal } from './components'
import { WarningIcon } from '@/icons/warning'
import { Props } from './types'

export const SwapCard = ({ setPathRoute }: Props) => {
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
    <Card data-aos='fade-up' className='w-full xl:w-[60%]'>
      <div className='flex gap-10 pb-[44px]  border-b border-black-9'>
        <div className='flex relative'>
          <Avatar size='lg' src='/images/cat.png' name='coin' />
          <Avatar
            size='lg'
            src='/images/cat.png'
            name='coin'
            className='absolute left-6'
          />
        </div>
        <div>
          <h3 className=' text-[15px]  font-medium leading-[18.15px] text-white'>
            vAMM-WETH/MONI
          </h3>
          <p className='flex gap-2 items-center text-[13px] mt-[5px]  text-white-1 font-normal leading-[15.73px]'>
            Volatile Pool · 1% · <WarningIcon className='w-3.5 h-3.5 ' />
          </p>
        </div>
      </div>

      <div className='text-black-4 mt-[15px] mb-[11px] flex w-full justify-between'>
        <p className=' text-[13px]  font-normal leading-[15.73px]'>Liquidity</p>
        <p className=' text-[13px]  font-normal leading-[15.73px]'>
          Your position
        </p>
      </div>

      <div className='flex my-[11px] w-full text-white-1 justify-between'>
        <p className=' text-[15px]  font-normal leading-[18.15px]'>
          360.35 <span className='text-black-4'>WETH</span>
        </p>
        <p className='text-[15px]   font-normal leading-[18.15px]'>
          0.0 <span className='text-black-4'>WETH</span>
        </p>
      </div>

      <div className='flex my-[11px]  pb-[31px] border-b border-b-black-9 w-full text-white-1 justify-between'>
        <p className=' text-[15px]  font-normal leading-[18.15px]'>
          1,887,663.31 <span className='text-black-4'>MONI</span>
        </p>
        <p className='text-[15px]   font-normal leading-[18.15px]'>
          0.0 <span className='text-black-4'>MONI</span>
        </p>
      </div>

      <div className='flex justify-between text-white mb-[29px]'>
        <p className='font-medium  text-[15px] leadin-[18px]'>First Token</p>
        <p className='font-medium  text-[13px] leadin-[15px]'>
          Available 0.0 MONI
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
        <p className='font-medium  text-[15px] leadin-[18px]'>Second Token</p>
        <p className='font-medium  text-[13px] leadin-[15px]'>
          Available 0.0 USDC
        </p>
      </div>

      <SelectCoin value={to} onClick={() => setOpenCointo(true)} />

      <div className='flex mt-[28px]'>
        <Button
          onClick={() => setPathRoute('stoke_liquidity')}
          theme='dark'
          className='py-3 rounded-r-none'
        >
          Volatile Pool
        </Button>
        <Button
          theme='dark-orange'
          className='rounded-l-none'
          onClick={() => setPathRoute('stoke_liquidity')}
        >
          Stable Pool
        </Button>
      </div>

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
