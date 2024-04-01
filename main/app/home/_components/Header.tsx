"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiArrowDown, FiChevronDown, FiChevronUp, FiX } from "react-icons/fi";
import { RiMenu3Fill } from "react-icons/ri";

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [swapArrow, SetSwapArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      const triggerHeight = 100; // Set your desired scroll height here

      setIsFixed(scrollHeight > triggerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openNavDrawer = () => {
    setClicked(!clicked);
  };
  const swap = () => {
    SetSwapArrow(!swapArrow);
  };

  return (
    <>
      <div className="w-full relative">
        <div className={`flex h-[70px] md:h-[70px] ${isFixed ? " bg-[#000] fixed top-0 z-50 w-full" : ""} `}>
          <div className="w-full mx-[20px] flex items-center justify-between border-[rgba(43,43,43,1)]  border-b-2">
            <div className="flex">
              <Image src="/images/logo.png" width={150} height={60} alt="logo" className="hidden md:flex" />
              <Image src="/images/md_logo.png" width={40} height={40} alt="logo" className="flex md:hidden" />
            </div>
            <div className="flex items-center justify-center w-1/2">
              <ul className="md:flex gap-8 text-sm font-[400] justify-around w-full hidden items-center">
                <li>
                  <Link href="/">Swap</Link>
                </li>
                <li>
                  <Link href="/">Dashboard</Link>
                </li>
                <li>
                  <Link href="/">Liquidity</Link>
                </li>
                <li>
                  <Link href="/">Vote</Link>
                </li>
                <li>
                  <div className="dropdown">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn m-1 outline-none h-fit border-0"
                      onClick={() => swap()}
                    >
                      More {swapArrow ? <FiChevronDown /> : <FiChevronUp />}
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-52">
                      <li className="p-[4px] rounded-[15px] bg-[--border] border-l-[--border-left-bg] border-l-[15px] my-[2px] cursor-pointer hover:bg-[--border-left-bg-hover] transition-all delay-75 hover:text-[--border-left-active-bg]">
                        <Link href="/">Incentives</Link>
                      </li>
                      <li className="p-[4px] rounded-[15px] bg-[--border] border-l-[--border-left-bg] border-l-[15px] my-[2px] cursor-pointer hover:bg-[--border-left-bg-hover] transition-all delay-75 hover:text-[--border-left-active-bg]">
                        <Link href="/">Launchpad</Link>
                      </li>
                      <li className="p-[4px] rounded-[15px] bg-[--border] border-l-[--border-left-bg] border-l-[15px] my-[2px] cursor-pointer hover:bg-[--border-left-bg-hover] transition-all delay-75 hover:text-[--border-left-active-bg]">
                        <Link href="/">Seekers</Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-full p-2">
                <Image
                  src="/images/cat.png"
                  width={20}
                  height={20}
                  alt="cat"
                  className="object-cover h-50 w-[20px] md:w-[20px]"
                />
              </div>
              <button className="btn outline-none border-0 text-white text-sm font-[400] bg-gradient-to-br from-yellow-400 to-orange-500 h-10 min-h-10 rounded-md">
                connect
              </button>
              {clicked ? (
                <FiX
                  className="text-[38px] font-[400] bg-[rgba(30,30,30,1)] rounded-[5px] p-[2px] cursor-pointer md:hidden flex text-white transition-all delay-75"
                  onClick={() => openNavDrawer()}
                />
              ) : (
                <RiMenu3Fill
                  className="text-[38px] font-[400] bg-transperent rounded-[5px] p-[2px] cursor-pointer md:hidden flex transition-all delay-75"
                  onClick={() => openNavDrawer()}
                />
              )}
            </div>
          </div>
        </div>
        {clicked && (
          <div
            className={`flex md:hidden fixed top-[70px] bottom-0 h-screen bg-[#000] w-full z-50 transiton-all delay-75`}
          >
            <div className="w-[90%]  my-10 mx-auto">
              <ul>
                <li className="p-3 rounded-[15px] bg-[--border] border-l-[--border-left-active-bg] border-l-[15px] my-2 cursor-pointer hover:bg-[--border-left-bg-hover] transition-all delay-75 hover:text-[--border-left-active-bg]">
                  <Link href="/">Swap</Link>
                </li>
                <li className="p-3 rounded-[15px] bg-[--border] border-l-[--border-left-bg] border-l-[15px] my-2 cursor-pointer hover:bg-[--border-left-bg-hover] transition-all delay-75 hover:text-[--border-left-active-bg]">
                  <Link href="/">Dashboard</Link>
                </li>
                <li className="p-3 rounded-[15px] bg-[--border] border-l-[--border-left-bg] border-l-[15px] my-2 cursor-pointer hover:bg-[--border-left-bg-hover] transition-all delay-75 hover:text-[--border-left-active-bg]">
                  <Link href="/">Liquidity</Link>
                </li>
                <li className="p-3 rounded-[15px] bg-[--border] border-l-[--border-left-bg] border-l-[15px] my-2 cursor-pointer hover:bg-[--border-left-bg-hover] transition-all delay-75 hover:text-[--border-left-active-bg]">
                  <Link href="/">Vote</Link>
                </li>
                <li className="p-3 rounded-[15px] bg-[--border] border-l-[--border-left-bg] border-l-[15px] my-2 cursor-pointer hover:bg-[--border-left-bg-hover] transition-all delay-75 hover:text-[--border-left-active-bg]">
                  <Link href="/">Lock</Link>
                </li>
                <li className="p-3 rounded-[15px] bg-[--border] border-l-[--border-left-bg] border-l-[15px] my-2 cursor-pointer hover:bg-[--border-left-bg-hover] transition-all delay-75 hover:text-[--border-left-active-bg]">
                  <Link href="/">Incentives</Link>
                </li>
                <li className="p-3 rounded-[15px] bg-[--border] border-l-[--border-left-bg] border-l-[15px] my-2 cursor-pointer hover:bg-[--border-left-bg-hover] transition-all delay-75 hover:text-[--border-left-active-bg]">
                  <Link href="/">Launchpad</Link>
                </li>
                <li className="p-3 rounded-[15px] bg-[--border] border-l-[--border-left-bg] border-l-[15px] my-2 cursor-pointer hover:bg-[--border-left-bg-hover] transition-all delay-75 hover:text-[--border-left-active-bg]">
                  <Link href="/">Seekers</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
