"use client";
import { useState } from "react";
import { Hero, Locks, Relay } from "./components";
import { Props } from "./types";

export const Main = ({ setPage }: Props) => {
  const [locks, setLocks] = useState(false);

  return (
    <section className="pt-[160px]">
      <div className="px-5 lg:px-8 xl:px-0 container">
        <Hero setPage={setPage} />
        <Locks locks={locks} />
        <Relay setLocks={setLocks} />
      </div>
    </section>
  );
};
