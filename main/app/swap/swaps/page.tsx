import Image from "next/image";
import React from "react";
import { FiChevronDown } from "react-icons/fi";

function page() {
  return (
    <>
      <div className="w-full text-white">
        <div className="flex mx-auto w-[90%] md:w-2/3  my-20 gap-6 flex-col pb-20 md:flex-row md:mb-0 ">
          <div className="flex w-full md:w-1/2 bg-[--border] p-[20px] rounded-[10px] flex-col">
            <div className="w-full flex justify-between items-center">
              <span className="text-sm italic text-[--inverted-text]">
                <h1>Swap</h1>
              </span>
              <span className="text-sm italic text-[--inverted-text]">
                <h1>Available 0.0 MONI</h1>
              </span>
            </div>
            <div className="flex w-full my-3 items-center text-[--inverted-text]">
              <div className="flex items-center gap-3  border border-[--border-bg] px-5 py-6 rounded-l-[10px] h-8 w-1/2">
                <span>
                  <Image src="/images/moni.png" width={25} height={25} alt="Moniswap logo" />
                </span>
                <span className="flex items-center gap-3 italic uppercase">
                  Moni <FiChevronDown />
                </span>
              </div>
              <div className="flex items-center gap-3  border border-[--border-bg] px-5 py-6 rounded-r-[10px] h-8 border-l-0 w-1/2">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="0.0"
                  className="bg-transparent outline-none border-0 text-[--inverted-text] italic text-sm w-full"
                />
              </div>
            </div>
            <div className="w-full flex my-10">
              <div className="border border-[--border-bg] w-full relative">
                <span className="bg-[rgba(71,71,63,1)] p-2 rounded-full absolute -top-5 right-[45%] flex items-center h-8 w-8 justify-center text-center">
                  <Image src="/images/swap_arrow.png" width={15} height={15} alt="swap" />
                </span>
              </div>
            </div>
            <div className="flex w-full my-2 items-center text-[--inverted-text]">
              <div className="flex items-center gap-3  border border-[--border-bg] px-5 py-6 rounded-l-[10px] h-8 w-1/2">
                <span>
                  <Image src="/images/ethereum.png" width={25} height={25} alt="Moniswap logo" />
                </span>
                <span className="flex items-center gap-3 italic uppercase">
                  usdc <FiChevronDown />
                </span>
              </div>
              <div className="flex items-center gap-3  border border-[--border-bg] px-5 py-6 rounded-r-[10px] h-8 border-l-0 w-1/2">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="0.0"
                  className="bg-transparent outline-none border-0 text-[--inverted-text] italic text-sm w-full"
                />
              </div>
            </div>
          </div>
          <div className="flex w-full md:w-1/2 bg-[--border] p-[20px] rounded-[10px] flex-col">
            <div className="w-full flex justify-between h-8 items-center">
              <span className="text-sm italic text-[--inverted-text]">
                <h1>Swap</h1>
              </span>
              <span className="text-sm italic text-[--inverted-text]">
                <Image src="/images/bea.png" width={40} height={30} alt="Bea" />
              </span>
            </div>
            <div className="flex w-full">
              <ul className="list-outside px-5 text-[--inverted-text] text-sm italic my-2">
                <li className="h-20">
                  <span>Start by selecting the token to Swap from and the amount you want to exchange.</span>
                </li>
                <li className="h-20">
                  <span>Pick the token you want to exchange For.</span>
                </li>
                <li className="h-20">
                  <span>The quote will be ready in a moment!</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
