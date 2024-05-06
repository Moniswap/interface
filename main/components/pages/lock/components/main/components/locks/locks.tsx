import { LockIcon, QuestionIcon } from '@/icons'
import { Props } from './types'
import Image from 'next/image'
import Link from 'next/link'

export const Locks = ({ locks }: Props) => {
  return (
    <div className='mt-[96px]'>
      <h1
        data-aos='fade-up'
        className='text-3xl gap-x-3 mb-10 text-white  font-medium gap-1 leading-[36.31px] items-center flex'
      >
        Locks <QuestionIcon />
      </h1>
      <div
        data-aos='fade-up'
        className='w-full py-[53px] px-[21px] xl:px-[34px] bg-[#1E1E1E] rounded-xl'
      >
        {!locks ? (
          <p className='text-[13px]  font-normal leading-[15.73px] text-[#CFCFCF]'>
            To receive incentives and fees create a lock and vote with it.
          </p>
        ) : (
          <div className='flex flex-col xl:flex-row justify-between'>
            <div className='flex gap-x-[21px]'>
              <div
                data-aos='fade-up'
                className='w-[50px] flex justify-center items-center h-[50px] rounded-[12.8px] bg-[#33332D] '
              >
                <Image
                  src={'/images/moni.png'}
                  width={35}
                  height={35}
                  alt='logo'
                  className='rounded-full'
                />
              </div>

              <div>
                <h1 className='flex text-base  font-medium leading-[19.36px] text-white '>
                  Lock ID 12337 <LockIcon />{' '}
                </h1>
                <div className='grid grid-cols-3 gap-y-[15px] xl:gap-y-0 xl:flex gap-x-3 text-[13px] mt-[21px] underline  font-medium leading-[15.73px] text-[#FBB302]'>
                  <Link href='/'>Increase</Link>
                  <Link href='/'>Extend</Link>
                  <Link href='/'>Merge</Link>
                  <Link href='/'>Transfer</Link>
                  <Link href='/'>Poke</Link>
                  <Link href='/'>Reset</Link>
                  <Link href='/'>Withdraw</Link>
                </div>
              </div>
            </div>

            <div className='flex mt-[18px] w-full xl:w-auto xl:mt-0 justify-between'>
              <div className='flex flex-col w-full xl:w-auto xl:flex-row gap-[22px] xl:gap-[79px]'>
                <div className='border-t border-[#33332D] w-full xl:w-auto xl:border-none pt-[14px]'>
                  <p className='text-[#7D7D7D] text-[13px]  font-normal leading-[15.73px] text-left xl:text-right'>
                    Rebase APR
                  </p>
                  <p className='mt-[18px] text-[#CFCFCF] text-[13px]  font-normal leading-[15.73px] text-left xl:text-right'>
                    8.65%
                  </p>
                </div>
                <div className='border-t border-[#33332D] w-full xl:w-auto xl:border-none pt-[14px]'>
                  <p className='text-[#7D7D7D] text-[13px]  font-normal leading-[15.73px]  text-left xl:text-right'>
                    Locked Amount
                  </p>
                  <p className='mt-[18px] text-[#CFCFCF] text-[13px]  font-normal leading-[15.73px]  text-left xl:text-right'>
                    35.41 MONI
                  </p>
                </div>
                <div className='border-t border-[#33332D] w-full xl:w-auto xl:border-none pt-[14px]'>
                  <p className='text-[#7D7D7D] text-[13px]  font-normal leading-[15.73px]  text-left xl:text-right'>
                    Rebase APR
                  </p>
                  <p className='mt-[18px] text-[#CFCFCF] text-[13px]  font-normal leading-[15.73px]  text-left xl:text-right'>
                    8.65%
                  </p>
                </div>
                <div className='border-t border-[#33332D] w-full xl:w-auto xl:border-none pt-[14px]'>
                  <p className='text-[#7D7D7D] text-[13px]  font-normal leading-[15.73px]  text-left xl:text-right'>
                    Voting Power
                  </p>
                  <p className='mt-[18px] text-[#CFCFCF] text-[13px]  font-normal leading-[15.73px]  text-left xl:text-right'>
                    0.02844 veMONI
                  </p>
                </div>
                <div className='border-t border-[#33332D] w-full xl:w-auto xl:border-none pt-[14px]'>
                  <p className='text-[#7D7D7D]  text-[13px]  font-normal leading-[15.73px]  text-left xl:text-right'>
                    Unlock Date
                  </p>
                  <p className='text-[13px] text-[#CFCFCF] mt-[18px]  font-normal leading-[15.73px]  text-left xl:text-right'>
                    locked for a year
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
