import { useState } from "react";
import { AboutCard, MergeCard, MergeTimeLine } from "./components";
import { Props } from "./types";

export const Merge = ({ setPage }: Props) => {
  const [step, setStep] = useState<"merge" | "about">("about");

  return (
    <section>
      <div className="container flex flex-col  px-5 lg:px-8 xl:px-0  xl:flex-row gap-[27px] pb-16 pt-[167px] max-w-full  xl:max-w-[967px]">
        <MergeCard />
        {step === "about" && <AboutCard setStep={setStep} />}
        {step === "merge" && <MergeTimeLine setPage={setPage} />}
      </div>
    </section>
  );
};
