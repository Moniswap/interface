'use client'
import { Button, Card } from '@/components/common'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ArrowDownIcon, DoneIcon } from '@/icons'
import { useState } from 'react'

type Props = {
  title: string
  contentTitle: string
  contentSubtitle: string
  buttonTitle: string
  point: string | number
}

export const TaskItem = ({
  title,
  contentTitle,
  contentSubtitle,
  buttonTitle,
  point,
}: Props) => {
  const [open, setOpen] = useState(false)
  const [done, setDone] = useState(false)

  return (
    <Accordion
      collapsible
      type='single'
      onClick={() => setOpen(!open)}
      className={`w-full cursor-pointer transition-all   duration-300  rounded-[10px]  bg-[#000004] pb-4 pt-[23px] pr-[35px] pl-[19px]`}
    >
      <AccordionItem value='item-1' className='w-full border-b-none '>
        <AccordionTrigger className='w-full'>
          <div className='flex items-center justify-between gap-x-[13px] w-full'>
            <div className='flex items-center gap-x-[13px]'>
              {done ? (
                <div className='w-[29px] h-[29px] xl:w-[35px] xl:h-[35px] rounded-full flex justify-center items-center'>
                  <DoneIcon className='w-[35px] h-[35px]' />
                </div>
              ) : (
                <div className='w-[29px] h-[29px] xl:w-[35px] xl:h-[35px] rounded-full border border-white'></div>
              )}
              <p className='text-white text-wrap text-left text-[12.599px] xl:text-[15px]  font-medium leading-[normal]'>
                {title}
              </p>
            </div>

            <p className='text-white gap-x-2 text-right text-[12.599px] xl:text-[15px]  font-medium leading-[normal] flex items-center '>
              +{point}  points
              <ArrowDownIcon className='w-[9.435px] h-[4.718px]' />
            </p>
          </div>
        </AccordionTrigger>

        <AccordionContent className='pb-0'>
          <Card className='pt-[18px] xl:pt-[38px] px-[15px] xl:px-[39px] mt-[23px] '>
            <p className='text-[#CFCFCF] text-[11px] xl:text-[15px]  font-normal leading-[normal] w-full xl:w-[60%]'>
              {contentTitle}
            </p>
            <p className='text-[#CFCFCF] mt-3  text-[11px] xl:text-[15px]  font-normal leading-[normal] w-full xl:w-[60%]'>
              {contentSubtitle}
            </p>
          </Card>

          <Button
            theme='orange'
            onClick={() => setDone(true)}
            className='w-full py-[27px] mt-[20px] text-white text-center  text-[11px] xl:text-[15px]  font-bold leading-[normal]'
          >
            {done ? 'Completed' : buttonTitle}
          </Button>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
