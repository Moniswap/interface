import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/i18n";
import NavigationBar from "@/ui/NavigationBar";
import OptionsBar from "@/ui/OptionsBar";
import AllContexts from "@/contexts/all";
import Header from "@/ui/Header";
import Footer from "@/ui/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AllContexts>
          <div className="min-h-screen w-full overflow-x-hidden flex flex-col justify-start items-center gap-5 bg-[#000004]">
            <Header />
            <div className="self-stretch overflow-auto">{children}</div>
            <Footer />
          </div>
        </AllContexts>
      </body>
    </html>
  );
}
