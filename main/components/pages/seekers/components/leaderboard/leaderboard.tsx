import { Card } from '@/components/common'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { TABLEDATA } from '@/constants'

export const Leaderboard = () => (
  <div className='container mt-[28px] mb-[120px]'>
    <Card className='border rounded-none border-solid border-[#33332D] pt-[23px] px-[32px] pb-[42px]'>
      <div className='flex flex-col xl:flex-row items-start xl:items-center justify-between'>
        <h2 className='text-white text-[18.863px] xl:text-[25px]  font-medium leading-[normal]'>
          The Leaderboard
        </h2>
        <p className='text-white mt-[9px] xl:mt-0 text-right text-[9.809px] xl:text-xl  font-medium leading-[normal]'>
          You are ranked 13,959 of 290,250 participants
        </p>
      </div>
      <p className='text-[#CFCFCF] mt-[20px]  text-[13px]  font-normal leading-[normal] xl:mt-[12px] mb-[18px] '>
        Compete to get the highest score, you can do it!
      </p>

      <Table>
        <TableHeader className='bg-[#000004] !rounded-[10px] overflow-hidden'>
          <TableHead className='rounded-l-[10px]  text-white text-[11.318px] xl:text-[15px]  font-medium leading-[normal]'>
            #
          </TableHead>
          <TableHead className=' text-white text-[11.318px] xl:text-[15px]  font-medium leading-[normal]'>
            Name
          </TableHead>
          <TableHead className=' text-white text-[11.318px] xl:text-[15px]  font-medium leading-[normal]'>
            Verified Referral Multiplier
          </TableHead>
          <TableHead className='rounded-r-[10px]  text-white text-[11.318px] xl:text-[15px]  font-medium leading-[normal]'>
            Total Score
          </TableHead>
        </TableHeader>
        <TableBody>
          {TABLEDATA.slice(0, 5).map((item, index) => (
            <TableRow
              key={index}
              className=' text-[11.318px] border-none hover:bg-[#FF993C] overflow-hidden'
            >
              <TableCell className='text-[#CFCFCF] text-[11.318px] rounded-l-[10px] xl:text-[15px]  font-medium leading-[normal]'>
                {index + 1}
              </TableCell>
              <TableCell className='text-[#CFCFCF] text-[11.318px] xl:text-[15px]  font-medium leading-[normal]'>
                {item.id}
              </TableCell>
              <TableCell className='text-[#CFCFCF] text-[11.318px] xl:text-[15px]  font-medium leading-[normal]'>
                {item.count}
              </TableCell>
              <TableCell className='text-[#CFCFCF] text-[11.318px] rounded-r-[10px] xl:text-[15px]  font-medium leading-[normal]'>
                {item.score} points
              </TableCell>
            </TableRow>
          ))}
          <TableRow className='border-none'>
            <TableCell
              className='text-center text-[#CFCFCF] text-[15px]  font-medium leading-[normal]'
              colSpan={4}
            >
              13,951 other participants
            </TableCell>
          </TableRow>
          {TABLEDATA.slice(0, 5).map((item, index) => (
            <TableRow
              key={index}
              className=' border-none hover:bg-[#FF993C] overflow-hidden'
            >
              <TableCell className='text-[#CFCFCF] rounded-l-[10px] text-[15px]  font-medium leading-[normal]'>
                {(index + 1) * 100}
              </TableCell>
              <TableCell className='text-[#CFCFCF]  text-[15px]  font-medium leading-[normal]'>
                {item.id}
              </TableCell>
              <TableCell className='text-[#CFCFCF] text-[15px]  font-medium leading-[normal]'>
                {item.count}
              </TableCell>
              <TableCell className='text-[#CFCFCF] rounded-r-[10px] text-[15px]  font-medium leading-[normal]'>
                {item.score} points
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  </div>
)
