import { useState } from "react";
import { AboutCard, LockTransferCard, TransferTimeLine } from "./components";
import { Props } from "./types";

export const LockTransfer = ({ setPage }: Props) => {
  const [step, setStep] = useState<"about" | "transfer">("about");
  return (
    <section>
      <div className="container flex flex-col  px-5 lg:px-8 xl:px-0  xl:flex-row gap-[27px] pb-16 pt-[167px] max-w-full  xl:max-w-[967px]">
        <LockTransferCard />
        {step === "about" && <AboutCard setStep={setStep} />}
        {step === "transfer" && <TransferTimeLine setPage={setPage} />}
      </div>
    </section>
  );
};
