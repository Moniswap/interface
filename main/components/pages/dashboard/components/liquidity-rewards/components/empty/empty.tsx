import Link from 'next/link'

export const Empty = () => (
  <div
    data-aos='fade-up'
    className='w-full mt-[46px] py-[53px] px-[34px] bg-[#1E1E1E] rounded-[12px]'
  >
    <p className='text-[13px]  text-[#CFCFCF] font-normal leading-[15.73px]'>
      Start by  liquidity.
      <Link href='/' className='text-orange underline'>
        depositing and staking
      </Link>{' '}
    </p>
  </div>
)
