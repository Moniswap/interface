import * as React from "react";
import Image from "next/image";
import { forwardRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAccount, useConfig, useConnect, useBalance, useDisconnect } from "wagmi";
import { FiX } from "react-icons/fi";
import { customEllipsize } from "@/helpers/utils";
import { BiCopy, BiWallet } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/configs/store";
import { changeCustomRPCUrl } from "@/configs/store/slices/customRPCUrlSlice";
import { changeExecutionDeadline } from "@/configs/store/slices/executionDeadlineSlice";
import { changeAllowUnsafeTrades } from "@/configs/store/slices/allowUnsafeTradesSlice";
import { changeSlippageTolerance } from "@/configs/store/slices/slippageToleranceSlice";

interface ModalProps {
  close?: () => any;
}

function SlippageToleranceItem({
  value,
  selectedValue,
  onClick
}: {
  value: string;
  selectedValue: string;
  onClick: (value: string) => void;
}) {
  let classes = "cursor-pointer justify-center px-4 py-3.5 italic border-r border-solid border-stone-700 ";
  if (value === "0.01%") {
    classes = "cursor-pointer justify-center px-3 py-3.5 italic rounded-l-xl border-r border-solid border-stone-700";
  } else if (value === "or") {
    classes = "cursor-default justify-center px-5 py-3.5 font-light border-r border-solid border-stone-700";
  } else if (value === "1.0") {
    classes = "cursor-pointer justify-center px-3.5 py-3.5 italic rounded-r-xl border-solid border-stone-700";
  }
  return (
    <div
      className={`${classes} ${selectedValue === value ? "bg-[#FC8415]" : ""}`}
      onClick={() => value !== "or" && onClick(value)}
    >
      {value}
    </div>
  );
}

const WalletSettingsModal = forwardRef<HTMLInputElement, ModalProps>(({ close }, ref) => {
  const { address, connector } = useAccount();
  const { disconnect } = useDisconnect();
  const dispatch = useDispatch();
  const balance = useBalance({
    address
  })?.data;
  const { executionDeadline } = useSelector((state: RootState) => state.executionDeadline);
  const { allowUnsafeTrades } = useSelector((state: RootState) => state.allowUnsafeTrades);
  const { customRPCUrl } = useSelector((state: RootState) => state.customRPCUrl);
  const { slippageTolerance } = useSelector((state: RootState) => state.slippageTolerance);
  const slippageToleranceOptions = ["0.01%", "0.1%", "0.5%", "1%", "5%", "or", "1.0"];

  return (
    <>
      <input type="checkbox" className="modal-toggle" id="wallet-settings-modal" ref={ref} />
      <div className="modal w-auto z-60" role="dialog">
        <div className="bg-[#111] rounded-[5px] modal-box p-3 flex flex-col justify-start items-center gap-7 z-20">
          <section className="flex flex-col pb-14 w-full rounded-xl bg-[#111] max-md:max-w-full z-20">
            <label
              htmlFor="wallet-settings-modal"
              className="cursor-pointer self-end rounded-full bg-white p-2 border border-gray-300 hover:bg-gray-200 focus:outline-none"
            >
              <FiX size={20} />
            </label>
            <div className="flex flex-col px-6 mt-4 w-full max-md:pl-5 max-md:max-w-full">
              <div className="flex gap-1.5 items-start text-base max-md:flex-wrap">
                <div className="self-end rounded-full bg-[#7d7d7d] p-2 w-12 h-12">
                  <BiWallet className="w-full h-full text-white" />
                </div>
                <div className="flex flex-col grow shrink-0 self-start basis-0 w-fit max-md:max-w-full">
                  <div className="flex gap-5 justify-between items-start w-full font-medium whitespace-nowrap text-stone-300 max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-2 self-end items-center">
                      <div className="grow italic">{customEllipsize(address as string, 6, 4)}</div>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(address as string);
                        }}
                      >
                        <BiCopy className="shrink-0 w-3 aspect-square text-zinc-500 hover:text-white" />
                      </button>
                    </div>
                  </div>
                  <div className="italic text-zinc-500 max-md:max-w-full">
                    Balance: {`${balance?.formatted} ${balance?.symbol}`}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col px-6 w-full max-md:pl-5 max-md:max-w-full">
              <div className="flex flex-col py-3.5 mt-3.5 rounded-none border-t border-solid border-zinc-800 max-md:max-w-full">
                <div className="flex flex-col px-4 py-5 text-sm rounded-xl bg-[#1E1E1E] text-stone-300 max-md:max-w-full">
                  <div className="italic max-md:max-w-full">
                    To communicate with the network with your personal RPC, add it here and reload the page. This is
                    saved only in your browser, locally.
                    <br />
                  </div>
                  <input
                    type="text"
                    className="justify-center items-start px-2.5 py-4 mt-5 italic rounded-xl border border-solid bg-[#1E1E1E] border-stone-700 text-zinc-500 max-md:pr-5 max-md:max-w-full"
                    placeholder="RPC URL......."
                    value={customRPCUrl}
                    onChange={ev => dispatch(changeCustomRPCUrl(ev.target.value))}
                  />
                  <div className="mt-6 italic max-md:max-w-full">
                    Leave blank if you want to use the RPC provided by us.
                    <br />
                  </div>
                </div>
              </div>

              <div className="flex flex-col py-3.5 mt-3.5 rounded-none border-t border-solid border-zinc-800 max-md:max-w-full">
                <div className="flex flex-col px-4 py-6 text-sm rounded-xl bg-[#1E1E1E] text-stone-300 max-md:max-w-full">
                  <div className="italic max-md:max-w-full">Slippage tolerance {slippageTolerance}</div>
                  <div className="flex gap-5 mt-3 w-full whitespace-nowrap rounded-xl border border-solid bg-[#1E1E1E] border-stone-700 max-md:flex-wrap max-md:max-w-full">
                    <div className="flex flex-auto gap-0 font-bold text-center">
                      {slippageToleranceOptions.map((option, index) => (
                        <SlippageToleranceItem
                          key={index}
                          value={option}
                          selectedValue={slippageTolerance}
                          onClick={value => dispatch(changeSlippageTolerance(value))}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex z-10 flex-col pt-3 mt-2 mb-0 rounded-none border-t border-solid border-zinc-800 max-md:mb-2.5 max-md:max-w-full">
                <div className="flex gap-5 px-4 py-3.5 text-sm rounded-xl bg-[#1E1E1E] text-stone-300 max-md:flex-wrap max-md:max-w-full">
                  <div className="flex flex-col">
                    <div className="italic">Transaction execution deadline</div>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={executionDeadline}
                      className="range bg-[#444242] mt-4"
                      style={{ height: "0.5rem", overflow: "inherit", "--range-shdw": "none" } as React.CSSProperties}
                      onChange={ev => dispatch(changeExecutionDeadline(Number(ev.target.value)))}
                    />
                  </div>
                  <div className="flex-auto self-end mt-7 italic font-bold text-right">{executionDeadline} minutes</div>
                </div>
                <div className="flex flex-col py-3.5 mt-3.5 rounded-none border-t border-solid border-zinc-800 max-md:max-w-full">
                  <div className="py-3.5 px-4 rounded-xl bg-[#1E1E1E] max-md:pr-5 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-[85%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col text-sm max-md:mt-10">
                          <div className="italic font-semibold text-stone-300">Allow unsafe trades</div>
                          <div className="mt-3.5 italic text-zinc-500">
                            Enabling this will allow trading on quotes with high price impact and could lead to loss of
                            funds.
                          </div>
                        </div>
                      </div>
                      <div className="flex align-items ml-5 w-[15%] max-md:ml-0 max-md:w-full">
                        <input
                          type="checkbox"
                          className="toggle self-end bg-[#FC8415] border-none hover:bg-[#FC8415] "
                          style={{ "--tglbg": "#444242" } as React.CSSProperties}
                          checked={allowUnsafeTrades}
                          onChange={ev => dispatch(changeAllowUnsafeTrades(!allowUnsafeTrades))}
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    className="justify-center items-center px-16 py-7 mt-5 text-sm italic font-bold text-center rounded-xl border border-solid bg-[#1E1E1E] border-zinc-800 text-stone-300 max-md:px-5 max-md:max-w-full"
                    onClick={() => {
                      disconnect({ connector });

                      if (close) close();
                    }}
                  >
                    Disconnect Wallet
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
});

export default WalletSettingsModal;
