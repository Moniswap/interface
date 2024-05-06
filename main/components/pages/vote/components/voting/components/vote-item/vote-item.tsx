'use client'
import { Avatar, Button } from '@/components/common'
import { WarningIcon } from '@/icons/warning'
import { Card, PoolsSelectModal, TotalVotingModal } from './components'
import { LikeIcon } from '@/icons'
import React, { useState } from 'react'

export const VoteItem = () => {
  const [open, setOpen] = useState(false)
  const [totalOpen, setTotalOpen] = useState(false)
  return (
    <>
      <div className='px-[11px] xl:px-[34px] flex flex-col xl:grid grid-cols-5 border-b border-black '>
        <div className='cursor-pointer' onClick={() => setTotalOpen(true)}>
          <div className='flex pt-[22px] pb-[26px] xl:pb-[24px]'>
            <div className='flex gap-x-[15px]'>
              <div className='relative flex mr-4'>
                <Avatar
                  src='/images/cat.png'
                  name='MONI'
                  className='w-[32px] h-[32px]'
                />
                <Avatar
                  src='/images/cat.png'
                  name='MONI'
                  className='w-[32px] h-[32px] absolute left-4'
                />
              </div>
              <div className='ml-[55px'>
                <h2 className='font-medium  text-[15px] leading-[18px] text-white'>
                  vAMM-WETH/MONI
                </h2>
                <p className='flex mt-[15px] mb-[24px] text-[13px]  font-normal leading-[15.73px] text-white-1'>
                  Volatile Pool · 0.3% · <WarningIcon className='w-3.5 h-3.5' />
                </p>
                <p className='hidden xl:block mt-[15px] mb-[24px] text-[13px] text-black-4  font-normal leading-[15.73px] text-left'>
                  Votes{' '}
                  <span className='text-[13px] text-white-2  font-normal leading-[15.73px] text-left'>
                    136,654,607.4 →   24.41%
                  </span>
                </p>
                <p className='hidden xl:block text-[13px] text-black-4  font-normal leading-[15.73px] text-left'>
                  TVL{' '}
                  <span className='text-[13px] text-white-2  font-normal leading-[15.73px] text-left'>
                    ~$51,233,453.32
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex w-full  xl:w-auto items-center justify-normal  xl:justify-end'>
          <Card className='w-full xl:w-auto'>
            <p className='text-[#7D7D7D] mb-[11px] block xl:hidden text-[11.163px]  font-normal leading-[normal]'>
              Fees
            </p>
            <p className='border-b-[#33332D] text-[#CFCFCF] border-b pb-[14px] text-[13px]  font-normal leading-[15.73px]'>
              ~$870,694.31
            </p>
            <p className='text-[13px] text-[#7D7D7D] my-4  font-normal leading-[15.73px]'>
              327,589.36 USDC
            </p>
            <p className='text-[13px] text-[#7D7D7D]  font-normal leading-[15.73px]'>
              694,044.38 MONI
            </p>
          </Card>
        </div>
        <div className='flex justify-end items-center'>
          <Card className='w-full mt-[13px] xl:mt-[26px] xl:w-auto'>
            <p className='text-[#7D7D7D] mb-[11px] block xl:hidden text-[11.163px]  font-normal leading-[normal]'>
              Incentives{' '}
            </p>
            <p className='border-b-[#33332D] text-[#CFCFCF] border-b pb-[14px] text-[13px]  font-normal leading-[15.73px]'>
              ~$870,694.31
            </p>
            <p className='text-[13px] text-[#7D7D7D] my-4  font-normal leading-[15.73px]'>
              327,589.36 USDC
            </p>
            <p className='text-[13px] text-[#7D7D7D]  font-normal leading-[15.73px]'>
              694,044.38 MONI
            </p>
          </Card>
        </div>
        <div className='flex items-center justify-end'>
          <Card className='w-full mt-[13px] xl:mt-[26px] xl:w-auto'>
            <p className='text-[#7D7D7D] mb-[11px] block xl:hidden text-[11.163px]  font-normal leading-[normal]'>
              Total Rewards
            </p>
            <p className='border-b-[#33332D] text-[#CFCFCF]  border-b pb-[14px] text-[13px]  font-normal leading-[15.73px]'>
              ~$870,694.31
            </p>
            <p className='text-[13px] my-4  text-[#7D7D7D] font-normal leading-[15.73px]'>
              327,589.36 USDC
            </p>
            <p className='text-[13px]  text-[#7D7D7D] font-normal leading-[15.73px]'>
              694,044.38 MONI
            </p>
          </Card>
        </div>
        <div>
          <div className='flex flex-row  pb-[18px] justify-between xl:flex-col h-full items-end xl:justify-end'>
            <div>
              <p className='text-[#7D7D7D] mb-[11px] block xl:hidden text-[11.163px]  font-normal leading-[normal]'>
                vAPR
              </p>
              <p className='text-[13px] flex items-center gap-x-3  font-normal leading-[15.73px] text-[#CFCFCF] '>
                50.95% <WarningIcon />
              </p>
            </div>
            <Button
              theme='dark'
              onClick={() => setOpen(true)}
              className='border border-[#33332D]  mt-[53px] rounded-[12.8px] py-[9px] text-[13px]  font-medium leading-[15.73px] text-center'
              icon={<LikeIcon className='text-white w-[17px] h-[14.57px]' />}
            >
              Selectd
            </Button>
          </div>
        </div>
      </div>
      <PoolsSelectModal open={open} close={() => setOpen(false)} />
      <TotalVotingModal open={totalOpen} close={() => setTotalOpen(false)} />
    </>
  )
}
