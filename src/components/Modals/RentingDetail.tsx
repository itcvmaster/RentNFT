import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useMoralis } from 'react-moralis';

import { Icon30x30 } from '../Icon';
import { Button, Input } from "components";
import { mobile } from 'utils'
import { Actions } from "store/types";

const RentingDetail: React.FC<any> = (props) => {
  const { setShowModal, imagePath, title, author, maxDuration, dailyPrice, collateralPrice, priceUnit, lenderAdd, contractAdd, state, describe, setConfirm } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useMoralis();

  return (
    <Container>
      <Title>
        <Icon30x30 src="icons/logo.svg" />
        <Span>Renting Details</Span>
        <Icon30x30
          src="icons/close.svg"
          onClick={() => setShowModal(false)}
        />
      </Title>
      <Content>
        <Section>
          <Img src={imagePath} />
        </Section>
        <Section>
          <Block>
            <Lender>
              <Text>{lenderAdd ? "Lender" : ""}</Text>
              <A
                href={lenderAdd ? "https://etherscan.io/address/" + lenderAdd : ""}
                target="_blank"
              >
                {lenderAdd ? lenderAdd.slice(0, 5) + "..." + lenderAdd.slice(lenderAdd.length - 3) : ""}
              </A>
            </Lender>
            <TextClick
              onClick={() => {
                navigate("/Collections/" + author)
                setShowModal(false)
              }}
            >
              {author}
            </TextClick>
            <TextBlack>{title}</TextBlack>
            <A
              href={contractAdd ? "https://etherscan.io/address/" + contractAdd : ""}
              target="_blank"
            >
              {contractAdd ? contractAdd.slice(0, 5) + "..." + contractAdd.slice(contractAdd.length - 3) : ""}
            </A>
            <Text>{describe}</Text>
          </Block>
          <Block>
            <Input
              title="Rent Duration"
              unit="Days"
            />
            <Line>
              <Text>Max Duration</Text>
              <Text>{maxDuration} Days</Text>
            </Line>
            <Line>
              <Text>Daily price</Text>
              <Text>{dailyPrice} {priceUnit}</Text>
            </Line>
            <Line>
              <Text>Collateral</Text>
              <Text>{collateralPrice} {priceUnit}</Text>
            </Line>
          </Block>
          <Button
            text="Rent Now"
            disabled={state === "Rented"}
            onClick={() => {
              if (isAuthenticated) {
                dispatch({ type: Actions.BUY_NFT, title: title });
                setShowModal(false);
              }
              setConfirm(true);
            }}
          />
        </Section>
      </Content>
    </Container>
  )
}

export default RentingDetail;

const Container = styled.div`
  width: 90%;
  max-height: 90%;
  display: block;
  box-shadow: 0 8px 36px #e4e4e4;
  background: var(--shade-8);
  overflow: auto;
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--blue);
  height: 60px;
  box-sizing: border-box;
  padding: 0 20px;
`;
const Content = styled.div`
  display: flex;  
  ${mobile} {
    flex-direction: column;
  }
  box-sizing: border-box;
  background: var(--shade-8);
`;
const Span = styled.span`
  font-weight: 400;
  font-size: 24px;
  color: var(--shade-8);
`;
const Section = styled.div`
  width: 50%;
  ${mobile} {
    width: 100%;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 50px;
  box-sizing: border-box;
`;
const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 500px;
`;
export const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Img = styled.img`
  width: 100%;
  max-width: 500px;
  aspect-ratio: 1;
  box-sizing: border-box;
`;

const Lender = styled.div`
  display: flex;
  gap: 20px;
`

export const Text = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: var(--shade-4);
`;
export const TextBlack = styled.div`
  color: var(--shade-0);
  font-size: 24px;
  font-weight: 600;
`
export const TextClick = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: var(--shade-2);
  cursor: pointer;
`;
const A = styled.a`
  font-weight: 400;
  font-size: 14px;
  color: var(--shade-2);
  cursor: pointer;
  text-decoration: none;
`;