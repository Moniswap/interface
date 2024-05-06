import { cn } from '@/lib/utils'
import { Props } from './types'

export const Tag = ({ title, className }: Props) => {
  return (
    <div
      className={cn(
        'bg-[#5A5B5A] px-[8px] py-[7px] text-white text-center text-xs  font-normal leading-[normal] flex justify-center items-center rounded-full',
        className
      )}
    >
      {title}
    </div>
  )
}
