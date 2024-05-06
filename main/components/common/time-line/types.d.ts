import { ReactNode } from 'react'

export type TimeLine = {
  label: ReactNode | string
  subChild?: ReactNode
  icon?: ReactNode
  finishLabel?: ReactNode
}

export type Props = {
  timeLines: TimeLine[]
  active?: number
  className?: string
}
