import { ReactNode } from 'react'

export type Props = {
  open: boolean
  close: () => void
  children: ReactNode
  className?: string
  hideCloseButton?: boolean
}
