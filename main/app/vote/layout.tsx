import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Vote | Voters earn a share of transaction fees and incentives for helping govern how emissions are distributed.",
  description:
    "Voters earn a share of transaction fees and incentives for helping govern how emissions are distributed.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
