import { Avatar, Modal } from '@/components/common'
import { Props } from './types'
import { LockIcon } from '@/icons'
import { useState } from 'react'

export const PoolsSelectModal = ({ open, close }: Props) => {
  const [vote, setVote] = useState(false)
  return (
    <Modal className='max-w-[100vw]' open={open} close={close}>
      <div className='flex gap-x-[14px] pb-[52px]'>
        <div className='bg-[#2B2B2B] w-[70%] xl:w-[85%] py-[26px] flex justify-between items-center pl-[19px] pr-[17px] rounded-xl'>
          <div className='flex  items-center gap-x-[15px]'>
            <div className='w-[40px] h-[40px] xl:w-[80px]  xl:h-[80px] rounded-[12.796px] bg-[#1B1A1A] flex justify-center items-center'>
              <Avatar
                name='coin'
                src={'/images/moni.png'}
                className='w-[19px] h-[19px] xl:w-[35px] xl:h-[35px]'
              />
            </div>
            <div>
              <p className='text-white flex items-center gap-2 text-[8.692px] xl:text-base  font-medium leading-[normal]'>
                Lock ID 12337{' '}
                <LockIcon className='w-[5.432px] h-[7.13px] xl:w-2.5 xl:h-[13.125px]' />{' '}
              </p>
              <p className='text-[#CFCFCF] mt-[8px] xl:mt-[16px] text-[7.062px] xl:text-[13px]  font-normal leading-[normal]'>
                35.41 MONI locked for 18 hours
              </p>
            </div>
          </div>
          <div className='flex items-end flex-col  gap-x-2'>
            {vote && (
              <p className='text-[#34D22C] mb-3 text-right text-[13px]  font-normal leading-[normal]'>
                100.0%
              </p>
            )}
            <div className='flex items-center gap-x-2'>
              <div
                className={`w-[16px] h-[16px] xl:w-[30px] xl:h-[30px] rounded-[30px] pr-0 xl:pr-1 ${vote ? 'bg-[#34D22C]' : 'bg-[#5A5B5A]'} flex justify-center items-center text-[#CFCFCF] text-center text-[7.062px] xl:text-[13px]  font-normal leading-[normal]`}
              >
                0
              </div>
              <p
                className={` ${vote ? 'text-[#34D22C]' : 'text-[#CFCFCF]'} text-right text-[7.062px] xl:text-[13px]  font-normal leading-[normal]`}
              >
                Pool Selected
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={() => setVote(!vote)}
          className='rounded-[12.796px] w-[30%] xl:w-[15%] bg-[#FC8415] text-[#CFCFCF] text-center text-[7.062px] xl:text-[13px]  font-bold leading-[normal]'
        >
          Vote
        </button>
      </div>
    </Modal>
  )
}
