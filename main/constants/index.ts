import { toHex } from "viem";

export const __CHAIN_IDS = {
  bera_testnet: 80085,
  sepolia: 11155111
};

export const __CHAIN_INFO__ = {
  [__CHAIN_IDS.bera_testnet]: {
    name: "bera testnet",
    image: "/images/berachain.svg",
    chainIDHex: toHex(__CHAIN_IDS.bera_testnet)
  },
  [__CHAIN_IDS.sepolia]: {
    name: "Ethereum Sepolia",
    image: "/images/ethereum.svg",
    chainIDHex: toHex(__CHAIN_IDS.sepolia)
  }
};
