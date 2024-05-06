/* eslint-disable react/no-unescaped-entities */
import { Button, Card, Input } from '@/components/common'

export const Referral = () => {
  return (
    <div className=' container px-5 lg:px-8 xl:px-0 mt-[22px] xl:mt-[31px]'>
      <Card
        data-aos='fade-up'
        className=' rounded-none pt-[26px] px-[16px] xl:px-[32px] pb-[29px] border border-[#33332D] bg-[#1E1E1E] '
      >
        <h2 className='text-white text-[20px] xl:text-[25px]  font-medium leading-[normal]'>
          Refer a Friend to Multiply your Score!
        </h2>
        <p className='text-[#CFCFCF] text-[10px] xl:text-[13px] mt-[17px] mb-[19px]  font-normal leading-[normal]'>
          When your friends sign up and onboard via your referral link, you both
          increase the multiplier on your score.
        </p>
        <p className='text-[#CFCFCF] text-[10px] xl:text-[13px]  w-[80%]   font-normal leading-[normal]'>
          You've already referred 0 new users, of these 0 new users are counted
          to your referral multiple. After your next referral, your new score
          multiplier will be 2x and your total points will increase to 400!
        </p>

        <Input
          type='text'
          placeholder='Link'
          baseClassName='mt-[43px]'
          className='text-white  text-[10px] xl:text-[13px]   font-normal leading-[normal]'
        />

        <div
          data-aos='fade-up'
          className='grid mt-[55px] gap-x-2.5 gap-y-[5px] grid-cols-1 xl:grid-cols-3'
        >
          <Button className='py-[22px] border rounded-[12.796px] border-solid border-[#FC8415] !transition-all !duration-300 hover:bg-[#FC8415]   text-[#CFCFCF] text-center text-[13px]  font-normal leading-[normal]'>
            Copy referral link
          </Button>
          <Button className='py-[22px] border rounded-[12.796px] border-solid border-[#FC8415] !transition-all !duration-300 hover:bg-[#FC8415]  text-[#CFCFCF] text-center text-[13px]  font-normal leading-[normal]'>
            Send as email
          </Button>

          <Button className='py-[22px] border rounded-[12.796px] border-solid border-[#FC8415] !transition-all !duration-300 hover:bg-[#FC8415]  text-[#CFCFCF] text-center text-[13px]  font-normal leading-[normal]'>
            Post on X (Twitter)
          </Button>
        </div>
      </Card>
    </div>
  )
}
