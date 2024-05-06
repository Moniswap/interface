import { Avatar } from '@/components/common'
import Image from 'next/image'
import Link from 'next/link'
import { FiChevronDown } from 'react-icons/fi'
import { PiRocket } from 'react-icons/pi'

export const LookingToGet = () => (
  <section className="w-full bg-[url('/images/bg.svg')] h-screen bg-no-repeat	bg-center my-20">
    <div className='flex w-full mx-auto items-center justify-center flex-col'>
      <div data-aos='zoom-in-up' className='-mt-10 animate-bounce'>
        <FiChevronDown className='text-[20px] -mb-2 text-white' />
        <FiChevronDown className='text-[20px] -mb-2 text-white' />
        <FiChevronDown className='text-[20px] -mb-2 text-white' />
        <FiChevronDown className='text-[20px] -mb-2 text-white' />
      </div>
      <div className='flex items-center h-[calc(100vh-100px)] flex-col  justify-center w-full'>
        <Image
          src='/images/chain.png'
          width={90}
          height={30}
          alt='chain'
          className='my-5'
          data-aos='zoom-in-up'
        />
        <h1
          data-aos='zoom-in-up'
          className='text-white text-[25px] xl:text-[25px]  text-center'
        >
          Looking to get{' '}
        </h1>
        <h1
          data-aos='zoom-in-up'
          className='text-white text-[27px] xl:text-[40px]  text-center'
        >
          Started on Moniswap?
        </h1>
        <Link
          href='/swap'
          data-aos='zoom-in-up'
          className='rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 p-5 w-[100px] h-[100px] flex items-center justify-center text-center flex-col gap-3 text-[12px] text-white my-5 leading-tight'
        >
          <PiRocket color='#fff' size={25} />
          <p className='text-xs capitalize'>onboarding guide</p>
        </Link>
      </div>
    </div>
  </section>
)
