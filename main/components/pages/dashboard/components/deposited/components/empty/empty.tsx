import Link from 'next/link'

export const Empty = () => (
  <div className='w-full py-[53px] px-[34px] bg-[#1E1E1E] rounded-[12px]'>
    <p className='text-[13px]  text-[#CFCFCF] font-normal leading-[15.73px]'>
      To receive emissions{' '}
      <Link href='/' className='text-orange underline'>
        deposit and stake
      </Link>{' '}
      your liquidity first.
    </p>
  </div>
)
