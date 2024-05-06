"use client";
import { useState } from "react";
import { Deposit, Liquidity, StokeLiquidity, Withdraw } from "./components";

export const LiquidityPage = () => {
  const [pathRoute, setPathRoute] = useState<
    "liquidity" | "deposit" | "withdraw" | "stoke_liquidity"
  >("liquidity");

  switch (pathRoute) {
    case "deposit":
      return <Deposit setPathRoute={setPathRoute} />;
    case "withdraw":
      return <Withdraw />;
    case "liquidity":
      return <Liquidity setPathRoute={setPathRoute} />;
    case "stoke_liquidity":
      return <StokeLiquidity />;
  }
};
