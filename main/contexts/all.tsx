"use client";

import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config as web3Config } from "@/configs/web3.config";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/configs/store";
import { Provider as ReduxProvider } from "react-redux";

const queryClient = new QueryClient();

function AllContexts({ children }: { children: any }) {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <WagmiProvider config={web3Config}>
          <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </WagmiProvider>
      </PersistGate>
    </ReduxProvider>
  );
}

export default AllContexts;
