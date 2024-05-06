export type Opt = {
  label: string;
  value: string;
};

export type Props = {
  className?: string;
  options: Opt[];
  placeholder?: string;
  onChange?: (val: string) => void;
};
