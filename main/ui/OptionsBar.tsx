"use client";

import { RootState } from "@/configs/store";
import { changeRPCNode } from "@/configs/store/slices/rpcNodeSlice";
import { changeTheme } from "@/configs/store/slices/themeSlice";
import { __CHAIN_IDS__, __CHAIN_INFO__, __LANGUAGES__, __RPCS__, __STRINGS__ } from "@/constants";
import Image from "next/image";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { FiMoon, FiSun } from "react-icons/fi";
import { LuHardDrive } from "react-icons/lu";
import { PiGlobeSimple } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { useChainId, useChains, useSwitchChain } from "wagmi";

function OptionsBar() {
  const chains = useChains();
  const chainId = useChainId();
  const chainInfo = useMemo(() => __CHAIN_INFO__[chainId ?? __CHAIN_IDS__.bera_testnet], [chainId]);
  const [chainSwitchOpen, setChainSwitchOpen] = useState(false);
  const [themeSwitchOpen, setThemeSwitchOpen] = useState(false);
  const [languageSwitchOpen, setLanguageSwitchOpen] = useState(false);
  const [rpcSwitchOpen, setRPCSwitchOpen] = useState(false);
  const { switchChain } = useSwitchChain();
  const { currentTheme } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  const { i18n } = useTranslation();
  const currentLanguage = useMemo(() => __LANGUAGES__[i18n.language], [i18n.language]);

  const currentRpcNodeState = useSelector((state: RootState) => state.rpcNode);

  return (
    <div className="w-full md:min-h-screen md:border border-[#c6c6c6] flex flex-row md:flex-col justify-between md:justify-start items-start md:items-center px-2 md:px-5 py-2 md:py-5 gap-6 overflow-auto">
      <details
        className="dropdown w-full"
        open={chainSwitchOpen}
        onToggle={event => setChainSwitchOpen(event.currentTarget.open)}
      >
        <summary className="m-1 btn btn-ghost w-full flex justify-between items-center gap-3 bg-[#e7e2b6] capitalize px-2 py-2 rounded-[5px]">
          <Image src={chainInfo.image} width={25} height={25} alt={chainInfo.name} className="rounded-full" />
          <span className="capitalize text-sm md:text-lg font-[400] text-[#000]">{chainInfo.name}</span>
          {chainSwitchOpen ? <BiChevronUp size={20} /> : <BiChevronDown size={20} />}
        </summary>
        <ul className="p-2 w-full dropdown-content menu rounded-[5px] z-[1] bg-[#e7e2b6] menu-lg shadow-lg border border-[#47473f]">
          <li className="menu-title">
            <div className="flex justify-between items-center w-full">
              <span className="capitalize font-[400] text-[#9a9888] text-sm md:text-lg">select network</span>
              <button className="btn btn-ghost btn-square btn-sm" onClick={() => setChainSwitchOpen(false)}>
                <BiChevronUp size={20} />
              </button>
            </div>
          </li>
          {chains.map(chain => (
            <li key={chain.id}>
              <a
                onClick={() => {
                  switchChain({ chainId: chain.id });
                  setChainSwitchOpen(false);
                }}
                className={`flex justify-start items-center gap-3 ${
                  chain.id === parseInt(chainInfo.chainIDHex) && "bg-[#fff8b9] font-[500]"
                }`}
              >
                <Image
                  src={__CHAIN_INFO__[chain.id].image}
                  width={25}
                  height={25}
                  alt={__CHAIN_INFO__[chain.id].name}
                  className="rounded-full"
                />
                <span className="capitalize text-sm md:text-lg font-[400] text-[#000]">
                  {__CHAIN_INFO__[chain.id].name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </details>

      <div className="flex justify-start items-start gap-3 flex-col bg-[#fdf7c4] rounded-[5px] w-full px-4 py-5">
        <div className="flex flex-col justify-start items-start gap-3 w-full">
          <span className="capitalize font-[400] text-[#9a9888] text-sm md:text-lg">theme</span>
          <details
            className="dropdown w-full"
            open={themeSwitchOpen}
            onToggle={event => setThemeSwitchOpen(event.currentTarget.open)}
          >
            <summary className="m-0 w-full btn btn-ghost md:min-h-32 flex flex-col justify-start items-start gap-12 bg-[#e7e2b6] px-4 py-4 rounded-[5px]">
              <div className="flex justify-between items-center w-full">
                {currentTheme === "light" ? <FiSun size={23} /> : <FiMoon size={23} />}
                {themeSwitchOpen ? <BiChevronUp size={20} /> : <BiChevronDown size={20} />}
              </div>
              <span className="capitalize font-[400] text-[#47473f] text-sm">{currentTheme}</span>
            </summary>
            <ul className="p-2 w-full dropdown-content menu rounded-[5px] z-[1] bg-[#e7e2b6] menu-lg shadow-lg border border-[#47473f]">
              <li className="menu-title">
                <div className="flex justify-between items-center w-full">
                  <span className="capitalize font-[400] text-[#9a9888] text-sm md:text-lg">switch theme</span>
                  <button className="btn btn-ghost btn-square btn-sm" onClick={() => setThemeSwitchOpen(false)}>
                    <BiChevronUp size={20} />
                  </button>
                </div>
              </li>
              <li>
                <a
                  onClick={() => {
                    dispatch(changeTheme("light"));
                    setThemeSwitchOpen(false);
                  }}
                  className={`flex justify-start items-center gap-3 ${
                    currentTheme === "light" && "bg-[#fff8b9] font-[500]"
                  }`}
                >
                  <FiSun size={25} />
                  <span className="capitalize text-sm md:text-lg font-[400] text-[#000]">light</span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    dispatch(changeTheme("dark"));
                    setThemeSwitchOpen(false);
                  }}
                  className={`flex justify-start items-center gap-3 ${
                    currentTheme === "dark" && "bg-[#fff8b9] font-[500]"
                  }`}
                >
                  <FiMoon size={25} />
                  <span className="capitalize text-sm md:text-lg font-[400] text-[#000]">dark</span>
                </a>
              </li>
            </ul>
          </details>
        </div>

        <div className="flex flex-col justify-start items-start gap-3 w-full">
          <span className="capitalize font-[400] text-[#9a9888] text-sm md:text-lg">language</span>
          <details
            className="dropdown w-full"
            open={languageSwitchOpen}
            onToggle={event => setLanguageSwitchOpen(event.currentTarget.open)}
          >
            <summary className="m-0 w-full btn btn-ghost md:min-h-32 flex flex-col justify-start items-start gap-12 bg-[#e7e2b6] px-4 py-4 rounded-[5px]">
              <div className="flex justify-between items-center w-full">
                <PiGlobeSimple size={23} />
                {languageSwitchOpen ? <BiChevronUp size={20} /> : <BiChevronDown size={20} />}
              </div>
              <span className="capitalize font-[400] text-[#47473f] text-sm">{currentLanguage}</span>
            </summary>
            <ul className="p-2 w-full dropdown-content menu rounded-[5px] z-[1] bg-[#e7e2b6] menu-lg shadow-lg border border-[#47473f]">
              <li className="menu-title">
                <div className="flex justify-between items-center w-full">
                  <span className="capitalize font-[400] text-[#9a9888] text-sm md:text-lg">change language</span>
                  <button className="btn btn-ghost btn-square btn-sm" onClick={() => setLanguageSwitchOpen(false)}>
                    <BiChevronUp size={20} />
                  </button>
                </div>
              </li>
              <li>
                <a
                  onClick={() => {
                    i18n.changeLanguage("en").then(() => {
                      setLanguageSwitchOpen(false);
                    });
                  }}
                  className={`flex justify-start items-center gap-3 ${
                    i18n.language === "en" && "bg-[#fff8b9] font-[500]"
                  }`}
                >
                  <span className="uppercase text-sm md:text-lg font-[600] text-[#000]">
                    {__STRINGS__.__lng__.english}
                  </span>
                  <span className="capitalize text-sm md:text-lg font-[400] text-[#000]">
                    {__LANGUAGES__[__STRINGS__.__lng__.english]}
                  </span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    i18n.changeLanguage("fr").then(() => {
                      setLanguageSwitchOpen(false);
                    });
                  }}
                  className={`flex justify-start items-center gap-3 ${
                    i18n.language === "fr" && "bg-[#fff8b9] font-[500]"
                  }`}
                >
                  <span className="uppercase text-sm md:text-lg font-[600] text-[#000]">
                    {__STRINGS__.__lng__.francais}
                  </span>
                  <span className="capitalize text-sm md:text-lg font-[400] text-[#000]">
                    {__LANGUAGES__[__STRINGS__.__lng__.francais]}
                  </span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    i18n.changeLanguage("es").then(() => {
                      setLanguageSwitchOpen(false);
                    });
                  }}
                  className={`flex justify-start items-center gap-3 ${
                    i18n.language === "es" && "bg-[#fff8b9] font-[500]"
                  }`}
                >
                  <span className="uppercase text-sm md:text-lg font-[600] text-[#000]">
                    {__STRINGS__.__lng__.español}
                  </span>
                  <span className="capitalize text-sm md:text-lg font-[400] text-[#000]">
                    {__LANGUAGES__[__STRINGS__.__lng__.español]}
                  </span>
                </a>
              </li>
            </ul>
          </details>
        </div>

        <div className="flex flex-col justify-start items-start gap-3 w-full">
          <span className="capitalize font-[400] text-[#9a9888] text-sm md:text-lg">rPC node</span>
          <details
            className="dropdown w-full"
            open={rpcSwitchOpen}
            onToggle={event => setRPCSwitchOpen(event.currentTarget.open)}
          >
            <summary className="m-0 w-full btn btn-ghost md:min-h-32 flex flex-col justify-start items-start gap-12 bg-[#e7e2b6] px-4 py-4 rounded-[5px]">
              <div className="flex justify-between items-center w-full">
                <LuHardDrive size={20} />
                {rpcSwitchOpen ? <BiChevronUp size={20} /> : <BiChevronDown size={20} />}
              </div>
              <span className="capitalize font-[400] text-[#47473f] text-sm">
                {currentRpcNodeState[chainId].serviceName}
              </span>
            </summary>
            <ul className="p-2 w-full dropdown-content menu rounded-[5px] z-[1] bg-[#e7e2b6] menu-lg shadow-lg border border-[#47473f]">
              <li className="menu-title">
                <div className="flex justify-between items-center w-full">
                  <span className="capitalize font-[400] text-[#9a9888] text-sm md:text-lg">switch rPC node</span>
                  <button className="btn btn-ghost btn-square btn-sm" onClick={() => setRPCSwitchOpen(false)}>
                    <BiChevronUp size={20} />
                  </button>
                </div>
              </li>
              {__RPCS__[chainId].map((value, index) => (
                <li key={index}>
                  <a
                    onClick={() => {
                      dispatch(changeRPCNode({ chainId, value }));
                      setRPCSwitchOpen(false);
                    }}
                    className={`flex justify-start items-center gap-3 ${
                      currentRpcNodeState[chainId].serviceName === value.serviceName && "bg-[#fff8b9] font-[500]"
                    }`}
                  >
                    <Image
                      src={__CHAIN_INFO__[chainId].image}
                      width={25}
                      height={25}
                      alt={__CHAIN_INFO__[chainId].name}
                      className="rounded-full"
                    />
                    <span className="capitalize text-sm md:text-lg font-[400] text-[#000]">{value.serviceName}</span>
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </div>
  );
}

export default OptionsBar;
