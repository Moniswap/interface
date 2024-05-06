import { Icon } from '@/components/common'
import { IconProps } from '@/components/common/icon/types'

export const DoneIcon = (props: IconProps) => (
  <Icon viewBox='0 0 35 35' {...props}>
    <circle cx='17.5' cy='17.5' r='17.5' fill='url(#paint0_linear_83_1637)' />
    <path
      d='M14.2871 21.3441L10.1529 17.2099L8.75 18.6127L14.2871 24.1499L26.1843 12.2527L24.7814 10.8499L14.2871 21.3441Z'
      fill='white'
    />
    <defs>
      <linearGradient
        id='paint0_linear_83_1637'
        x1='17.5'
        y1='0'
        x2='17.5'
        y2='35'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#FFC979' />
        <stop offset='0.49' stop-color='#FF993C' />
        <stop offset='1' stop-color='#737373' />
      </linearGradient>
    </defs>
  </Icon>
)
