import { createClient } from "viem";
import { http, createConfig } from "wagmi";
import { berachainTestnet, sepolia } from "wagmi/chains";

export const config = createConfig({
  chains: [berachainTestnet, sepolia],
  client({ chain }) {
    return createClient({ chain, transport: http() });
  }
});
