/* eslint-disable react/no-unescaped-entities */
import { Button, IconButton } from '@/components/common'
import { FOOTER_SOCIAL_MEDIA } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { PiRocket } from 'react-icons/pi'

export const Footer = () => (
  <footer className='w-full py-[67px] bg-black-6 border-t border-black-5 rounded-t-[100px]'>
    <div className='container w-full flex h-full flex-col xl:flex-row px-5 lg:px-[69px] xl:px-[69px] '>
      <div className='hidden xl:block'>
        <a href={'/'}>
          <Image
            src='/images/logo.png'
            width={150}
            height={60}
            alt='logo'
            className='flex'
          />
        </a>
        <h3 className='text-[20px] mt-[109px]  font-medium leading-[24px] text-white'>
          AUDITED BY
        </h3>
        <Image
          src='/images/certik.png'
          width={200}
          height={70}
          alt='logo'
          className='object-cover mt-[9px]'
        />
        <p className='mt-[150px] text-[#CFCFCF] text-sm  font-normal leading-[normal]'>
          Copyright © 2024 Moniswap . All rights reserved.
        </p>
      </div>

      <div className='w-full xl:w-[40%]'>
        <h3 className='text-[24px] font-medium  leading-6 text-white text-center'>
          DON'T MISS THE GOOD NEWS
        </h3>
        <h1 className='font-medium text-[35px] leading-[42px]  text-center mt-[22px] mb-[30px] text-white'>
          Subscribe to Our Newsletter
        </h1>
        <div className='flex flex-col xl:flex-row gap-[15px]'>
          <input
            type='text'
            placeholder='Your@email.com'
            className='outline-none border-none px-7 py-4 w-full text-white rounded-full text-[13px] bg-black-3 placeholder:text-black-8'
          />
          <Button className='py-4 px-7 rounded-full button_linear text-[13px] font-normal text-white '>
            Subscribe
          </Button>
        </div>

        <div className='justify-between mt-[50px] hidden xl:flex'>
          <p className='text-[15px] w-1/2 font-medium  leading-[19px] text-white'>
            Company
          </p>
          <p className='text-[15px] w-1/2 text-left font-medium  leading-[19px] text-white'>
            Project & Developers
          </p>
        </div>
        <div className='justify-between my-[17px] hidden xl:flex '>
          <a
            href='/'
            className='font-normal transition-all duration-300 hover:text-orange w-1/2 text-[14px]  leading-[16px] text-white-1'
          >
            About Moniswap
          </a>
          <a
            href='/'
            className='font-normal w-1/2  transition-all duration-300 hover:text-orange text-left text-[14px]  leading-[16px] text-white-1'
          >
            Submit Your Project
          </a>
        </div>
        <div className='justify-between hidden xl:flex'>
          <a
            href='/'
            className='font-normal w-1/2 transition-all duration-300 hover:text-orange text-[14px]  leading-[16px] text-white-1'
          >
            Documentation
          </a>
          <a
            href='/'
            className='font-normal w-1/2  transition-all duration-300 hover:text-orange text-[14px]  leading-[16px] text-white-1'
          >
            Partner
          </a>
        </div>
      </div>
      <div className='w-[30%] hidden xl:flex justify-center flex-col items-center'>
        <Link
          href='/swap'
          className='rounded-full bg-gradient-to-br mt-16 mb-[112px] from-yellow-400 to-orange-500 p-5 w-[100px] h-[100px] flex items-center justify-center text-center flex-col gap-3 text-[12px] text-white my-5 leading-tight'
        >
          <PiRocket color='#fff' size={30} />
          <p className='text-sm capitalize'>swap</p>
        </Link>
        <div className='flex gap-x-[9px]'>
          {FOOTER_SOCIAL_MEDIA.map((item, index) => (
            <a href='/' key={index}>
              <IconButton
                className='hover:bg-orange-1 bg-[#000]'
                icon={<item.icon />}
              />
            </a>
          ))}
        </div>
      </div>

      <div className='w-full flex mt-[36px] flex-col items-center xl:hidden'>
        <Link href={'/'}>
          <Image
            src='/images/logo.png'
            width={150}
            height={60}
            alt='logo'
            className='flex'
          />
        </Link>
        <h3 className='text-[20px]  font-medium leading-[24px] text-white'>
          AUDITED BY
        </h3>
        <Image
          src='/images/certik.png'
          width={200}
          height={70}
          alt='logo'
          className='object-cover mt-[9px]'
        />

        <p className='text-[15px] mt-[35px] font-medium  leading-[19px] text-white'>
          Company
        </p>
        <a
          href='/'
          className='font-normal transition-all duration-300 hover:text-orange  text-[14px] mt-[19px] mb-[17px]  leading-[16px] text-white-1'
        >
          About Moniswap
        </a>
        <a
          href='/'
          className='font-normal transition-all duration-300 hover:text-orange text-[14px]  leading-[16px] text-white-1'
        >
          Documentation
        </a>
        <p className='text-[15px]  mt-[53px] font-medium  leading-[19px] text-white'>
          Project & Developers
        </p>
        <a
          href='/'
          className='font-normal transition-all duration-300 hover:text-orange cursor-pointer  text-[14px] mt-[19px] mb-[17px]  leading-[16px] text-white-1'
        >
          Submit Your Project
        </a>
        <a
          href='/#'
          className='font-normal transition-all duration-300 hover:text-orange cursor-pointer text-[14px]  leading-[16px] text-white-1'
        >
          Partner
        </a>
      </div>

      <div className='w-full flex xl:hidden justify-center flex-col items-center'>
        <Link
          href='/swap'
          className='rounded-full bg-gradient-to-br mt-16 from-yellow-400 to-orange-500 p-5 w-[100px] h-[100px] flex items-center justify-center text-center flex-col gap-3 text-[12px] text-white my-5 leading-tight'
        >
          <PiRocket color='#fff' size={30} />
          <p className='text-sm capitalize'>swap</p>
        </Link>
        <div className='flex gap-x-[9px] mt-[70px]'>
          {FOOTER_SOCIAL_MEDIA.map((item, index) => (
            <IconButton
              className='hover:bg-orange-1'
              icon={<item.icon />}
              key={index}
            />
          ))}
        </div>
        <p className='text-[#CFCFCF] text-sm  font-normal leading-[normal] mt-[52px]'>
          Copyright © 2024 Moniswap. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
)
