import { ReactNode } from "react";

export type Props = {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  src?: string;
  name: string;
  icon?: ReactNode;
};
