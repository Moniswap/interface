export type Props = {
  className?: string;
  placeholder?: string;
  type: "search" | "text";
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  baseClassName?: string;
};
