import { toHex } from "viem";

export const __CHAIN_IDS__ = {
  bera_testnet: 80085,
  sepolia: 11155111
};

export const __CHAIN_INFO__ = {
  [__CHAIN_IDS__.bera_testnet]: {
    name: "bera testnet",
    image: "/images/berachain.svg",
    chainIDHex: toHex(__CHAIN_IDS__.bera_testnet),
    isTestnet: true
  },
  [__CHAIN_IDS__.sepolia]: {
    name: "Ethereum Sepolia",
    image: "/images/ethereum.svg",
    chainIDHex: toHex(__CHAIN_IDS__.sepolia),
    isTestnet: true
  }
};

export const __PROVIDERS__ = {
  metaMask: {
    image: "/images/metamask.svg",
    name: "metamask"
  },
  injected: {
    image: "/images/metamask.svg",
    name: "metamask"
  },
  walletConnect: {
    image: "/images/metamask.svg",
    name: "walletConnect"
  },
  coinbaseWallet: {
    image: "/images/coinbase.svg",
    name: "coinbase"
  },
  safe: {
    image: "/images/safe.svg",
    name: "safe"
  }
};

export const __STRINGS__ = {
  app_title: "moniswap",
  __networks__: {
    mainnet: "mainnet",
    testnet: "testnet"
  },
  __link_titles__: {
    swap: "swap",
    overview: "overview",
    pools: "pools",
    vote: "vote",
    lock: "lock",
    incentivize: "incentivize",
    launchpad: "launchpad",
    early_access: "early access",
    nfts: "NFTs"
  },
  __headers__: {
    call_to_swap: "Swap between your favorite Berachain assets on Moniswap."
  },
  __actions__: {
    connect_wallet: "connect wallet",
    provide_feedback: "provide feedback",
    slippage: "slippage"
  },
  __misc__: {
    v: "Moniswap v1.0.0"
  },
  __lng__: {
    francais: "fr",
    english: "en",
    español: "es"
  }
};

export const __TRANSLATION__ = {
  en: {
    translation: {
      [__STRINGS__.app_title]: __STRINGS__.app_title,
      ...__STRINGS__.__link_titles__,
      ...__STRINGS__.__actions__,
      ...__STRINGS__.__misc__,
      ...__STRINGS__.__headers__
    }
  },
  fr: {
    translation: {
      [__STRINGS__.app_title]: __STRINGS__.app_title,
      [__STRINGS__.__link_titles__.swap]: "échanger",
      [__STRINGS__.__link_titles__.early_access]: "accès anticipé",
      [__STRINGS__.__link_titles__.overview]: "vue générale de",
      [__STRINGS__.__link_titles__.incentivize]: "inciter",
      [__STRINGS__.__link_titles__.lock]: "coffres",
      [__STRINGS__.__link_titles__.pools]: "liquidité",
      [__STRINGS__.__link_titles__.vote]: "vote",
      [__STRINGS__.__actions__.connect_wallet]: "connecter le portefeuille",
      [__STRINGS__.__actions__.provide_feedback]: "donner votre avis",
      [__STRINGS__.__link_titles__.launchpad]: "rampe de lancement",
      [__STRINGS__.__headers__.call_to_swap]: "Échangez entre vos actifs Berachain préférés sur Moniswap."
    }
  },
  es: {
    translation: {
      [__STRINGS__.__link_titles__.swap]: "intercambio",
      [__STRINGS__.__link_titles__.early_access]: "acceso temprano",
      [__STRINGS__.__link_titles__.overview]: "descripción general",
      [__STRINGS__.__link_titles__.incentivize]: "incentivar",
      [__STRINGS__.__link_titles__.lock]: "caja de seguridad",
      [__STRINGS__.__link_titles__.pools]: "liquidez",
      [__STRINGS__.__link_titles__.vote]: "votar",
      [__STRINGS__.__actions__.connect_wallet]: "conectar billetera",
      [__STRINGS__.__actions__.provide_feedback]: "dar opinion",
      [__STRINGS__.__link_titles__.launchpad]: "plataforma de lanzamiento",
      [__STRINGS__.__headers__.call_to_swap]: "Intercambie entre sus activos Berachain favoritos en Moniswap."
    }
  }
};

export const __LANGUAGES__ = {
  [__STRINGS__.__lng__.francais]: "français",
  [__STRINGS__.__lng__.english]: "english",
  [__STRINGS__.__lng__.español]: "español"
};
