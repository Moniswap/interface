import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import "@/i18n";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "Moniswap | Swap your favorite tokens on Berachain",
  description: "Swap your favorite tokens on Berachain"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
