import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lock | Swap your favorite tokens on Berachain",
  description: "Lock your favorite tokens on Berachain",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
