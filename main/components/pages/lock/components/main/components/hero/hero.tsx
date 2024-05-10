import { Button } from '@/components/common'
import { LockIcon } from '@/icons'
import { Clock } from 'lucide-react'
import Image from 'next/image'
import { Props } from './types'

export const Hero = ({ setPage }: Props) => (
  <div className='w-full bg-[#1E1E1E] flex flex-col items-start xl:flex-row px-4 xl:px-8 relative justify-between xl:items-center min-h-[156px] rounded-[12.8px] '>
    <p className='text-[15.1px] mt-[32px] w-[80%] xl:w-auto text-[#FFFFFF]   font-medium leading-[18.27px] text-left'>
      Gain greater voting power and higher rewards, by locking more tokens for
      longer.
    </p>
    <Button
      icon={<LockIcon className='w-2.5 h-[13.13px] ' />}
      theme='orange'
      onClick={() => setPage('new_lock')}
      className='rounded-xl py-[13px] mb-[21px] xl:mb-0 mt-[9px]'
    >
      Create Lock
    </Button>
    <Image
      className='absolute top-[7px] right-[23px] '
      width={64}
      height={54}
      alt='logo'
      src='/images/bea.png'
    />
  </div>
)
