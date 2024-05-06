import { HEADER_LINKS } from '@/constants'
import Link from 'next/link'

import { usePathname } from 'next/navigation'
import { Props } from './types'

export const MenuBar = ({ open }: Props) => {
  const pathname = usePathname()
  return (
    <div
      className={` fixed z-10 duration-300  transition-all w-full flex flex-col px-5 pt-32 gap-2 min-h-screen bg-black ${open ? 'top-0' : '-top-full'} `}
    >
      {HEADER_LINKS.map((link, index) => (
        <Link
          href={link.path || ''}
          key={index}
          className='py-2.5 w-full bg-black-3 rounded-[9px] text-[13px] overflow-hidden pl-4   leading-4 font-medium text-white relative'
        >
          {link.label}
          <span
            className={`absolute left-0 top-0 w-[7px] h-full ${pathname === link.path ? 'bg-orange-1' : 'bg-black-4'}`}
          ></span>
        </Link>
      ))}
    </div>
  )
}
