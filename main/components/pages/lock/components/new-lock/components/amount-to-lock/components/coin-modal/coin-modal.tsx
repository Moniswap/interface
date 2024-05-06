import { Avatar, Input, Modal } from '@/components/common'
import { Props } from './types'
import { COINS } from '@/constants'
import { SelectCoinValue } from '@/components/common/select-coin/types'

export const CoinModal = ({ open, close, onChange }: Props) => {
  const handleChange = (coin: SelectCoinValue) => {
    if (onChange) {
      onChange(coin)
      close()
    }
  }
  return (
    <Modal open={open} close={close}>
      <Input type='search' placeholder='WETH, USDC, 0x...' />
      <div className='flex px-4 border-b border-b-black-9 justify-between w-full pt-[17px] pb-[19px] '>
        <p className='text-[13px] leading-[15px] font-normal  text-black-4'>
          85 Tokens
        </p>
        <p className='text-[13px] leading-[15px] font-normal  text-black-4'>
          Balance
        </p>
      </div>
      <div className='max-h-[320px] mt-[20px] overflow-y-auto flex flex-col gap-[19px] pl-1'>
        {COINS.map((coin, index) => (
          <div
            key={index}
            onClick={() =>
              handleChange({
                icon: coin.image,
                label: coin.title,
                value: Number(coin.count),
              })
            }
            className='flex gap-3 items-center cursor-pointer pr-2'
          >
            <Avatar src={coin.image} name={coin.title} size='xl' />
            <div className='w-full'>
              <div className='flex w-full justify-between'>
                <h2 className='font-bold text-[15px] leadin-[18px]  text-white'>
                  {coin.title}
                </h2>
                <h2 className='font-bold text-[15px] leadin-[18px]  text-white'>
                  {coin.count}
                </h2>
              </div>
              <div className='flex w-full mt-[11px] justify-between'>
                <p className='text-black-4  font-medium text-[13px]'>
                  {coin.subtitle}
                </p>
                <p className='text-black-4  font-medium text-[13px]'>
                  {coin.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Modal>
  )
}
