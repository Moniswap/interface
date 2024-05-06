import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Props } from './types'
import Link from 'next/link'

export const DropDown = ({ options, children }: Props) => {
  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent className='bg-black border-none flex flex-col gap-[7px]  max-w-[142px]'>
        {options?.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className='bg-black-3 py-2.5 rounded-[9.06px] relative pl-3  text-white-1 overflow-hidden cursor-pointer  font-medium text-[13px]'
          >
            <span className='w-[7px] h-full bg-black-4 absolute top-0 left-0 '></span>
            {link.label}
          </Link>
        ))}
      </PopoverContent>
    </Popover>
  )
}
