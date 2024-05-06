import { cn } from "@/lib/utils";
import { IconProps } from "./types";

export const Icon = ({ className, viewBox, children }: IconProps) => (
  <svg
    viewBox={viewBox || "0 0 20 20"}
    fill="none"
    className={cn("w-5 h-5", className)}
  >
    {children}
  </svg>
);
