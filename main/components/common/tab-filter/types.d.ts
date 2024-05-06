export type Tab = {
  label: string
  value: string
}

export type Props = {
  tabs: Tab[]
  name: string
  className?: string
  onChange?: (value: string) => void
  value?: string
}
