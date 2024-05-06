import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liquidity | Swap your favorite tokens on Berachain",
  description:
    "Liquidity Providers (LPs) make low-slippage swaps possible. Deposit and Stake liquidity to earn MONI.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
