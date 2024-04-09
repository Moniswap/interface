import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/i18n";
import AllContexts from "@/contexts/all";
import Header from "@/ui/Header";
import Footer from "@/ui/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "Moniswap",
  description: "BERA PACKS WHITELIST MINT REGISTRATION"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className={inter.className}>
        <AllContexts>
          <div className="min-h-screen w-screen overflow-x-hidden flex flex-col justify-start items-center gap-5 bg-[#000004]">
            <Header />
            <div className="self-stretch overflow-auto mt-auto">{children}</div>
            <Footer />
          </div>
        </AllContexts>
      </body>
    </html>
  );
}
