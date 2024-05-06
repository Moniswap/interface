import { Avatar, Button } from '@/components/common'
import { TableCell, TableRow as TableRowUI } from '@/components/ui/table'
import { PigIcon } from '@/icons'
import { WarningIcon } from '@/icons/warning'
import Link from 'next/link'

export const TableRow = () => (
  <TableRowUI className='border-black'>
    <TableCell className='pl-[30px] border-black'>
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
          <p className='text-[13px] text-black-4  font-normal leading-[15.73px] text-left'>
            TVL{' '}
            <span className='text-[13px] text-white-2  font-normal leading-[15.73px] text-left'>
              ~$51,233,453.32
            </span>
          </p>
        </div>
      </div>
    </TableCell>
    <TableCell className='text-end'>
      <p className='text-[13px] text-right mb-[34px]  font-normal text-white-1 leading-[15.73px] '>
        70.15%
      </p>
      <Link
        href={'/'}
        className='text-[13px]  font-normal text-right  leading-[15.73px] underline text-black-4'
      >
        Add incentives
      </Link>
    </TableCell>
    <TableCell className='text-end'>
      <p className='text-[13px]  font-normal leading-[15.73px] text-white-1'>
        ~$19,134,626.38
      </p>
      <p className='text-[13px] my-[19px]  font-normal leading-[15.73px] text-white'>
        2,425.62{' '}
        <span className=' text-[13px]  font-normal leading-[15.73px] text-white-1 '>
          WETH
        </span>
      </p>
      <p className='text-[13px]  font-normal leading-[15.73px] text-white'>
        9,683,215.9
        <span className=' text-[13px]  font-normal leading-[15.73px] text-white-1 '>
          USDC
        </span>
      </p>
    </TableCell>
    <TableCell className='text-end'>
      <p className='text-[13px]  font-normal leading-[15.73px] text-white-1'>
        ~$19,134,626.38
      </p>
      <p className='text-[13px] my-[19px]  font-normal leading-[15.73px] text-white'>
        2,425.62{' '}
        <span className=' text-[13px]  font-normal leading-[15.73px] text-white-1 '>
          WETH
        </span>
      </p>
      <p className='text-[13px]  font-normal leading-[15.73px] text-white'>
        9,683,215.9
        <span className=' text-[13px]  font-normal leading-[15.73px] text-white-1 '>
          USDC
        </span>
      </p>
    </TableCell>
    <TableCell className='text-end'>
      <p className='text-[13px]  font-normal leading-[15.73px] text-white'>
        6,602.81
        <span className=' text-[13px]  font-normal leading-[15.73px] text-white-1 '>
          WETH
        </span>
      </p>
      <p className='text-[13px] my-[19px]  font-normal leading-[15.73px] text-white'>
        25,682,366.62
        <span className=' text-[13px]  font-normal leading-[15.73px] text-white-1 '>
          USDC
        </span>
      </p>
      <Button
        theme='dark'
        className='py-[9px] px-[10px] border-[#33332D] border text-white '
        icon={<PigIcon className='w-4 h-[13.28px]' />}
      >
        Deposit
      </Button>
    </TableCell>
  </TableRowUI>
)
