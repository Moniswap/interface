import { Card, Notifaction, Select } from '@/components/common'
import { WarningIcon } from '@/icons/warning'

export const MergeCard = () => {
  return (
    <Card data-aos='fade-up' className='w-full xl:w-[60%]'>
      <h3 className='text-[15.1px]  text-white font-medium leading-[18.27px]'>
        Select the Lock you want to merge
      </h3>

      <Select
        options={[
          { label: 'Coin 1', value: '1' },
          { label: 'Coin 2', value: '2' },
        ]}
      />

      <p className='flex items-center gap-x-[9px] my-[18px] text-[#7D7D7D]'>
        <WarningIcon className='w-3.5 h-3.5' /> Merging an Auto Max-Lock is not
        allowed.
      </p>

      <div className='pt-[27px] border-t border-t-[#2B2B2B] '>
        <p className=' text-[15.1px]  font-medium leading-[18.27px] text-white'>
          Merging into Lock 12337
        </p>
        <p className='text-[#CFCFCF] my-[19px]'>
          35.41 <span className='text-[#CFCFCF]'>MONI</span> locked for 12 hours
        </p>
        <p className='text-[#CFCFCF]'>
          0.01238  <span className='text-[#CFCFCF]'>veMONI</span> voting power
          granted
        </p>
      </div>
      <div className='pt-[37px]'>
        <Notifaction title='Merging two locks will inherit the longest lock time of the two and will increase the final Lock voting power by adding up the two underlying locked amounts based on the new lock time.' />
      </div>
    </Card>
  )
}
