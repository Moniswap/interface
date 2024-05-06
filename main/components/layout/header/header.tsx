'use client'
import { Button, IconButton } from '@/components/common'
import { ArrowDownIcon, BearIcon, SettingsIcon } from '@/icons'
import Image from 'next/image'
import Link from 'next/link'
import {
  ConnectWallet,
  DisconnectModal,
  DropDown,
  Menu,
  MenuBar,
} from './components'
import { HEADER_LINKS } from '@/constants'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useAccount } from 'wagmi'

export const Header = () => {
  const [menu, setMenu] = useState(false)
  const [connectWalletModal, setConnectWalletModal] = useState(false)
  const { address, isConnected } = useAccount()
  const [openDisconnect, setOpenDisconnect] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (menu) {
      setMenu(false)
    }
  }, [pathname])

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [menu])

  return (
    <>
      <header className='w-full z-50 h-[97px] bg-black fixed top-0 left-0'>
        <div className='w-full h-full px-5 lg:px-8 xl:px-0 container flex justify-between items-center border-b border-[#2B2B2B]'>
          <Link href={'/'}>
            <Image
              src='/images/logo.png'
              width={150}
              height={60}
              alt='logo'
              className='hidden md:flex'
            />
            <Image
              src='/images/md_logo.png'
              width={40}
              height={40}
              alt='logo'
              className='flex md:hidden'
            />
          </Link>
          <div className='flex gap-x-40'>
            <ul className='hidden xl:flex items-center gap-x-6  font-medium text-[15px] leadin-[18px] text-white-1'>
              {HEADER_LINKS.map((link, index) => (
                <li key={index}>
                  {link?.links?.length ? (
                    <DropDown options={link?.links}>
                      <button className='flex items-center gap-2'>
                        <span>{link.label}</span>
                        <ArrowDownIcon className='w-3' />
                      </button>
                    </DropDown>
                  ) : (
                    <Link
                      href={link.path || ''}
                      className='flex items-center gap-2'
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className='flex items-center gap-[14px]'>
              <IconButton
                className='hover:bg-orange-1'
                icon={<BearIcon className='w-[44px]' />}
              />
              {!isConnected ? (
                <Button
                  className='button_linear text-[13px] leading-4 font-normal text-white py-[17px]'
                  onClick={() => setConnectWalletModal(true)}
                >
                  Connect
                </Button>
              ) : (
                <Button
                  onClick={() => setOpenDisconnect(true)}
                  className='text-[13px] leading-4 font-normal text-[#7D7D7D] py-[17px] bg-[#201F1E]'
                >
                  <span className='flex items-center'>
                    {address?.slice(0, 6)}...{address?.slice(-4)}
                    <SettingsIcon className='ml-5' />
                  </span>
                </Button>
              )}

              <Menu onClick={() => setMenu((prev) => !prev)} />
            </div>
          </div>
        </div>
      </header>
      <ConnectWallet
        open={connectWalletModal}
        setOpen={setConnectWalletModal}
      />
      <MenuBar open={menu} />
      <DisconnectModal
        open={openDisconnect}
        close={() => setOpenDisconnect(false)}
      />
    </>
  )
}
