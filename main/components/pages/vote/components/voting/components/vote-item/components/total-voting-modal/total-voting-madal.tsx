import { Avatar, Button, Modal, Tag } from '@/components/common'
import { Props } from './types'
import { LockIcon, ProcentIcon } from '@/icons'
import { WarningIcon } from '@/icons/warning'
import { XCircleIcon } from 'lucide-react'
import { IoCloseOutline } from 'react-icons/io5'

const PROCENTS = ['0%', '10%', '25%', '50%', '75%', '100%']

export const TotalVotingModal = ({ open, close }: Props) => (
  <Modal open={open} close={close} className='max-w-[100vw]'>
    <div>
      <div className='flex-col flex gap-x-[14px] pb-[52px]'>
        <div className='bg-[#2B2B2B] w-full py-[26px] flex justify-between items-center pl-[19px] pr-[17px] rounded-xl'>
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
          <div className='flex  flex-col items-end gap-x-2'>
            <p className='text-[#CFCFCF] text-right text-[7.062px] xl:text-[13px]  font-normal leading-[normal]'>
              Total Voting Power
            </p>
            <p className='text-[#34D22C] mt-[13px] text-right text-[7.062px] xl:text-[13px]  font-normal leading-[normal]'>
              100.0% Available
            </p>
          </div>
        </div>

        <div className='flex xl:grid grid-cols-4'>
          <div className='w-[50%] xl:w-auto flex-col  flex items-start mt-[29px] gap-x-3 xl:gap-x-8'>
            <div className='flex gap-x-[5px] xl:gap-4'>
              <div className='relative flex mr-4'>
                <Avatar
                  src='/images/cat.png'
                  name='MONI'
                  className='w-[14.531px] xl:w-[28px] h-[14.531px] xl:h-[28px]'
                />
                <Avatar
                  src='/images/cat.png'
                  name='MONI'
                  className='w-[14.531px] xl:w-[28px] h-[14.531px] xl:h-[28px] absolute left-3 xl:left-6'
                />
              </div>

              <div className=''>
                <div className='relative'>
                  <h3 className='text-white text-[8.303px] xl:text-base  font-medium leading-[normal]'>
                    LvAMM-WETH/USDC
                  </h3>
                  <button className=' absolute w-[23px] right-[-39px] h-[23px] top-[-9px] xl:w-[23px] xl:h-[23px] transition-all duration-300 hover:bg-black hover:text-white rounded-full bg-white flex justify-center items-center'>
                    <IoCloseOutline className='text-[22px]' />
                  </button>
                </div>
                <p className='flex mt-[9px] items-center gap-2 text-[#CFCFCF] text-[6.747px]  xl:text-[13px]  font-normal leading-[normal]'>
                  Volatile Pool· 0.3% <WarningIcon className='h-3 w-3' />
                </p>
              </div>
            </div>

            <div className=' flex flex-col items-start xl:hidden'>
              <p className='text-[#CFCFCF] text-right mt-[29px] text-[13px]  font-normal leading-[normal]'>
                <span className='text-[#7D7D7D]'>Votes 14</span>,469,842.01
              </p>
              <p className='text-[#CFCFCF] my-[10px] text-right text-[13px]  font-normal leading-[normal]'>
                <span className='text-[#7D7D7D]'>Total Rewards</span>
                ~$104,704.27
              </p>
              <p className='text-[#CFCFCF] text-right text-[13px]  font-normal leading-[normal]'>
                <span className='text-[#7D7D7D]'>Voting</span>APR 127.31%
              </p>
              <p className='text-[#7D7D7D] mt-[29px] text-right text-[13px]  font-normal leading-[normal]'>
                Est. Rewards
              </p>
              <p className='text-[#CFCFCF] mt-[10px] text-right text-[13px]  font-normal leading-[normal]'>
                3~$0.0
              </p>
            </div>
          </div>

          <div className=' hidden xl:block'>
            <p className='text-[#CFCFCF] text-right mt-[29px] text-[13px]  font-normal leading-[normal]'>
              <span className='text-[#7D7D7D]'>Votes 14</span>,469,842.01
            </p>
            <p className='text-[#CFCFCF] my-[10px] text-right text-[13px]  font-normal leading-[normal]'>
              <span className='text-[#7D7D7D]'>Total Rewards</span>~$104,704.27
            </p>
            <p className='text-[#CFCFCF] text-right text-[13px]  font-normal leading-[normal]'>
              <span className='text-[#7D7D7D]'>Voting</span>APR 127.31%
            </p>
          </div>

          <div className='hidden xl:block'>
            <p className='text-[#7D7D7D] mt-[29px] text-right text-[13px]  font-normal leading-[normal]'>
              Est. Rewards
            </p>
            <p className='text-[#CFCFCF] mt-[10px] text-right text-[13px]  font-normal leading-[normal]'>
              3~$0.0
            </p>
          </div>
          <div className='w-full flex justify-start xl:justify-end flex-col items-end'>
            <div className='flex gap-x-[41px] mt-[11px]'>
              <div>
                <p className='text-[#7D7D7D] mt-[15px] text-right text-[13px]  font-normal leading-[normal]'>
                  Voting Power
                </p>
                <p className='text-[#CFCFCF] mt-[13px] text-right text-[13px]  font-normal leading-[normal]'>
                  0.0 veMONI
                </p>
              </div>
              <Button
                className='bg-[#2B2B2B] text-white py-[15px] xl:py-[28px] px-[15px] xl:px-[29px] pr-[46px] text-center text-white text-[8.303px] xl:text-base  font-bold leading-[normal]'
                icon={<ProcentIcon className='w-2 h-2 xl:w-4 xl:h-4 ' />}
              >
                0.00
              </Button>
            </div>
            <div className='flex mt-[11px] gap-x-[16px]'>
              {PROCENTS.map((item) => (
                <Tag
                  className={
                    ' text-[7.326px] xl:text-[14.117px] rounded-[5.429px]'
                  }
                  key={item}
                  title={item}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </Modal>
)
