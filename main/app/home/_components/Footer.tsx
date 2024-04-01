import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaXTwitter, FaMedium } from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";
import { RxDiscordLogo } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="w-full p-20 border-t-[1px] border-[rgba(64,59,59,1)] rounded-t-[70px]">
        <div className="w-full mx-[20px] flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col order-1 md:order-none my-10 md:my-0 justify-center md:justify-start text-center md:text-left md:items-start items-center ">
            <Image src="/images/logo.png" width={150} height={60} alt="logo" />
            <div className="md:py-20">
              <h1 className="uppercase mb-2">Audited by</h1>
              <Image src="/images/certik.png" width={150} height={60} alt="logo" />
            </div>
          </div>
          <div className="flex flex-col newsletter">
            <div className="flex items-center justify-center flex-col text-center md:text-left">
              <h1 className="text-white text-[14px] md:text-[15px] uppercase italic">Don&apos;t miss the good news</h1>
              <h1 className="text-white text-[25px] md:text-[30px] italic">Subscribe to Our Newsletter</h1>
            </div>
            <div className="py-10 gap-5 flex">
              <input
                type="text"
                name=""
                id=""
                placeholder="you@email.com"
                className="rounded-[20px] bg-[rgba(122,122,122,1)] outline-none border px-3 border-[rgba(64,59,59,1)]"
              />
              <button className="btn outline-none border-0 text-white text-sm font-[400] bg-gradient-to-br from-yellow-400 to-orange-500 h-10 min-h-10 rounded-[20px]">
                Subscribe
              </button>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <h1 className="text-white text-[16px] italic">Company</h1>
                <ul className="text-sm mt-2">
                  <li className="pb-2 text-sm italic">
                    <Link href="/">About Moniswap</Link>
                  </li>
                  <li className="pb-2 text-sm italic">
                    <Link href="/">Documentation</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="text-white text-[16px] italic">Project &amp; Developers</h1>
                <ul className="text-sm mt-2">
                  <li className="pb-2 text-sm italic">
                    <Link href="/">Submit your Project</Link>
                  </li>
                  <li className="pb-2 text-sm italic">
                    <Link href="/">Partner</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="order-2 md:order-none">
            <div className="rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 p-5 w-[100px] h-[100px] flex items-center justify-center text-center flex-col text-[12px] text-white my-5 leading-tight">
              <Image src="/images/plane.png" width={20} height={20} alt="swap" />
              <p className="text-[12px]">Swap</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-10 flex-col-reverse md:flex-row">
          <div className="flex">
            <h1 className="text-sm italic">Copyright &copy; 2024 Moniswap. All rights reserved.</h1>
          </div>
          <div className="flex gap-4 items-center mb-5 md:m-0">
            <span className="bg-[rgba(64,59,59,0.3)] p-3 rounded-[5px]">
              <PiTelegramLogo className="w-[25px] h-[25px]" />
            </span>
            <span className="bg-[rgba(64,59,59,0.3)] p-3 rounded-[5px]">
              <FaXTwitter className="w-[25px] h-[25px]" />
            </span>
            <span className="bg-[rgba(64,59,59,0.3)] p-3 rounded-[5px]">
              <RxDiscordLogo className="w-[25px] h-[25px]" />
            </span>
            <span className="bg-[rgba(64,59,59,0.3)] p-3 rounded-[5px]">
              <FaGithub className="w-[25px] h-[25px]" />
            </span>
            <span className="bg-[rgba(64,59,59,0.3)] p-3 rounded-[5px]">
              <FaMedium className="w-[25px] h-[25px]" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
