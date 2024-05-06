import { cn } from "@/lib/utils";
import { Props } from "./types";

export const IconButton = ({ className, onClick, icon }: Props) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "p-4 text-white rounded-[10px] bg-black-2 transition-all hover:bg-orange-1",
        className
      )}
    >
      {icon}
    </button>
  );
};
