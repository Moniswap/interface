/* eslint-disable react/no-unescaped-entities */
import { Button, Card } from '@/components/common'
import Image from 'next/image'

type Props = {
  setStep: (step: 'about' | 'swap') => void
}

export const AboutCard = ({ setStep }: Props) => (
  <Card className='bg-orange pb-[28px] text-white relative'>
    <Image
      src='/images/bea.png'
      className='absolute top-[0px] right-[8px] '
      width={65}
      height={56}
      alt='logo'
    />
    <div className=' w-[87px] bg-[#FFD18B] h-[87px] flex justify-center items-center rounded-full'>
      <Image
        src='/images/incentives-about-card-logo.png'
        width={57}
        height={57}
        alt='incentives-about-card'
      />
    </div>
    <p className='text-[15.1px] mt-[19px]  font-medium leading-[18.27px]'>
      Incentives are usually provided by the protocols. By continuing with the
      next steps you acknowledge that you understand the mechanics of the
      protocol and that after depositing any rewards as incentives you won't be
      able to withdraw them.
    </p>
    <p className='text-[15.1px] mt-[17px]  font-medium leading-[18.27px]'>
      By providing an incentive, you may draw more liquidity providers. Votes
      are a decisive factor on how much emissions a liquidity pool will get next
      epoch. The more emissions are flowing to a liquidity pool, the more
      rewards for those who provide liquidity for the pool.
    </p>

    <Button
      onClick={() => setStep('swap')}
      className='bg-white mt-4 w-full text-black  text-[15px]  font-medium leading-[18.15px] text-center'
    >
      Continue
    </Button>
  </Card>
)
