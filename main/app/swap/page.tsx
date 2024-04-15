"use client";

import { RootState } from "@/configs/store";
import { setFirstSelectedToken, setSecondSelectedToken } from "@/configs/store/slices/tokensSlice";
import { Step, StepGroup } from "@/ui/Step";
import BorderlessArtboard from "@/ui/artboards/BorderlessArtboard";
import TokenlistModal from "@/ui/modals/TokenlistModal";
import Image from "next/image";
import { useMemo, useRef } from "react";
import { FiChevronDown } from "react-icons/fi";
import { TbArrowsUpDown } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { useChainId } from "wagmi";

function Swap() {
  const dispatch = useDispatch();
  const tokenlistModal0 = useRef<HTMLInputElement>(null);
  const tokenlistModal1 = useRef<HTMLInputElement>(null);

  const chainId = useChainId();
  const tkn = useSelector((state: RootState) => state.tokens);
  const tknStateData = useMemo(() => tkn[chainId], [chainId, tkn]);

  const token0 = useMemo(
    () => tknStateData.tokenlist.find(t => t.address === tknStateData.firstSelectedToken),
    [tknStateData.firstSelectedToken, tknStateData.tokenlist]
  );
  const token1 = useMemo(
    () => tknStateData.tokenlist.find(t => t.address === tknStateData.secondSelectedToken),
    [tknStateData.secondSelectedToken, tknStateData.tokenlist]
  );

  return (
    <>
      <div className="w-full flex flex-col md:flex-row justify-start md:justify-center items-center gap-5 px-3 my-6 md:my-40">
        <div className="w-full md:w-1/3 self-stretch">
          <BorderlessArtboard width="100%" height="100%">
            <div className="flex flex-col justify-start items-center w-full gap-12 py-4">
              <div className="flex flex-col gap-6 justify-start items-center w-full">
                <div className="flex justify-between items-center gap-3 w-full">
                  <h4 className="italic text-[#fff] font-[500] capitalize text-sm md:text-lg">swap</h4>
                  <span className="italic text-[#cfcfcf] font-[500] capitalize text-xs md:text-sm">
                    available 0.00 {token0?.symbol}
                  </span>
                </div>
                <div className="w-full join rounded-[12.8px] border border-[#2b2b2b]">
                  <button
                    onClick={() => {
                      if (tokenlistModal0.current) tokenlistModal0.current.checked = true;
                    }}
                    className="btn btn-ghost join-item h-full flex justify-start items-center gap-3 md:w-1/3"
                  >
                    <Image src={token0?.logoURI ?? ""} height={30} width={30} alt="img" className="rounded-full" />
                    <span className="italic text-[#cfcfcf] font-[500] uppercase text-xs md:text-lg">
                      {token0?.symbol}
                    </span>
                    <FiChevronDown size={20} color="#cfcfcf" />
                  </button>
                  <input
                    type="number"
                    className="justify-center join-item items-start px-2.5 italic rounded-xl border-l border-[#2b2b2b] bg-transparent text-[#fff] font-[500] text-sm md:text-lg w-full outline-none"
                  />
                </div>
              </div>
              {/* TO DO: Switch */}
              <div className="w-full flex flex-col justify-center items-center">
                <div className="bg-[#2b2b2b] w-full h-[0.9px]" />
                <button className="btn btn-ghost btn-sm rounded-[10px] relative -top-4 bg-[#47473f] flex justify-center items-center">
                  <TbArrowsUpDown color="#fff" size={20} />
                </button>
              </div>
              <div className="flex flex-col gap-6 justify-start items-center w-full">
                <div className="flex justify-between items-center gap-3 w-full">
                  <h4 className="italic text-[#fff] font-[500] capitalize text-sm md:text-lg">for</h4>
                  <span className="italic text-[#cfcfcf] font-[500] capitalize text-xs md:text-sm">
                    available 0.00 {token1?.symbol}
                  </span>
                </div>
                <div className="w-full join rounded-[12.8px] border border-[#2b2b2b]">
                  <button
                    onClick={() => {
                      if (tokenlistModal1.current) tokenlistModal1.current.checked = true;
                    }}
                    className="btn btn-ghost join-item h-full flex justify-start items-center gap-3 md:w-1/3"
                  >
                    <Image src={token1?.logoURI ?? ""} height={30} width={30} alt="img" className="rounded-full" />
                    <span className="italic text-[#cfcfcf] font-[500] uppercase text-xs md:text-lg">
                      {token1?.symbol}
                    </span>
                    <FiChevronDown size={20} color="#cfcfcf" />
                  </button>
                  <input
                    disabled
                    type="number"
                    className="justify-center join-item items-start px-2.5 italic rounded-xl border-l border-[#2b2b2b] bg-transparent text-[#fff] font-[500] text-sm md:text-lg w-full outline-none"
                  />
                </div>
              </div>
            </div>
          </BorderlessArtboard>
        </div>
        <div className="w-full md:w-1/4 self-stretch">
          <BorderlessArtboard width="100%" height="100%">
            <div className="flex flex-col justify-start items-center w-full gap-10">
              <div className="flex justify-between items-center gap-3 w-full">
                <h4 className="italic text-[#fff] font-[500] capitalize text-lg md:text-xl">swap</h4>
                <Image src="/images/hive.svg" width={60} height={60} alt="hive" />
              </div>
              <StepGroup activeStep={-1}>
                <Step
                  content={
                    <span className="text-[#cfcfcf] text-sm md:text-lg text-justify italic">
                      Start by selecting the token to swap from and the amount you want to exchange
                    </span>
                  }
                />
                <Step
                  content={
                    <span className="text-[#cfcfcf] text-sm md:text-lg text-justify italic">
                      Pick the token you want to exchange for
                    </span>
                  }
                />
                <Step
                  content={
                    <span className="text-[#cfcfcf] text-sm md:text-lg text-justify italic">
                      The quotes will be ready in a moment
                    </span>
                  }
                />
              </StepGroup>
              {/* <ul className="steps steps-vertical">
              <li className="step step-warning">
                <span className="text-[#cfcfcf] text-xs md:text-sm text-justify">
                  Start by selecting the token to swap from and the amount you want to exchange
                </span>
              </li>
              <li className="step step-warning">
                <span className="text-[#cfcfcf] text-xs md:text-sm text-justify">
                  Pick the token you want to exchange for
                </span>
              </li>
              <li className="step step-warning">
                <span className="text-[#cfcfcf] text-xs md:text-sm text-justify">
                  The quotes will be ready in a moment
                </span>
              </li>
            </ul> */}
            </div>
          </BorderlessArtboard>
        </div>
      </div>
      <TokenlistModal
        ref={tokenlistModal0}
        onSingleItemClick={address => dispatch(setFirstSelectedToken({ chainId, address }))}
        close={() => {
          if (tokenlistModal0.current) tokenlistModal0.current.checked = false;
        }}
      />

      <TokenlistModal
        ref={tokenlistModal1}
        onSingleItemClick={address => dispatch(setSecondSelectedToken({ chainId, address }))}
        close={() => {
          if (tokenlistModal1.current) tokenlistModal1.current.checked = false;
        }}
      />
    </>
  );
}

export default Swap;
