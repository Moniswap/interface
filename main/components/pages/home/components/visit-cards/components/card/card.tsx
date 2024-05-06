import { CheckIcon } from '@/icons'
import { Props } from './types'

export const Card = ({ title }: Props) => (
  <div
    data-aos='zoom-in-up'
    className='p-[18px] relative border border-black-3 rounded-xl text-white py-[38px]'
  >
    <p className='w-[50%]  text-[15px] leading-[18px]'> {title}</p>
    <CheckIcon className='absolute top-[11px] right-[12px]' />
  </div>
)
