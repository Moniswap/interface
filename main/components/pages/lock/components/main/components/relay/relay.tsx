import { QuestionIcon } from '@/icons'
import { RelayItem } from './components'
import { Props } from './types'

export const Relay = ({ setLocks }: Props) => (
  <div className='mt-[100px]'>
    <h1 className='text-3xl mb-10 text-white  font-medium gap-1 leading-[36.31px] items-center flex'>
      Relay <QuestionIcon />
    </h1>
    <div className='flex pb-4 flex-col gap-4'>
      {new Array(10).fill(1).map((_, index) => (
        <RelayItem onClick={() => setLocks(true)} key={index} />
      ))}
    </div>
  </div>
)
