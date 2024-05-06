import { SwapCard, TimeLineCard } from "./components";

export const SwapPage = () => {
  return (
    <section>
      <div className="container flex flex-col  px-5 lg:px-8 xl:px-0  xl:flex-row gap-[27px] pb-16 pt-[167px] max-w-full  xl:max-w-[967px]">
        <SwapCard />
        <TimeLineCard />
      </div>
    </section>
  );
};
