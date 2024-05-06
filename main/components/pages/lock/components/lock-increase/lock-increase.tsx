import { AmountToLockCard, LockIncreaseTimeLine } from "./components";
import { Props } from "./types";

export const LockInCrease = ({ setPage }: Props) => (
  <section>
    <div className="container flex flex-col  px-5 lg:px-8 xl:px-0  xl:flex-row gap-[27px] pb-16 pt-[167px] max-w-full  xl:max-w-[967px]">
      <AmountToLockCard />
      <LockIncreaseTimeLine setPage={setPage} />
      {/* <TimeLineCard setPage={setPage} /> */}
    </div>
  </section>
);
