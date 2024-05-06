import {
  HoverCardContent,
  HoverCardTrigger,
  HoverCard as HoverCardUI,
} from "@/components/ui/hover-card";
import { Props } from "./types";
import { cn } from "@/lib/utils";

export const HoverCard = ({ hoverElement, content, className }: Props) => (
  <HoverCardUI openDelay={50} closeDelay={50}>
    <HoverCardTrigger asChild>{hoverElement}</HoverCardTrigger>
    <HoverCardContent className={cn("w-80", className)}>
      {content}
    </HoverCardContent>
  </HoverCardUI>
);
