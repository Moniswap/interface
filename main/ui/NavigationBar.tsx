"use client";

import Image from "next/image";
import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import { LuDoorOpen, LuVote, LuWallet } from "react-icons/lu";
import { RiTokenSwapLine } from "react-icons/ri";
import { GrOverview } from "react-icons/gr";
import { FaDroplet, FaGithub, FaRegComment, FaXTwitter } from "react-icons/fa6";
import { FiLock } from "react-icons/fi";
import { BiCoinStack, BiLogoDiscordAlt } from "react-icons/bi";
import { PiRocketLaunchLight } from "react-icons/pi";
import { TfiGallery } from "react-icons/tfi";
import { FaTelegramPlane } from "react-icons/fa";
import { __CHAIN_IDS__, __CHAIN_INFO__, __STRINGS__ } from "@/constants";
import { useChainId } from "wagmi";
import { useTranslation } from "react-i18next";

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
  const chainId = useChainId();
  const chainInfo = useMemo(() => __CHAIN_INFO__[chainId ?? __CHAIN_IDS__.bera_testnet], [chainId]);
  const { t } = useTranslation();
  return (
    <div className="w-full md:min-h-screen md:border border-[#c6c6c6] flex flex-row md:flex-col justify-between md:justify-start items-start md:items-center px-2 md:px-5 py-2 md:py-5 gap-6">
      <div className="flex flex-col gap-[1px] w-full">
        <div className="flex justify-start items-center gap-4">
          <Image src="/images/logo.svg" alt="logo" height={55} width={55} />
          <span className="md:text-4xl text-3xl uppercase font-[600]">{__STRINGS__.app_title}</span>
        </div>
        <span className="capitalize hidden md:block text-right text-[#bab300] text-xs md:text-lg font-[400]">
          {chainInfo.isTestnet ? __STRINGS__.__networks__.testnet : __STRINGS__.__networks__.mainnet}
        </span>
      </div>
      <button className="w-full flex justify-start items-center gap-3 bg-[#e7e2b6] capitalize px-2 py-2 rounded-[5px] btn border-none">
        <LuWallet size={27} />
        <span className="capitalize font-[400] md:text-lg text-center">
          {t(__STRINGS__.__actions__.connect_wallet)}
        </span>
      </button>
      <ul className="menu menu-lg min-w-full px-0">
        <li>
          <ActiveLink href="/swap">
            <RiTokenSwapLine size={27} />
            <span className="capitalize">{t(__STRINGS__.__link_titles__.swap)}</span>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/overview">
            <GrOverview size={27} />
            <span className="capitalize">{t(__STRINGS__.__link_titles__.overview)}</span>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/pools">
            <FaDroplet size={27} />
            <span className="capitalize">{t(__STRINGS__.__link_titles__.pools)}</span>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/vote">
            <LuVote size={27} />
            <span className="capitalize">{t(__STRINGS__.__link_titles__.vote)}</span>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/lock">
            <FiLock size={27} />
            <span className="capitalize">{t(__STRINGS__.__link_titles__.lock)}</span>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/incentivize">
            <BiCoinStack size={27} />
            <span className="capitalize">{t(__STRINGS__.__link_titles__.incentivize)}</span>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/launchpad">
            <PiRocketLaunchLight size={27} />
            <span className="capitalize">{t(__STRINGS__.__link_titles__.launchpad)}</span>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/early-access">
            <LuDoorOpen size={27} />
            <span className="capitalize">{t(__STRINGS__.__link_titles__.early_access)}</span>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/nfts">
            <TfiGallery size={27} />
            <span className="capitalize">{t(__STRINGS__.__link_titles__.nfts)}</span>
          </ActiveLink>
        </li>
      </ul>
      <div className="flex flex-col justify-start items-start gap-4 w-full">
        <span className="text-sm md:text-lg font-[400] text-[#9a9888]">{__STRINGS__.__misc__.v}</span>
        <div className="flex justify-start items-start gap-2 w-full">
          <span className="text-sm md:text-lg font-[400] text-[#9a9888] capitalize">
            {t(__STRINGS__.__actions__.provide_feedback)}
          </span>
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
