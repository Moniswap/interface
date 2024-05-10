import { Avatar, Button, Input, TabFilter } from '@/components/common'
import { Table, TableBody, TableHead, TableHeader } from '@/components/ui/table'
import { TABVALUE } from '@/constants'
import { TableRow } from './components'
import { WarningIcon } from '@/icons/warning'
import { PigIcon } from '@/icons'
import { useState } from 'react'
import { Tab } from '@/components/common/tab-filter/types'

export const LiquidityPools = () => {
  const [tabValue, setTabValue] = useState('active')
  return (
    <section>
      <div className='container pt-[80px] pb-8 px-5 lg:px-8 xl:px-0'>
        <h1 className='text-[25px]  leading-[30px] text-white'>
          Liquidity Pools
        </h1>
        <div className='flex flex-col xl:flex-row mt-[30px] mb-[24px]'>
          <div className='max-w-full hide_scroll overflow-x-auto xl:w-[80%]'>
            <TabFilter
              name='status'
              value={tabValue}
              onChange={(val) => setTabValue(val)}
              tabs={TABVALUE}
              className='w-full'
            />
          </div>
          <div className='w-full mt-[20px] xl:mt-0  xl:w-[20%]'>
            <Input
              type='search'
              placeholder='Symbol or Address'
              className='w-full'
            />
          </div>
        </div>

        <Table>
          <TableHeader className='!rounded-[12.8px] bg-black-3 '>
            <TableHead className='w-auto xl:!w-[431px] rounded-l-[12.8px] pl-[32px] text-[13px] font-medium leading-[15px] '>
              LIQUIDITY POOL
            </TableHead>
            <TableHead className='text-end w-auto xl:!w-[211px] text-[13px] font-medium leading-[15px] '>
              APR
            </TableHead>
            <TableHead className='text-end w-auto  xl:!w-[242px] text-[13px] font-medium leading-[15px] '>
              VOLUME
            </TableHead>
            <TableHead className='text-end w-auto xl:!w-[242px]  text-[13px] font-medium leading-[15px] '>
              FEES
            </TableHead>
            <TableHead className='rounded-r-[12.8px] text-end  text-[13px] font-medium leading-[15px] '>
              POOL BALANCE
            </TableHead>
          </TableHeader>
        </Table>

        <Table className='hidden xl:inline-table rounded-[12.8px] mt-[13px] bg-black-3 overflow-hidden'>
          <TableBody>
            {new Array(10).fill('1').map((_, index) => (
              <TableRow key={index} />
            ))}
          </TableBody>
        </Table>
        <div className='block xl:hidden mt-[13px] w-full px-[12px] py-[21px] bg-black-3 rounded-[12px]'>
          {new Array(10).fill('1').map((_, index) => (
            <div className='pb-[31px]' key={index}>
              <div className='flex mb-[14px] border-b border-b-black-11 items-center gap-[13px]'>
                <div className='relative flex mr-4'>
                  <Avatar
                    src='/images/cat.png'
                    name='MONI'
                    className='w-[29px] h-[29px]'
                  />
                  <Avatar
                    src='/images/cat.png'
                    name='MONI'
                    className='w-[29px] h-[29px] absolute left-4'
                  />
                </div>
                <div>
                  <h2 className='font-medium  text-[15px] leading-[18px] text-white'>
                    vAMM-WETH/MONI
                  </h2>
                  <p className='flex mb-[14px] mt-[13px] text-[13px]  font-normal leading-[15.73px] text-white-1'>
                    Volatile Pool · 0.3% ·{' '}
                    <WarningIcon className='w-3.5 h-3.5' />
                  </p>
                </div>
              </div>
              <div className='border-b mb-[18px]  border-b-black-11 mt-[8px]'>
                <p className=' text-black-4 text-[11.82px]  font-normal leading-[14.31px]'>
                  TVL{' '}
                  <span className=' text-white-2 text-[11.82px]  font-normal leading-[14.31px]'>
                    ~$51,233,453.32
                  </span>
                </p>
                <p className='text-black-4 mt-[13px] mb-[18px] text-[11.82px]  font-normal leading-[14.31px]'>
                  TVL{' '}
                  <span className='text-[13px] text-white-2  font-normal leading-[15.73px] text-left'>
                    ~$51,233,453.32
                  </span>
                </p>
              </div>

              <div className='border-b border-b-black-11'>
                <p className='text-[11.82px] text-black-4  font-normal leading-[14.31px]'>
                  Volume
                </p>
                <p className='text-[11.82px] mt-[13px]  text-white-1  font-normal leading-[14.31px] '>
                  ~$19,134,626.38
                </p>
                <p className='text-[11.82px] my-[8px] text-white-1  font-normal leading-[14.31px] '>
                  2,425.62{' '}
                  <span className='text-[11.82px] text-black-4  font-normal leading-[14.31px]'>
                    WETH
                  </span>
                </p>
                <p className='text-[11.82px] mb-[12px] text-white-1  font-normal leading-[14.31px] '>
                  9,683,215.9{' '}
                  <span className='text-[11.82px] text-black-4  font-normal leading-[14.31px]'>
                    USDC
                  </span>
                </p>
              </div>
              <div
                className='border-b border-b-black-11 mt-2.5
              '
              >
                <p className='text-[11.82px] text-black-4  font-normal leading-[14.31px]'>
                  Fees
                </p>
                <p className='text-[11.82px] mt-[13px]  text-white-1  font-normal leading-[14.31px] '>
                  ~$19,134,626.38
                </p>
                <p className='text-[11.82px] my-[8px] text-white-1  font-normal leading-[14.31px] '>
                  2,425.62{' '}
                  <span className='text-[11.82px] text-black-4  font-normal leading-[14.31px]'>
                    WETH
                  </span>
                </p>
                <p className='text-[11.82px] mb-[12px] text-white-1  font-normal leading-[14.31px] '>
                  9,683,215.9{' '}
                  <span className='text-[11.82px] text-black-4  font-normal leading-[14.31px]'>
                    USDC
                  </span>
                </p>
              </div>
              <div
                className='border-b-[2px] border-b-black mt-2.5
              '
              >
                <p className='text-[11.82px] text-black-4  font-normal leading-[14.31px]'>
                  Pool Balance
                </p>
                <p className='text-[11.82px] mt-[13px]  text-white-1  font-normal leading-[14.31px] '>
                  ~$19,134,626.38
                </p>
                <p className='text-[11.82px] my-[8px] text-white-1  font-normal leading-[14.31px] '>
                  2,425.62{' '}
                  <span className='text-[11.82px] text-black-4  font-normal leading-[14.31px]'>
                    WETH
                  </span>
                </p>
                <Button
                  theme='dark'
                  className='py-[8px] mb-[20px] px-[9px] border-[#33332D] border text-white '
                  icon={<PigIcon className='w-4 h-[13.28px]' />}
                >
                  Deposit
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
