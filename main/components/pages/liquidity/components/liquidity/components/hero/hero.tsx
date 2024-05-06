import { Button, Card } from '@/components/common'
import { PigIcon, QuestionIcon } from '@/icons'
import Image from 'next/image'
import Link from 'next/link'
import { Props } from './types'

export const Hero = ({ setPathRoute }: Props) => (
  <section className='pt-[160px]'>
    <div className='container flex flex-col xl:flex-row  gap-x-[22px] px-5 lg:px-8 xl:px-0 '>
      <Card
        data-aos='fade-up'
        className=' w-full px-[13px] py-[18px] xl:px-[32px] xl:py-[21px] xl:w-[70%] relative'
      >
        <h2 className='font-medium  w-[80%] xl:w-[60%] text-[13.11px] xl:text-[15px] leading-[18px] text-white '>
          Liquidity Providers (LPs) make low-slippage swaps possibl e. Deposit
          and Stake liquidity to earn MONI.
        </h2>
        <div className='grid grid-cols-1 xl:grid-cols-3 gap-x-3 gap-y-[7px] xl:gap-y-0 w-full xl:w-[80%] mt-[21px] mb-[25px]'>
          <Button theme='dark' className='py-4 px-2.5 text-white-1 '>
            TVL ~$278,843,952.26
          </Button>
          <Button theme='dark' className='py-4 px-2.5 text-white-1'>
            Fees ~$879,279.65
          </Button>
          <Button theme='dark' className='py-4 px-2.5 text-white-1 '>
            Volume ~$137,109,907.9
          </Button>
        </div>
        <div className='w-full pb-[11px] pt-[35px] flex flex-col xl:flex-row items-start xl:items-end justify-between  border-t border-black-12'>
          <h1 className='font-normal  text-[13px] leading-[15px] text-white-1'>
            There are currently 74 tokens listed.
            <Link href={'#'} className='underline'>
              View Tokens
            </Link>{' '}
            or{' '}
            <Link href={'#'} className='underline'>
              List New Token
            </Link>
          </h1>
          <Button
            theme='orange'
            icon={<PigIcon />}
            className='mt-[15px] xl:mt-0'
            onClick={() => setPathRoute('deposit')}
          >
            Deposit Liquidity
          </Button>
        </div>
        <Image
          src='/images/bea.png'
          width={64}
          height={56}
          alt='Traders'
          className='object-cover absolute top-2 right-5'
        />
      </Card>
      <Card data-aos='fade-up' className='hidden xl:block xl:w-[30%] relative'>
        <h1 className='font-medium text-[15px]  leading-[18px] text-white'>
          How it works
        </h1>
        <p className='leading-[15px] font-normal text-[13px]  text-white-1 mt-[20px]'>
          The deeper the liquidity (TVL), the lower the slippage a pool will
          offer. LPs get MONI emissions, while veMONI lockers get the pool
          trading fees as an incentive to vote on the most productive pools.
        </p>

        <Link
          href={'/'}
          className='underline  absolute bottom-[28px] font-normal leading-[15px] mt-14 text-white-1 flex items-center'
        >
          Read More <QuestionIcon className='w-[11px] h-[11px] ml-2' />
        </Link>
      </Card>
    </div>
  </section>
)
