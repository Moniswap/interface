import { cn } from '@/lib/utils'
import { Props } from './types'

export const Card = ({ children, className }: Props) => (
  <div
    className={cn(
      'px-[18px] pb-[20px] pt-[10px] bg-[#161515] rounded-xl',
      className
    )}
  >
    {children}
  </div>
)
