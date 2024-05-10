import Image from 'next/image'

export const HowItWork = () => (
  <section className='w-full pt-[99px] xl:pt-[166px]'>
    <div className='container w-full'>
      <h1 className='text-center font-medium leading-[48px] text-[30px] xl:text-[40px]  text-white'>
        How It Works
      </h1>
      <p className='text-white-1 font-normal leading-[15.73px] xl:leading-[18.15px] text-[13px] xl:text-[15px]  text-center mt-10'>
        Crafted to incentivize contributors fostering the sustainable expansion
        of the protocol.
      </p>
      <div className='flex w-full justify-center'>
        <Image
          src='/images/how_it_works.svg'
          width={700}
          height={500}
          alt='How it works'
          className='mt-[83px] text-center'
        />
      </div>
    </div>
  </section>
)
