import Image from 'next/image'
import { Props } from './types'

export const Card = ({ proviter }: Props) => (
  <div
    data-aos='fade-up'
    className='overflow-hidden flex flex-col justify-between rounded-[15px] bg-black-3 text-white relative'
  >
    <div className='w-full px-[26px] pt-[29px] pb-[28px]'>
      <h3 className='text-[20px]  leading-6 font-medium '>{proviter.title}</h3>
      <p className='mt-5 text-white-1 font-normal text-[15px] leading-[18px] '>
        {proviter.subtitle}
      </p>
    </div>
    <Image
      src='/images/bea.png'
      width={40}
      height={40}
      alt='Traders'
      className='object-contain absolute top-2 right-5'
    />
    <Image
      width={284}
      height={242}
      className='w-full h-auto'
      src={proviter.image}
      alt={proviter.title}
    />
  </div>
)
