import { VISIT_CARS } from "@/constants";
import { Card } from "./components";

export const VisitCards = () => (
  <section className="w-full h-full pt-[56px] xl:pt-[105px]">
    {/* {VISIT_CARS} */}
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-x-[25px] gap-y-[9px] xl:gap-y-3 container px-5 lg:px-8 xl:px-0 ">
      {VISIT_CARS.map((item, index) => (
        <Card key={index} title={item} />
      ))}
    </div>
  </section>
);
