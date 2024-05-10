'use client'
import { Avatar, Card, IconButton } from '@/components/common'
import { SelectCoinValue } from '@/components/common/select-coin/types'
import { useState } from 'react'
import { WarningIcon } from '@/icons/warning'
import { Slider } from '@/components/ui/slider'
import { ArrowDownIcon } from '@/icons'

export const ProcentCard = () => {
  const [procent, setProcent] = useState([0])

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
              vAMM-WETH/MONI
            </h3>
            <p className='flex gap-2 items-center text-[13px] mt-[5px]  text-white-1 font-normal leading-[15.73px]'>
              Volatile Pool · 1% · <WarningIcon className='w-3.5 h-3.5 ' />
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
        <p className=' text-[13px]  font-normal leading-[15.73px]'>To stake</p>
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

      <p className='text-[15.1px]  font-medium leading-[18.27px] text-black-4'>
        Stake {procent[0]}%
      </p>
      <div className='mt-5'>
        <Slider
          className=''
          onValueChange={(e) => setProcent(e)}
          defaultValue={procent}
          max={100}
          step={1}
        />
      </div>
      <div className='flex mt-[18px] justify-between text-[13px]  font-normal leading-[15.73px] text-white-1'>
        <p>0%</p>
        <p>25%</p>
        <p>50%</p>
        <p>75%</p>
        <p>100%</p>
      </div>
    </Card>
  )
}
