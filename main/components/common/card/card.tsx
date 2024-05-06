import { cn } from '@/lib/utils'
import { Props } from './tyeps'

export const Card = ({ className, children, ...props }: Props) => (
  <div className={cn('py-7 px-9 bg-black-3 rounded-xl', className)} {...props}>
    {children}
  </div>
)
