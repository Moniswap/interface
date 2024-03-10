import { createClient } from "viem";
import { http, createConfig } from "wagmi";
import { berachainTestnet, sepolia } from "wagmi/chains";
import { walletConnect, injected, coinbaseWallet, safe } from "wagmi/connectors";

export const config = createConfig({
  chains: [berachainTestnet, sepolia],
  connectors: [
    injected(),
    coinbaseWallet({ appName: "Moniswap" }),
    safe(),
    walletConnect({
      projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string,
      relayUrl: "wss://relay.walletconnect.com"
    })
  ],
  client({ chain }) {
    return createClient({ chain, transport: http() });
  }
});
