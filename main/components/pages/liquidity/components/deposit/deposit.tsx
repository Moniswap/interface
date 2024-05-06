import { SwapCard, TimeLineCard } from './components'
import { Props } from './types'

export const Deposit = ({ setPathRoute }: Props) => (
  <section>
    <div className='container flex flex-col  px-5 lg:px-8 xl:px-0  xl:flex-row gap-[27px] pb-16 pt-[167px] max-w-full  xl:max-w-[967px]'>
      <SwapCard setPathRoute={setPathRoute} />
      <TimeLineCard setPathRoute={setPathRoute} />
    </div>
  </section>
)
