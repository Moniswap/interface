'use client'
import { Avatar, Card, IconButton, SelectCoin } from '@/components/common'
import { ArrowDownIcon } from '@/icons'
import { WarningIcon } from '@/icons/warning'
import { useState } from 'react'
import { CoinModal } from './components'
import { SelectCoinValue } from '@/components/common/select-coin/types'

export const CoinsCard = () => {
  const [open, setOpen] = useState(false)
  const [coin, setCoin] = useState<SelectCoinValue | undefined>(undefined)
  return (
    <Card className='w-full xl:w-[60%]'>
      <div className='flex gap-10 pb-[44px]  justify-between border-b border-black-9'>
        <div className='flex gap-10'>
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
              sAMM-AAA/AAA2
            </h3>
            <p className='flex gap-2 items-center text-[13px] mt-[5px]  text-white-1 font-normal leading-[15.73px]'>
              Volatile Pool · 0.3% · <WarningIcon className='w-3.5 h-3.5 ' />
            </p>
          </div>
        </div>

        <IconButton
          className='w-10 h-10 rounded-full flex justify-center items-center'
          icon={<ArrowDownIcon className=' w-[9.44px] h-[4.72px]' />}
        />
      </div>

      <div className='text-black-4 mt-[15px] mb-[11px] flex w-full justify-between'>
        <p className=' text-[13px]  font-normal leading-[15.73px]'>Liquidity</p>
        <p className=' text-[13px]  font-normal leading-[15.73px]'>
          Your position
        </p>
      </div>

      <div className='flex my-[11px] w-full text-white-1 justify-between'>
        <p className=' text-[15px]  font-normal leading-[18.15px]'>0.014 AAA</p>
        <p className='text-[15px]   font-normal leading-[18.15px]'>0.0 AAA</p>
      </div>

      <div className='flex my-[11px]  pb-[31px] border-b border-b-black-9 w-full text-white-1 justify-between'>
        <p className=' text-[15px]  font-normal leading-[18.15px]'>
          0.00612 AAA2
        </p>
        <p className='text-[15px]   font-normal leading-[18.15px]'>0.0 AAA2</p>
      </div>

      <div className='flex border-b border-b-black-9  pb-[26px] justify-between'>
        <div>
          <h3 className=' text-black-4 text-[13px]  font-normal leading-[15.73px]'>
            APR
          </h3>
          <p className='text-white-1 text-right mt-[11px] text-[15px]  font-normal leading-[18.15px]'>
            0.0%
          </p>
        </div>
        <div>
          <h3 className='text-black-4 text-[13px]  font-normal leading-[15.73px]'>
            Current Votes
          </h3>
          <p className='text-white-1 text-right mt-[11px] text-[15px]  font-normal leading-[18.15px]'>
            0.0
          </p>
        </div>
        <div>
          <h3 className='text-black-4 text-[13px]  font-normal leading-[15.73px]'>
            Current Incentives
          </h3>
          <p className='text-white-1 text-right mt-[11px] text-[15px]  font-normal leading-[18.15px]'>
            ~$0.0
          </p>
        </div>
      </div>

      <div className='flex mt-[39px] justify-between text-white  mb-[29px]'>
        <p className='font-medium  text-[15px] leadin-[18px]'>Your Incentive</p>
        <p className='font-medium   text-[13px] leadin-[15px]'>
          Available 0.0 MONI
        </p>
      </div>
      <SelectCoin
        resultValueclassName={coin ? 'border-orange ' : ''}
        value={coin}
        onClick={() => setOpen(true)}
      />
      <CoinModal
        open={open}
        onChange={(data) => setCoin(data)}
        close={() => setOpen(false)}
      />
    </Card>
  )
}
