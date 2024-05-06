import { SearchIcon } from '@/icons'
import { Props } from './types'
import { CiSearch } from 'react-icons/ci'
import { cn } from '@/lib/utils'

export const Input = ({
  onChange,
  type,
  className,
  placeholder,
  value,
  baseClassName,
}: Props) => (
  <div
    className={cn(
      'border-black-11 border rounded-xl px-4 flex justify-between  gap-1 items-center text-white',
      baseClassName
    )}
  >
    {type === 'search' ? <CiSearch className='text-white text-2xl' /> : ''}
    <input
      type='text'
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={cn(
        'border-none outline-none bg-transparent w-full placeholder:text-black-4 h-[54px] text-[13px] font-normal ',
        className
      )}
    />
  </div>
)
