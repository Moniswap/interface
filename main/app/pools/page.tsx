"use client";

import { __STRINGS__ } from "@/constants";
import { useTranslation } from "react-i18next";

function Pools() {
  const { t } = useTranslation();
  return (
    <div className="md:py-12 flex flex-col justify-start items-start w-full gap-10 min-h-screen">
      <div className="flex justify-between items-center gap-3 w-full">
        <div className="flex flex-col justify-start items-start w-[60%] gap-3">
          <h3 className="capitalize text-[#000] font-[500] text-xl md:text-2xl">{t(__STRINGS__.__misc__.liquidity)}</h3>
          <span className="text-[#9a9888] font-[400] text-sm md:text-xl">
            {t(__STRINGS__.__headers__.call_to_liquidity)}
          </span>
        </div>

        <div className="w-[40%] flex justify-center items-center gap-3">
          <a className="btn btn-ghost btn-square btn-md flex justify-center items-center w-1/2 py-2 px-3 bg-[#47473f] rounded-[5px]">
            <span className="text-[#fff] text-lg font-[500] capitalize">{t(__STRINGS__.__misc__.token_list)}</span>
          </a>

          <a className="btn btn-ghost btn-square btn-md flex justify-center items-center w-1/2 py-2 px-3 bg-[#47473f] rounded-[5px]">
            <span className="text-[#fff] text-lg font-[500] capitalize">
              {t(__STRINGS__.__actions__.create_liquidity)}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Pools;
