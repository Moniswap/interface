import { ReactNode } from "react";

export type Props = {
  className?: string;
  children?: ReactNode;
  theme?: "orange" | "dark-orange" | "white" | "dark";
  variant?: "default" | "circle";
  icon?: ReactNode;
  onClick?: () => void;
  rightIcon?: ReactNode;
};
