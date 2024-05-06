import { Avatar } from '@/components/common'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Props } from './types'

export const LiquidityRouting = ({ to, from }: Props) => (
  <div>
    <p className='font-normal mt-[35px]  text-[13px] leading-[15px] text-white-1'>
      Liquidity Routing
    </p>
    <div className='w-full h-[1px] bg-black-9 mt-5 '></div>
    <div className='relative w-full mt-[28px]'>
      <div className='flex justify-between items-center'>
        <Avatar
          name={to.label || ''}
          className='w-[24px] h-[24px]'
          src={to.icon}
        />
        <div className='relative '>
          <div className='w-[14.83px] h-[14.83px] rounded-full text-white bg-[#9A9888] flex '>
            <MdOutlineKeyboardArrowRight className='text-[6px]' />
            <MdOutlineKeyboardArrowRight className='text-[6px]' />
          </div>
          <div className='flex flex-col items-center gap-[3px] absolute left-[-35px] top-[15px]'>
            <div className='w-[1px] h-[15px] bg-black-6'></div>
            <div className='text-white rounded-[8px] bg-black-10 py-[11px] px-[20px]'>
              <p className='font-normal  leading-[11px] text-[13px] text-center'>
                0.05%
              </p>
              <p className='font-normal   leading-[11px] text-[13px] text-center'>
                Volatile
              </p>
            </div>
          </div>
        </div>
        <Avatar name={to.label || ''} className='w-[24px] h-[24px]' />
        <div className='relative '>
          <div className='w-[14.83px] h-[14.83px] rounded-full text-white bg-[#9A9888] flex '>
            <MdOutlineKeyboardArrowRight className='text-[6px]' />
            <MdOutlineKeyboardArrowRight className='text-[6px]' />
          </div>
          <div className='flex flex-col items-center gap-[3px] absolute left-[-35px] top-[15px]'>
            <div className='w-[1px] h-[15px] bg-black-6'></div>
            <div className='text-white rounded-[8px] bg-black-10 py-[11px] px-[20px]'>
              <p className='font-normal  leading-[11px] text-[13px] text-center'>
                0.05%
              </p>
              <p className='font-normal   leading-[11px] text-[13px] text-center'>
                Volatile
              </p>
            </div>
          </div>
        </div>
        <Avatar
          name={from.label || ''}
          src={from.icon}
          className='w-[24px] h-[24px]'
        />
      </div>
      <div className='absolute top-[12px] w-full h-[1px] border-b border-dashed z-[1] '></div>
    </div>
  </div>
)
