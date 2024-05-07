import { PROVITERS } from "@/constants";
import { Card } from "./components";

export const Proviters = () => (
  <section className="w-full pt-[93px]">
    <div className="container grid gap-x-[22px] gap-y-[23px] xl:gap-y-0 grid-cols-1 xl:grid-cols-4 px-5 lg:px-8 xl:px-0">
      {PROVITERS.map((item, index) => (
        <Card key={index} proviter={item} />
      ))}
    </div>
  </section>
);
