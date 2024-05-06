import { ReactNode } from "react";

export type opt = {
  label: string;
  path: string;
};

export type Props = {
  options: opt[];
  children: ReactNode;
};
