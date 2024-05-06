import { Props } from "./types";

export const Card = ({ children }: Props) => (
  <div className="px-[18px] pb-[20px] pt-[10px] bg-[#161515] rounded-xl">
    {children}
  </div>
);
