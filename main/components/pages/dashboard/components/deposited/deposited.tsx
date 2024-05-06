'use client'
import { Avatar, Button } from '@/components/common'
import { CriclePlus, QuestionIcon } from '@/icons'
import { useState } from 'react'
import { DepositeItem, Empty } from './components'
import { Table } from '@/components/ui/table'
import { WarningIcon } from '@/icons/warning'
import { Card } from './components/deposite-item/components'

export const Deposited = () => {
  const [deposit, setDeposit] = useState<'empty' | 'fill'>('fill')

  const handleAddDeposte = () => {
    if (deposit === 'empty') {
      setDeposit('fill')
    } else if (deposit === 'fill') {
      setDeposit('empty')
    }
  }

  return (
    <section className='w-full '>
      <div className='container px-5 lg:px-8 xl:px-0 pt-[175px]'>
        <div className='flex justify-between w-full'>
          <h2
            data-aos='zoom-in'
            className='flex gap-2 items-center text-white  16px xl:text-[25px]   font-medium leading-[30.26px]'
          >
            Deposited & Staked Liquidity <QuestionIcon />{' '}
          </h2>
          <Button
            className='border border-[#1E1E1A] hover:bg-orange-1 py-[14px] px-[14px] text-[#CFCFCF]'
            icon={<CriclePlus />}
            onClick={handleAddDeposte}
            data-aos='zoom-in'
          >
            New Deposit
          </Button>
        </div>
        <div className='mt-[46px] w-full'>
          {deposit === 'empty' && <Empty />}

          {deposit === 'fill' && (
            <>
              <Table className='w-full hidden xl:inline-table rounded-[12px] bg-[#1E1E1E]'>
                {new Array(5).fill(1).map((_, index) => (
                  <DepositeItem key={index} />
                ))}
              </Table>
              <div className='w-full mt-[15px] rounded-xl bg-[#1E1E1E] py-[12px] px-[12px] xl:hidden'>
                {new Array(10).fill(1).map((_, index) => (
                  <div
                    data-aos='fade-up'
                    className='border-b pb-[18px] border-b-black'
                    key={index}
                  >
                    <div className='flex pt-[14px] gap-[25px] mb-[26px] items-center'>
                      <div className='flex relative  '>
                        <Avatar
                          src='/images/cat.png'
                          name='avatr'
                          className='w-[29px] h-[29px]'
                        />
                        <Avatar
                          src='/images/cat.png'
                          name='avatr'
                          className='w-[29px] h-[29px] absolute right-[-14px]'
                        />
                      </div>

                      <div>
                        <h2 className='text-[13.64px]  font-medium leading-[16.51px] text-white'>
                          vAMM-WETH/MONI
                        </h2>
                        <p className='flex mt-[13px] text-[#CFCFCF] items-center gap-2 text-[13.64px]  font-medium leading-[16.51px]'>
                          Volatile Pool · 0.3% · <WarningIcon />
                        </p>
                      </div>
                    </div>

                    <Card>
                      <p className='text-[#7D7D7D] text-[11.16px]  font-normal leading-[13.51px] mb-[11px]'>
                        {' '}
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
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
