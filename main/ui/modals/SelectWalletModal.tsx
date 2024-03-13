/* eslint-disable react/display-name */
"use client";

import { __PROVIDERS__, __STRINGS__ } from "@/constants";
import { forwardRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FiEye, FiHelpCircle, FiX } from "react-icons/fi";
import { useConfig, useConnect } from "wagmi";
import Image from "next/image";

interface ModalProps {
  close?: () => any;
}

const SelectWalletModal = forwardRef<HTMLInputElement, ModalProps>(({ close }, ref) => {
  const { t } = useTranslation();
  const { connect, connectors } = useConnect();
  const { chains } = useConfig();

  useEffect(() => {
    console.log(
      "Connectors: ",
      connectors.map(conn => console.log(conn.id))
    );
  }, [connectors]);

  return (
    <>
      <input type="checkbox" className="modal-toggle" id="connect-wallet-modal" ref={ref} />
      <div className="modal z-20" role="dialog">
        <div className="bg-[#fdf7c4] rounded-[5px] modal-box p-3 flex flex-col justify-start items-center gap-7 z-20">
          <div className="flex justify-between items-center px-3 py-1 w-full">
            <div className="flex flex-col justify-start gap-2 items-start">
              <span className="capitalize text-2xl text-[#000] font-[500]">
                {t(__STRINGS__.__actions__.connect_wallet)}
              </span>
              <span className="text-sm text-[#9a9888] font-[400]">{t(__STRINGS__.__actions__.connect_wallet_ex)}</span>
            </div>
            <label htmlFor="connect-wallet-modal" className="btn btn-circle btn-ghost btn-sm text-[#000] p-1 text-lg">
              <FiX size={20} />
            </label>
          </div>
          <div className="flex justify-center gap-3 w-full items-center flex-wrap">
            {connectors
              .filter(conn => conn.id !== "io.metamask")
              .map((connector, index) => (
                <button
                  key={index}
                  onClick={() => {
                    connect({ connector, chainId: chains[0].id });

                    if (close) close();
                  }}
                  className="bg-[#e7e2b6] btn-ghost w-[45%] rounded-[5px] px-3 py-2 flex items-center justify-between self-stretch gap-3"
                >
                  <div className="bg-[#fefce9] rounded-[5px] flex justify-center items-center p-2">
                    <Image
                      src={__PROVIDERS__[connector.id as keyof typeof __PROVIDERS__]?.image}
                      alt={__PROVIDERS__[connector.id as keyof typeof __PROVIDERS__]?.name}
                      width={50}
                      height={50}
                    />
                  </div>
                  <span className="capitalize text-lg text-[#000] font-[500]">
                    {__PROVIDERS__[connector.id as keyof typeof __PROVIDERS__]?.name}
                  </span>
                </button>
              ))}
          </div>

          <div className="flex flex-col w-full justify-start items-start gap-3 p-4 bg-[#e7e2b6] rounded-[5px]">
            <div className="flex justify-start items-center gap-2 w-full">
              <FiEye color="#000" size={20} />
              <span className="text-sm text-[#000] font-[400]">{t(__STRINGS__.__misc__.vo)}</span>
            </div>
            <div className="flex justify-start items-center gap-2 w-full">
              <FiHelpCircle color="#000" size={20} />
              <span className="text-sm text-[#000] font-[400]">
                {t(__STRINGS__.__misc__.new)}{" "}
                <a
                  href="https://www.quicknode.com/guides/web3-fundamentals-security/basics-to-web3-wallets#:~:text=What%20are%20Web3%20Wallets%3F,NFTs%2C%20and%20other%20digital%20tokens."
                  target="_blank"
                  rel="noreferrer"
                  className="font-inter"
                >
                  {t(__STRINGS__.__misc__.learn)}
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default SelectWalletModal;
