"use client";

import Image from "next/image";
import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { LuDoorOpen, LuVote, LuWallet } from "react-icons/lu";
import { RiTokenSwapLine } from "react-icons/ri";
import { GrOverview } from "react-icons/gr";
import { FaDroplet, FaGithub, FaRegComment, FaXTwitter } from "react-icons/fa6";
import { FiLock } from "react-icons/fi";
import { BiCoinStack, BiLogoDiscordAlt } from "react-icons/bi";
import { PiRocketLaunchLight } from "react-icons/pi";
import { TfiGallery } from "react-icons/tfi";
import { FaTelegramPlane } from "react-icons/fa";

const ActiveLink: React.FC<LinkProps & { children: any }> = ({ href, children, ...props }) => {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      href={href}
      className={`flex justify-start rounded-[5px] w-full items-center gap-3 px-2 py-2 ${
        pathname.startsWith(href.toString()) ? "bg-[#fff8b9] font-[500]" : "transparent font-[400]"
      }`}
    >
      {children}
    </Link>
  );
};

function NavigationBar() {
  return (
    <div className="w-full md:min-h-screen md:border border-[#c6c6c6] flex flex-row md:flex-col justify-between md:justify-start items-start md:items-center px-2 md:px-5 py-2 md:py-5 gap-6">
      <div className="flex flex-col gap-[1px] w-full">
        <div className="flex justify-start items-center gap-4">
          <Image src="/images/logo.svg" alt="logo" height={55} width={55} />
          <span className="md:text-4xl text-lg uppercase font-[600]">moniswap</span>
        </div>
        <span className="capitalize hidden md:block text-right text-[#bab300] text-xs md:text-lg font-[400]">
          testnet
        </span>
      </div>
      <button className="w-full flex justify-start items-center gap-3 bg-[#e7e2b6] capitalize px-2 py-2 rounded-[5px] btn border-none">
        <LuWallet size={27} />
        <span className="capitalize font-[400] md:text-xl text-center">connect wallet</span>
      </button>
      <ul className="menu menu-lg min-w-full px-0">
        <li>
          <ActiveLink href="/swap">
            <RiTokenSwapLine size={27} />
            <span className="capitalize">swap</span>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/overview">
            <GrOverview size={27} />
            <span className="capitalize">overview</span>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/pools">
            <FaDroplet size={27} />
            <span className="capitalize">pools</span>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/vote">
            <LuVote size={27} />
            <span className="capitalize">vote</span>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/lock">
            <FiLock size={27} />
            <span className="capitalize">lock</span>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/incentivize">
            <BiCoinStack size={27} />
            <span className="capitalize">incentivize</span>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/launchpad">
            <PiRocketLaunchLight size={27} />
            <span className="capitalize">launchpad</span>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/early-access">
            <LuDoorOpen size={27} />
            <span className="capitalize">early access</span>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/nfts">
            <TfiGallery size={27} />
            <span className="capitalize">NFTs</span>
          </ActiveLink>
        </li>
      </ul>
      <div className="flex flex-col justify-start items-start gap-4 w-full">
        <span className="text-sm md:text-lg font-[400] text-[#9a9888]">Moniswap v1.0.0</span>
        <div className="flex justify-start items-start gap-2 w-full">
          <span className="text-sm md:text-lg font-[400] text-[#9a9888] capitalize">provide feedback</span>
          <a href="#" className="btn btn-ghost btn-xs text-center flex justify-center items-center">
            <FaRegComment size={20} />
          </a>
        </div>
        <div className="flex justify-start items-center w-full gap-3">
          <a
            target="_blank"
            href="https://t.me/Moniswap_Xyz"
            className="rounded-[5px] btn btn-ghost btn-square btn-md bg-[#e7e2b6] flex text-center justify-center items-center"
          >
            <FaTelegramPlane size={20} />
          </a>
          <a
            target="_blank"
            href="https://twitter.com/Moniswap_"
            className="rounded-[5px] btn btn-ghost btn-square btn-md bg-[#e7e2b6] flex text-center justify-center items-center"
          >
            <FaXTwitter size={20} />
          </a>
          <a
            target="_blank"
            href="https://discord.gg/SVjPB28n5y"
            className="rounded-[5px] btn btn-ghost btn-square btn-md bg-[#e7e2b6] flex text-center justify-center items-center"
          >
            <BiLogoDiscordAlt size={20} />
          </a>
          <a
            target="_blank"
            href="https://github.com/Moniswap"
            className="rounded-[5px] btn btn-ghost btn-square btn-md bg-[#e7e2b6] flex text-center justify-center items-center"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
