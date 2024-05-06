import { Button, Card } from '@/components/common'
import { Props } from './types'
import Image from 'next/image'
import { BearIcon2 } from '@/icons'
import Link from 'next/link'

export const AboutCard = ({ setStep }: Props) => (
  <Card
    data-aos='fade-up'
    className='bg-[#FABD61] text-white w-full xl:w-[40%] relative'
  >
    <div className='w-[143px] h-[143px] rounded-full bg-[#FFD18B] flex justify-center items-center'>
      <BearIcon2 className='w-[85px] h-[85px]' />
    </div>
    <p className='text-[15.1px] mt-[21px]  font-normal leading-[18.27px]'>
      Transferring a lock will also transfer any rewards and rebases! Before
      continuing, please make sure you have 
      <Link href='/' className='underline'>
        claimed all available rewards.
      </Link>
    </p>

    <Button
      onClick={() => setStep('transfer')}
      className='bg-white mt-[22px] w-full py-[18px] text-black text-[15px]  font-medium leading-[18.15px]'
    >
      Continue
    </Button>
    <Image
      className='absolute top-[7px] right-[8px]'
      src='/images/bea.png'
      width={64}
      height={54}
      alt='logo'
    />
  </Card>
)
