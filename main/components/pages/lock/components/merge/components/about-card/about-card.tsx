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

    <p className='text-[17px]  mt-[53px] font-medium leading-[20.57px]'>
      Important! Merging will reset any rewards and rebases!
    </p>

    <p className='text-[15.1px] mt-[21px]  font-normal leading-[18.27px]'>
      Before continuing, please make sure you have reviewed and{' '}
      <Link href='/' className='underline'>
        claimed all available rewards.
      </Link>
    </p>

    <Button
      onClick={() => setStep('merge')}
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
