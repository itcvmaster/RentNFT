import { IState, INFTFormat, Actions } from "./types";
import { marketData, walletData, rentData } from "utils/testData";

export const initState: IState = {
  marketNFTs: marketData,
  myNFTs: walletData,
  rentNFTs: rentData,
};

export function reducer(state: IState = initState, action: any): IState {
  let newState = { ...state };
  const returnIndex = (arr: INFTFormat[], title: string) => {
    let tempIndex = 0;
    arr.forEach((_data, index) => {
      if (_data.title === title) tempIndex = index;
    })
    return tempIndex;
  }
  switch (action.type) {
    case Actions.APP_INIT: {
      console.log("App has been initialzed.");
      break;
    }

    case Actions.LEND_NFT: {
      const newMarketNFTs = [state.myNFTs[action.dataIndex], ...state.marketNFTs];
      const newMyNFTs: any[] = [];
      state.myNFTs.forEach((_data, index) => {
        if (index !== action.dataIndex) newMyNFTs.push(_data);
      })
      newState = {
        ...state,
        marketNFTs: newMarketNFTs,
        myNFTs: newMyNFTs
      };
      console.log("Lended Sucessfully");
      break;
    }

    case Actions.PAYBACK_NFT: {
      const newMarketNFTs = [state.rentNFTs[action.dataIndex], ...state.marketNFTs];
      const newRentNFTs: any[] = [];
      state.rentNFTs.forEach((_data, index) => {
        if (index !== action.dataIndex) newRentNFTs.push(_data);
      })
      newState = {
        ...state,
        marketNFTs: newMarketNFTs,
        rentNFTs: newRentNFTs
      };
      console.log("PayBack Sucessfully");
      break;
    }

    case Actions.BUY_NFT: {
      const dataIndex = returnIndex(state.marketNFTs, action.title);
      const newMarketNFTs: any[] = [];
      state.marketNFTs.forEach((_data, index) => {
        if (index !== dataIndex) newMarketNFTs.push(_data);
      })
      const newRentNFTs = [state.marketNFTs[dataIndex], ...state.rentNFTs];
      newState = {
        ...state,
        marketNFTs: newMarketNFTs,
        rentNFTs: newRentNFTs
      };
      console.log("Rented Sucessfully");
      break;
    }
  }

  return newState;
}