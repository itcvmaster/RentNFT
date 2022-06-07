import styled from "styled-components";
import { useNewMoralisObject } from "react-moralis";
import { useState } from "react";

import { Button, Input } from "components";
import { Line, Text } from "components/Modals/RentingDetail";

const Admin: React.FC<any> = () => {
  const { save } = useNewMoralisObject("NFT");
  const [imagePath, setImagePath] = useState("");
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [state, setState] = useState("");
  const [dailyPrice, setDailyPrice] = useState(0);
  const [collateralPrice, setCollateralPrice] = useState(0);
  const [priceUnit, setPriceUnit] = useState("");
  const [lenderAdd, setLenderAdd] = useState("");
  const [contractAdd, setContractAdd] = useState("");
  const [describe, setDescribe] = useState("");

  const saveObject = async () => {
    const data = {
      "imagePath": imagePath,
      "author": author,
      "title": title,
      "state": state,
      "dailyPrice": dailyPrice,
      "collateralPrice": collateralPrice,
      "priceUnit": priceUnit,
      "lenderAdd": lenderAdd,
      "contractAdd": contractAdd,
      "describe": describe
    };

    save(data, {
      onSuccess: (nft) => {
        console.log("New object created with objectId: " + nft.id);
      },
      onError: (error) => {
        console.log("Failed to create new object, with error code: " + error.message);
      },
    });
  }

  return (
    <Container>
      <Card>
        <Line >
          <Text>imagePath</Text>
          <Input onChange={setImagePath} />
        </Line>
        <Line >
          <Text>author</Text>
          <Input onChange={setAuthor} />
        </Line>
        <Line >
          <Text>title</Text>
          <Input onChange={setTitle} />
        </Line>
        <Line >
          <Text>state</Text>
          <Input onChange={setState} />
        </Line>
        <Line >
          <Text>dailyPrice</Text>
          <Input onChange={setDailyPrice} />
        </Line>
        <Line >
          <Text>collateralPrice</Text>
          <Input onChange={(setCollateralPrice)} />
        </Line>
        <Line >
          <Text>priceUnit</Text>
          <Input onChange={setPriceUnit} />
        </Line>
        <Line >
          <Text>lenderAdd</Text>
          <Input 
            onChange={setLenderAdd} 
          />
        </Line>
        <Line >
          <Text>contractAdd</Text>
          <Input onChange={setContractAdd} />
        </Line>
        <Line >
          <Text>describe</Text>
          <Input onChange={setDescribe} />
        </Line>
      </Card>
      <Button
        text="Add"
        onClick={saveObject}
      />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding);
  padding-top: 20px;
  padding-bottom: 50px;
  box-sizing: border-box;
  gap: 20px;
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  gap: 20px;
  border-radius: 18px;
  width: 800px;
`

export default Admin;