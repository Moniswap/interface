import { Card, Input, Notifaction } from '@/components/common'
import { LockIcon } from '@/icons'
import Image from 'next/image'

export const LockTransferCard = () => (
  <Card className='w-full xl:w-[60%]'>
    <h3 className='text-[15.1px]  text-white font-medium leading-[18.27px]'>
      Select the Lock you want to merge
    </h3>

    <div className='pt-[15px] mt-[23px] flex gap-x-[15px] items-center pb-[23px] border-t border-t-[#2B2B2B] border-b border-b-[#2B2B2B] '>
      <div className='w-[80px] h-[80px] rounded-xl bg-[#1B1A1A] flex justify-center items-center'>
        <Image src='/images/moni.png' width={35} height={35} alt='logo' />
      </div>
      <div>
        <h3 className='flex items-center text-white gap-x-2 text-base  font-medium leading-[19.36px]'>
          Lock ID 12337 <LockIcon className='w-2.5 h-[13.13px]' />{' '}
        </h3>
        <p className='text-[#CFCFCF] text-[13px]  font-normal mt-[16px] leading-[15.73px]'>
          35.41 MONI locked for 18 hours
        </p>
      </div>
    </div>

    <p className='text-[15.1px] mt-[23px]  font-medium leading-[18.27px] text-white'>
      To Wallet Address
    </p>
    <Input type='text' baseClassName='mt-[11px]' placeholder='0x' />
  </Card>
)
