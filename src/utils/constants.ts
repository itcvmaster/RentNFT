export const HD = `@media screen and (min-width: 1920px)`;
export const desktop = `@media screen and (max-width: 1439px)`;
export const tablet = `@media screen and (max-width: 1023px)`;
export const mobile = `@media screen and (max-width: 767px)`;
export const mobileSmall = `@media screen and (max-width: 474px)`;

export const CollateralSelectNames = [
  "All",
  "Collateralized",
  "Collateral-Free"
];

export const StateSelectNames = [
  "All",
  "Available",
  "Rented"
];

export const PriceRangeSelectNames = [
  "All"
];

export const SortSelectNames = [
  "Newest",
  "Oldest",
  "Low to High Price",
  "High to Low Price",
  "Low to High Collateral",
  "High to Low Collateral",
  "Alphabetically A-Z",
  "Alphabetically Z-A"
];

export const FacebookUrl = "https://twitter.com/renftlabs";
export const TwitterUrl = "https://twitter.com/renftlabs";
export const LinkedinUrl = "https://twitter.com/renftlabs";

export const MORALIS_TEST_SERVER = {
  serverUrl: "https://3q4jb1aybome.usemoralis.com:2053/server",
  appId: "cantrdNh18JiW5QGDXLUSW5Fj3H6zegkjS6TrqUQ",
  masterKey: "QfkM3L7nI9c7VybfFJIZlf0an5BaloKCybLHQYYU",
  dashboardUser: "Jb3eDedkDQ",
  dashboardPassword: "PM9fVONL0B",
  cliApi: "Zx9pwWhPlE9jkzS",
  cliApiSecret: "hrqc0joZoN7syIq",
  mongoDbIp: "142.93.11.181:56728",
}

export const NETWORK_NAMES = {
  1: "Ethereum",
  3: "ropsten",
  4: "rinkeby"
};

export const SUPPORTED_CHAIN_ID = 1;

export const CONNECT_WALLET_TYPE = {
  unConnected: "Connect Wallet",
  connecting: "Connecting..."
}

export const DATA_TYPE = [
  "imagePath",
  "author",
  "title",
  "state",
  "dailyPrice",
  "collateralPrice",
  "priceUnit",
  "lenderAdd",
  "contractAdd",
  "describe"
]

export interface DataFormat {
  imagePath: string,
  author: string,
  title: string,
  state: string,
  dailyPrice: number,
  collateralPrice: number,
  priceUnit: string,
  lenderAdd: string,
  contractAdd: string,
  describe?: string
}