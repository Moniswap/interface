"use client";
import { useState } from "react";
import { LockInCrease, LockTransfer, Main, Merge, NewLock } from "./components";
import { pageType } from "./types";

export const LockPage = () => {
  const [page, setPage] = useState<pageType>("main");

  switch (page) {
    case "main":
      return <Main setPage={setPage} />;
    case "new_lock":
      return <NewLock setPage={setPage} />;
    case "lock_increase":
      return <LockInCrease setPage={setPage} />;
    case "merge":
      return <Merge setPage={setPage} />;
    case "lock_transfer":
      return <LockTransfer setPage={setPage} />;
  }
};
