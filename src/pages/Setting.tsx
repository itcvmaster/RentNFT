import { Button } from "components";
import styled from "styled-components";

const cardInf = {
  bigTitle: "Vacation Palette NFT #198",
  smallTitle : "vacation-palette-nft",
  dailyPrice : "20DAI",
  collateral : "500DAI",
  state : "Available",
  describe: "Vacation Palette NFT is a collection of 300 user-generated HTML canvas art pieces on Ethereum."
};

const Setting: React.FC<any> = (props) => {
  return (
    <Container>
      <Selection1>
        <Img src = "Nft/Vacation-Palette-Nft.jpg" />
      </Selection1>
      <Selection2>
        <TextGroup>
          <Text>{cardInf.smallTitle}</Text>
          <Title>{cardInf.bigTitle}</Title>
          <Text>{cardInf.describe}</Text>
        </TextGroup> 
        <RentSetting>
          <Duration>
            <Text>Rent Duration</Text>
            <Input />
          </Duration>
          <Price>
            <Text>Daily price</Text>
            <Text>{cardInf.dailyPrice}</Text>
          </Price>
          <Price>
            <Text>Collateral</Text>
            <Text>{cardInf.collateral}</Text>
          </Price>
        </RentSetting>
        <Button text="Rent Now" /> 
      </Selection2>    
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: center;
  padding: 40px;
  position: relative;
`;
const Selection1 = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;
const Selection2 = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow-x: hidden;
  overflow-y: auto;
`;
const Input = styled.input`
  box-sizing: border-box;
  background: #FFFFFF;
  border: 1px solid #474747;
  border-radius: var(--border-radius);
  font-weight: 400;
  font-size: 14px;
  width: 400px;
  padding: 5px 10px;
`;
const RentSetting = styled.div`
  display: flex;
  align-content: space-between;
  flex-direction: column;
  gap: 48px;
  padding: 10px;
`;
const Duration = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Img = styled.img`
  display: flex;
  width: 500px;
  height: 500px;
`;
const TextGroup = styled.div`
  padding: 10px;
`;
const Title = styled.div`
  font-family: 'Pridi';
  font-weight: 400;
  font-size: 32px;
  color: #000000;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const Text = styled.div`
  font-family: 'Pridi';
  font-weight: 400;
  font-size: 14px;
  color: #707A83;
  padding-top: 4px;
  padding-bottom: 4px;
`;
const Price = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Setting;