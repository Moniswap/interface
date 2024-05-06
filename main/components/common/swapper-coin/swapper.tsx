"use client";
import { SwapIcon } from "@/icons";
import { IconButton } from "../icon-button";
import { Props } from "./types";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const SwapperCoin = ({ className, onClick }: Props) => {
  const [rotate, setRotate] = useState(false);

  const handleRotate = () => {
    setRotate((prev) => !prev);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={cn("w-full relative", className)}>
      <div className="w-full h-[1px] bg-black-9"></div>
      <IconButton
        onClick={handleRotate}
        icon={
          <SwapIcon
            className={`w-4 duration-300 transition-all ${rotate ? "rotate-180" : "rotate-0"}`}
          />
        }
        className="py-[6px] px-[7px] rounded-[10px] absolute right-1/2 top-1/2 -translate-y-1/2"
      />
    </div>
  );
};
