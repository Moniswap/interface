"use client";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import { useEffect, useState } from "react";

function CountdownTimer({ targetDate }: {targetDate: Date}) {
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  useEffect(() => {
    const timerId = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  function calculateRemainingTime() {
    const currentDate = new Date();
    const timeDifference = Math.max(targetDate.getTime() - currentDate.getTime(), 0);
    return {
      days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((timeDifference % (1000 * 60)) / 1000)
    };
  }

  return (
    <>{remainingTime.days}D : {remainingTime.hours}H : {remainingTime.minutes}M : {remainingTime.seconds}S</>
  );
}

export default function Home() {
  const mintStartDate = new Date("2024-04-18T13:00:00Z");
  const whitelistEndDate = new Date("2024-04-15T13:00:00Z");

  return (
    <main className="text-[--inverted-text] relative w-screen">
      <section className="w-full">
        <div className="mx-auto md:w-[1000px] pt-20 px-10 md:px-0">
          <div className="w-full justify-center flex flex-col items-center text-center">
            <h1 className="max-w-[21ch] text-[30.5px] md:text-[45px] flex flex-col italic text-white md:leading-[50px] leading-[45px]">
              BERA PACKS WHITELIST MINT REGISTRATION
            </h1>
            <h1 className="capitalize text-[--inverted-text] text-sm py-2">SECURE YOUR SPOT!</h1>
            <Image
              src="/images/bear_cards.svg"
              width={700}
              height={500}
              alt="BERA PACKS WHITELIST MINT REGISTRATION"
              className="mt-8"
            />
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="mx-auto md:w-[1000px] px-10 py-10 md:px-0">
          <div className="w-full justify-center flex flex-col items-center text-center">
            <div className="flex gap-5 justify-end max-w-full text-right text-white w-[810px] max-md:flex-wrap">
              <div className="flex gap-5 border-r-2 border-solid border-[#2b2b2b]">
                <div className="flex flex-col my-auto px-10">
                  <div className="self-end text-base">Mint Starts In:</div>
                  <div className="mt-7 text-xl italic font-medium w-[195px]">
                    <CountdownTimer targetDate={mintStartDate} />
                  </div>
                </div>
              </div>
              <div className="flex gap-5 border-r-2 border-solid border-[#2b2b2b]">
                <div className="flex flex-col my-auto px-10">
                  <div className="text-base">Total Participants:</div>
                  <div className="self-end mt-6 text-xl italic font-medium w-[195px]">0</div>
                </div>
              </div>
              <div className="flex gap-5 border-r-2 border-solid border-[#2b2b2b]">
                <div className="flex flex-col my-auto px-10">
                  <div className="self-end text-base"> Whitelist Ends In:</div>
                  <div className="mt-7 text-xl italic font-medium w-[195px]">
                    <CountdownTimer targetDate={whitelistEndDate} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="mx-auto md:w-[1000px] px-10 py-10 md:px-0 flex justify-center items-center mb-10">
          <div className="flex flex-col px-5 pt-3.5 w-full font-medium text-white rounded-3xl bg-[#1E1E1E] max-w-[420px]">
            <div className="flex gap-3.5 items-start text-base text-center">
              <img loading="lazy" src="/images/hive.svg" className="shrink-0 aspect-[1.14] w-[52px]" />
              <div className="mt-5 italic">
                Partcipate in the Bera Packs NFT Whitelist Mint Lottery
              </div>
              <img loading="lazy" src="/images/hive.svg" className="shrink-0 aspect-[1.14] w-[52px]" />
            </div>
            <div className="self-center mt-5 text-xs text-center text-green-500">Open to everyone.</div>
            <div className="flex flex-col pt-7 pb-2.5 mt-5 rounded-none border-t border-solid border-[#2b2b2b]">
              <div className="text-xs">Your Status:</div>
              <div className="mt-4 text-base italic">--------</div>
              <div className="flex flex-col pt-4 pb-2 mt-11 text-sm text-center whitespace-nowrap rounded-none border-t border-solid border-[#2b2b2b]">
                <button
                  className="justify-center px-14 py-3.5 italic bg-neutral-700 rounded-[162.369px] bg-[#FEA622]"
                  onClick={() => {
                    console.log("Register");
                  }}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
