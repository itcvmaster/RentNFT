import { useMoralisQuery } from "react-moralis";

const GetData = () => {
  const { fetch } = useMoralisQuery("NFT");
  const tempData: Array<any> = [];

  async function getData() {
    const results = await fetch();
    if (results) {
      for (let i = 0; i < results.length; i++) {
        const object = results[i];
        tempData.push({
          "imagePath": object.get("imagePath"),
          "author": object.get("author"),
          "title": object.get("title"),
          "state": object.get("state"),
          "dailyPrice": object.get("dailyPrice"),
          "collateralPrice": object.get("collateralPrice"),
          "priceUnit": object.get("priceUnit"),
          "lenderAdd": object.get("lenderAdd"),
          "contractAdd": object.get("contractAdd"),
          "describe": object.get("describe"),
        })
      }
      // console.log(tempData);
    }
  }
  getData();
  return tempData;
}

export default GetData;