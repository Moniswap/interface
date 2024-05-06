export type SelectCoinValue = {
  label?: string
  icon?: string
  value?: number
}

export type Props = {
  className?: string
  value?: SelectCoinValue
  onClick?: () => void
  resultValueclassName?: string
  onChange?: (value: SelectCoinValue) => void
}
