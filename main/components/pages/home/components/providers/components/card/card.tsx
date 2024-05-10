import Image from 'next/image'
import { Props } from './types'
import { BeaIcon } from '@/icons'

export const Card = ({ proviter }: Props) => (
  <div className='overflow-hidden flex flex-col min-h-[492px] justify-between rounded-[15px] bg-black-3 text-white relative'>
    <div className='w-full px-[25px] pt-[29px] pb-[28px]'>
      <h3 className='text-[20px]  leading-6 font-medium '>{proviter.title}</h3>
      <p className='mt-5 xl:mt-[24px] text-white-1 w-[90%] font-normal text-[15px] !leading-[18.15px] '>
        {proviter.subtitle}
      </p>
    </div>
    <BeaIcon className='w-10 h-10 absolute mt-[22px] xl:top-[25px] right-2' />
    <Image
      width={284}
      height={242}
      className='w-full h-auto'
      src={proviter.image}
      alt={proviter.title}
    />
  </div>
)
