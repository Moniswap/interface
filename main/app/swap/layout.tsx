import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import "@/i18n";
import NavigationBar from "@/ui/NavigationBar";
import OptionsBar from "@/ui/OptionsBar";
import AllContexts from "@/contexts/all";

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
      <body className={inter.className}>
        <AllContexts>
          <div className="min-h-screen w-full overflow-auto flex flex-col md:flex-row justify-start md:justify-between items-start bg-[#fefce9]">
            <div className="w-full md:w-1/5">
              <NavigationBar />
            </div>
            <div className="self-stretch px-1 md:px-5 overflow-hidden w-full md:w-[60%]">{children}</div>
            <div className="hidden md:block w-1/5">
              <OptionsBar />
            </div>
          </div>
        </AllContexts>
      </body>
    </html>
  );
}
