import { Avatar, Button } from '@/components/common'
import { TableCell, TableRow } from '@/components/ui/table'
import { WarningIcon } from '@/icons/warning'
import { LikeIcon } from '@/icons'
import { Card } from './components'

export const DepositeItem = () => (
  <TableRow data-aos='fade-up' className='border-b-black'>
    <TableCell>
      <div className='flex'>
        <div className='flex gap-x-[15px]'>
          <div className='relative flex mr-4'>
            <Avatar
              src='/images/cat.png'
              name='MONI'
              className='w-[32px] h-[32px]'
            />
            <Avatar
              src='/images/cat.pang'
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
            <p className='mt-[15px] mb-[24px] text-[13px] text-black-4  font-normal leading-[15.73px] text-left'>
              Votes{' '}
              <span className='text-[13px] text-white-2  font-normal leading-[15.73px] text-left'>
                136,654,607.4 →   24.41%
              </span>
            </p>
            <p className='text-[13px] text-black-4  font-normal leading-[15.73px] text-left'>
              TVL{' '}
              <span className='text-[13px] text-white-2  font-normal leading-[15.73px] text-left'>
                ~$51,233,453.32
              </span>
            </p>
          </div>
        </div>
      </div>
    </TableCell>
    <TableCell className='text-right'>
      <Card>
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
    </TableCell>
    <TableCell className='text-right'>
      <Card>
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
    </TableCell>
    <TableCell className='text-right'>
      <Card>
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
    </TableCell>
    {/* <TableCell className="flex h-full w-full flex-col justify-between items-end text-right">
      <p className="text-[13px] flex items-center gap-x-3  font-normal leading-[15.73px] text-[#CFCFCF] ">
        50.95% <WarningIcon />
      </p>
      <Button
        theme="dark"
        className="border border-[#33332D]  mt-[53px] rounded-[12.8px] py-[9px] text-[13px]  font-medium leading-[15.73px] text-center"
        icon={<LikeIcon className="text-white w-[17px] h-[14.57px]" />}
      >
        Selectd
      </Button>
    </TableCell> */}
  </TableRow>
)
