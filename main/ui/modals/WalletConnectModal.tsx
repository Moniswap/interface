import * as React from "react";
import Image from "next/image";
import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { useConfig, useConnect } from "wagmi";
import { FiX } from "react-icons/fi";
import { __PROVIDERS__ } from "@/constants";

interface ModalProps {
  close?: () => any;
}

const WalletConnectModal = forwardRef<HTMLInputElement, ModalProps>(({ close }, ref) => {
  const { connect, connectors } = useConnect();
  const { chains } = useConfig();

  return (
    <>
      <input type="checkbox" className="modal-toggle" id="connect-wallet-modal" ref={ref} />
      <div className="modal z-60" role="dialog">
        <div className="bg-[#111] rounded-[5px] modal-box p-3 flex flex-col justify-start items-center gap-7 z-20">
          <section className="flex flex-col pb-14 w-full rounded-xl bg-[#111] max-md:max-w-full z-20">
            <label
              htmlFor="connect-wallet-modal"
              className="cursor-pointer self-end rounded-full bg-white p-2 border border-gray-300 hover:bg-gray-200 focus:outline-none"
            >
              <FiX size={20} />
            </label>
            <div className="flex flex-col px-6 mt-4 w-full max-md:pl-5 max-md:max-w-full">
              <h1 className="text-3xl text-white italic font-medium max-md:max-w-full">Welcome to Moniswap</h1>
              <p className="mt-5 text-base italic text-stone-300 max-md:max-w-full">
                To get started, please connect your wallet.
                <br />
              </p>
              {connectors
                .filter(conn => conn.id !== "io.metamask")
                .map((connector, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      connect({ connector, chainId: chains[0].id });

                      if (close) close();
                    }}
                    className="flex gap-4 items-center mt-3.5 text-white rounded-2xl bg-[#1E1E1E] max-md:flex-wrap hover:bg-zinc-700"
                  >
                    <div className="shrink-0 self-stretch w-3 rounded-l-2xl bg-zinc-500 h-[79px]" />
                    <Image
                      src={__PROVIDERS__[connector.id as keyof typeof __PROVIDERS__]?.image}
                      alt={__PROVIDERS__[connector.id as keyof typeof __PROVIDERS__]?.name}
                      width={24}
                      height={24}
                      className="shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                    <div className="flex-auto self-stretch my-auto italic">
                      {__PROVIDERS__[connector.id as keyof typeof __PROVIDERS__]?.name}
                    </div>
                  </button>
                ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
});

export default WalletConnectModal;
