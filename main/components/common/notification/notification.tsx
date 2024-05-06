import { WarningIcon } from '@/icons/warning'
import { Props } from './types'
import { cn } from '@/lib/utils'

export const Notifaction = ({ title, className }: Props) => (
  <div
    className={cn(
      'bg-[#141414] pr-[41px] rounded-[12.8px] flex items-start text-[#FABD61] gap-x-[17px] py-[15px] px-[23px]',
      className
    )}
  >
    <WarningIcon className='w-[14px] h-[14px]' />
    <p className='w-[80%] text-[13px]  font-medium leading-[15.73px]'>
      {title}
    </p>
  </div>
)
