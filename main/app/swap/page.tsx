"use client";

import { __STRINGS__ } from "@/constants";
import Image from "next/image";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { FiChevronDown, FiChevronsRight } from "react-icons/fi";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";

function Swap() {
  const { t } = useTranslation();
  const slippages = useMemo(() => [0.1, 0.5, 1], []);
  return (
    <div className="md:py-12 flex flex-col justify-start items-start w-full gap-10 min-h-screen">
      <div className="flex flex-col justify-start items-start w-full gap-3">
        <h3 className="capitalize text-[#000] font-[500] text-xl md:text-2xl">{t(__STRINGS__.__link_titles__.swap)}</h3>
        <span className="text-[#9a9888] font-[400] text-sm md:text-xl">{t(__STRINGS__.__headers__.call_to_swap)}</span>
      </div>

      <div className="flex flex-col justify-start items-start gap-5 w-full">
        <div className="flex flex-col w-full justify-start items-start gap-[0.8px]">
          <div className="w-full bg-[#fdf7c4] py-5 px-5 flex justify-between gap-3 rounded-tr-[5px] rounded-tl-[5px]">
            <button className="btn btn-ghost btn-lg flex justify-between gap-2 items-center w-1/3 self-stretch">
              <div className="flex justify-center items-center gap-4">
                <Image src="/images/ethereum.png" alt="ethereum" width={50} height={50} className="rounded-full" />
                <div className="flex flex-col justify-start items-start gap-1">
                  <span className="uppercase text-[#000] font-[400] text-lg md:text-xl">eth</span>
                  <span className="capitalize text-[#9a9888] font-[400] text0sm md:text-lg">balance: 0.00</span>
                </div>
              </div>
              <FiChevronDown size={20} />
            </button>

            <div className="flex flex-col justify-start items-end w-1/3 self-stretch">
              <input
                className="border-0 outline-none text-right text-[#000] text-2xl bg-transparent appearance-none"
                type="number"
                value={0.0}
              />
              <span className="capitalize text-[#9a9888] font-[400] text-sm md:text-lg">$9.00</span>
            </div>
          </div>

          <div className="w-full bg-[#fdf7c4] py-5 px-5 flex justify-start items-center">
            <div className="flex justify-start gap-7 items-center w-1/2 self-stretch px-6">
              <button className="btn btn-ghost btn-square btn-sm py-1">
                <HiOutlineArrowsUpDown size={20} />
              </button>
              <span className="uppercase text-[#47473f] text-lg font-[400]">1 moni = 0.00029 eth (~$1.00)</span>
            </div>
          </div>

          <div className="w-full bg-[#fdf7c4] py-5 px-5 flex justify-between gap-3 rounded-br-[5px] rounded-bl-[5px]">
            <button className="btn btn-ghost btn-lg flex justify-between gap-2 items-center w-1/3 self-stretch">
              <div className="flex justify-center items-center gap-4">
                <Image src="/images/moni.png" alt="ethereum" width={50} height={50} className="rounded-full" />
                <div className="flex flex-col justify-start items-start gap-1">
                  <span className="uppercase text-[#000] font-[400] text-lg md:text-xl">moni</span>
                  <span className="capitalize text-[#9a9888] font-[400] text0sm md:text-lg">balance: 0.00</span>
                </div>
              </div>
              <FiChevronDown size={20} />
            </button>

            <div className="flex flex-col justify-start items-end w-1/3 self-stretch">
              <input
                className="border-0 outline-none text-right text-[#000] text-2xl bg-transparent appearance-none"
                type="number"
                value={0.0}
              />
              <span className="capitalize text-[#9a9888] font-[400] text-sm md:text-lg">$9.00</span>
            </div>
          </div>
        </div>

        <div className="flex justify-start items-center w-full gap-3">
          <div className="w-[70%] flex justify-center items-center gap-[0.8px] self-stretch">
            <div className="w-1/2 bg-[#fdf7c4] px-5 py-3 rounded-tl-[5px] rounded-bl-[5px] flex flex-col justify-start items-start gap-2 self-stretch">
              <div className="w-full flex justify-between items-center gap-1">
                <span className="capitalize font-[400] text-lg text-[#9a9888]">min received:</span>
                <span className="uppercase font-[400] text-lg text-[#47473f]">7.005 moni</span>
              </div>
              <div className="w-full flex justify-between items-center gap-1">
                <span className="capitalize font-[400] text-lg text-[#9a9888]">price impact:</span>
                <span className="uppercase font-[400] text-lg text-[#6100ff]">0.003%</span>
              </div>
              <div className="w-full flex justify-between items-center gap-1">
                <span className="capitalize font-[400] text-lg text-[#9a9888]">fee:</span>
                <span className="uppercase font-[400] text-lg text-[#47473f]">0.005 eth</span>
              </div>
            </div>
            <div className="w-1/2 bg-[#fdf7c4] px-3 py-3 rounded-tr-[5px] rounded-br-[5px] flex flex-col justify-start items-start gap-[0.2px] self-stretch">
              <span className="capitalize font-[400] text-lg text-[#47473f]">liquidity routing</span>

              <ul className="timeline justify-start">
                <li>
                  <div className="timeline-middle">
                    <Image src="/images/ethereum.png" alt="ethereum" width={20} height={20} className="rounded-full" />
                  </div>
                  <div className="timeline-end w-6" />
                  <hr style={{ border: "none", borderTop: "2px dotted #9a9888" }} />
                </li>
                <li>
                  <hr style={{ border: "none", borderTop: "2px dotted #9a9888" }} />
                  <div className="timeline-start w-6" />
                  <div className="timeline-middle">
                    <div className="w-3 h-3 rounded-full bg-[#9a9888] flex justify-center items-center">
                      <FiChevronsRight color="#fff" size={10} />
                    </div>
                  </div>
                  <div className="timeline-end rounded-[5px] bg-[#fff] flex flex-col justify-center items-center text-center px-3 py-[2px]">
                    <span className="text-[#9a9888] font-[400] text-xs capitalize">1%</span>
                    <span className="text-[#9a9888] font-[400] text-xs capitalize">volatile</span>
                  </div>
                  <hr style={{ border: "none", borderTop: "2px dotted #9a9888" }} />
                </li>
                <li>
                  <hr style={{ border: "none", borderTop: "2px dotted #9a9888" }} />
                  <div className="timeline-start w-6" />
                  <div className="timeline-middle">
                    <Image src="/images/ethereum.png" alt="ethereum" width={20} height={20} className="rounded-full" />
                  </div>
                  <hr style={{ border: "none", borderTop: "2px dotted #9a9888" }} />
                </li>
                <li>
                  <hr style={{ border: "none", borderTop: "2px dotted #9a9888" }} />
                  <div className="timeline-start w-6" />
                  <div className="timeline-middle">
                    <div className="w-3 h-3 rounded-full bg-[#9a9888] flex justify-center items-center">
                      <FiChevronsRight color="#fff" size={10} />
                    </div>
                  </div>
                  <div className="timeline-end rounded-[5px] bg-[#fff] flex flex-col justify-center items-center text-center px-3 py-[2px]">
                    <span className="text-[#9a9888] font-[400] text-xs capitalize">0.3%</span>
                    <span className="text-[#9a9888] font-[400] text-xs capitalize">volatile</span>
                  </div>
                  <hr style={{ border: "none", borderTop: "2px dotted #9a9888" }} />
                </li>
                <li>
                  <hr style={{ border: "none", borderTop: "2px dotted #9a9888" }} />
                  <div className="timeline-start w-6" />
                  <div className="timeline-middle">
                    <Image src="/images/moni.png" alt="ethereum" width={20} height={20} className="rounded-full" />
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-[30%] flex flex-col justify-start items-start gap-3 self-stretch py-0">
            <details className="dropdown w-full">
              <summary className="m-1 btn btn-ghost btn-square btn-lg w-full flex justify-between items-center gap-3 bg-[#fdf7c4] capitalize px-2 py-2 rounded-[5px]">
                <span className="capitalize text-sm md:text-lg font-[400] text-[#47473f]">
                  {__STRINGS__.__actions__.slippage}
                </span>
                <BiChevronDown size={25} />
              </summary>
              <ul className="p-2 w-full dropdown-content menu rounded-[5px] z-[1] bg-[#e7e2b6] menu-lg shadow-lg border border-[#47473f]">
                <li className="menu-title">
                  <div className="flex justify-between items-center w-full">
                    <span className="capitalize font-[400] text-[#9a9888] text-sm md:text-lg">slippage settings</span>
                    <button className="btn btn-ghost btn-square btn-sm" onClick={() => {}}>
                      <BiChevronUp size={25} />
                    </button>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between items-center gap-3 w-full">
                    {slippages.map((slippage, index) => (
                      <a
                        key={index}
                        className={`btn btn-ghost btn-square flex justify-center items-center px-4 w-1/3 py-1 rounded-[5px] ${
                          slippage === 0.1 && "bg-[#fdf7c4]"
                        }`}
                      >
                        <span className="capitalize font-[400] text-[#47473f] text-sm">{slippage}%</span>
                      </a>
                    ))}
                  </div>
                </li>
                <li>
                  <div className="bg-[#fdf7c4] py-3 px-3 flex justify-between gap-3 rounded-[5px]">
                    <span className="capitalize font-[400] text-[#9a9888] text-sm md:text-lg">custom slippage</span>
                    <input
                      className="border-0 outline-none text-right w-16 text-[#000] text-lg bg-transparent appearance-none"
                      type="number"
                      value={0.5}
                    />
                  </div>
                </li>
              </ul>
            </details>
            <div className="grow" />
            <button className="btn btn-ghost btn-square btn-lg flex justify-center items-center w-full py-5 bg-[#47473f] rounded-[5px]">
              <span className="text-[#fff] text-xl font-[500] capitalize">{t(__STRINGS__.__link_titles__.swap)}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Swap;
