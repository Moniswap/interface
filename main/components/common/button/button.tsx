import { useMemo } from 'react'
import { Props } from './types'
import { cn } from '@/lib/utils'

export const Button = ({
  className,
  children,
  icon,
  theme,
  onClick,
  rightIcon,
  ...props
}: Props) => {
  const themeClassName = useMemo(() => {
    switch (theme) {
      case 'dark':
        return 'bg-black-1 text-white-1 !duration-300 !transition-all hover:bg-orange-1 hover:text-white'
      case 'dark-orange':
        return 'bg-orange-1 text-white'
      case 'orange':
        return 'bg-orange text-white'
    }
  }, [theme])

  return (
    <button
      className={cn(
        'py-3 rounded-xl px-[25px]  font-medium  text-[11px] leading-[14px] transition-all hover:opacity-95',
        themeClassName,
        className
      )}
      onClick={onClick}
      {...props}
    >
      <span
        className={`${icon || rightIcon ? 'flex items-center gap-x-2.5' : ''}`}
      >
        {icon} {children} {rightIcon}
      </span>
    </button>
  )
}
