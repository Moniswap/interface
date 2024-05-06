import { SelectCoinValue } from "@/components/common/select-coin/types";

export type Props = {
  open: boolean;
  close: () => void;
  onChange?: (value: SelectCoinValue) => void;
};
