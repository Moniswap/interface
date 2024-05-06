'use client'
import { useState } from 'react'
import { AboutCard, IncentivezeCard } from './components'

export const IncentiveCard = () => {
  const [step, setStep] = useState<'about' | 'swap'>('about')
  return (
    <div className='w-full xl:w-[40%]'>
      {step === 'about' && <AboutCard setStep={setStep} />}
      {step === 'swap' && <IncentivezeCard />}
    </div>
  )
}
