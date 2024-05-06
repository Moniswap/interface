import { IconButton } from "@/components/common";
import { CgMenuRightAlt } from "react-icons/cg";
import { Props } from "./types";

export const Menu = ({ onClick }: Props) => (
  <div className="block xl:hidden">
    <IconButton
      icon={<CgMenuRightAlt className="w-5 h-5" />}
      onClick={onClick}
      className="hover:bg-orange-1"
    />
  </div>
);
