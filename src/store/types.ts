export interface INFTFormat {
  imagePath: string,
  author: string,
  title: string,
  state: string,
  maxDuration: number,
  dailyPrice: number,
  collateralPrice: number,
  priceUnit: string,
  lenderAdd: string,
  contractAdd: string,
  describe: string
};

export interface IState {
  marketNFTs: INFTFormat[],
  myNFTs: INFTFormat[],
  rentNFTs: INFTFormat[],
};

export const Actions = {
  APP_INIT: "APP_INIT",
  LEND_NFT: "LEND_NFT",       // Clicking on Lend Now button on Lend Page
  BUY_NFT: "BUY_NFT",         // Clicking on Buy Now button on Market/Collections Page
  PAYBACK_NFT: "PAYBACK_NFT", // Clicking on PayBack Now button on PayBack Page
};