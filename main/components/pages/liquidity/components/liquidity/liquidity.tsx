import { Hero, LiquidityPools } from "./components";
import { Props } from "./types";

export const Liquidity = ({ setPathRoute }: Props) => (
  <>
    <Hero setPathRoute={setPathRoute} />
    <LiquidityPools />
  </>
);
