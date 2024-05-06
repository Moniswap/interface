import { useMemo } from "react";
import { Props } from "./types";
import { cn } from "@/lib/utils";

export const Avatar = ({ name, size, src, className, icon }: Props) => {
  const avatarSize = useMemo(() => {
    switch (size) {
      case "xl":
        return "w-[45px] h-[45px]";
      case "lg":
        return "w-10 h-10";
      case "md":
        return "w-[35px] h-[35px]";
      case "sm":
        return "25px";
      default:
        return "w-10 h-10";
    }
  }, [size]);

  return (
    <div
      className={cn(
        avatarSize,
        `overflow-hidden rounded-full flex justify-center items-center bg-[#D9D9D9] ${!src ? "bg-[#D9D9D9]" : ""} `,
        className
      )}
    >
      {src ? (
        <img className="w-full h-full object-cover" src={src} alt={name} />
      ) : (
        icon
      )}
    </div>
  );
};
