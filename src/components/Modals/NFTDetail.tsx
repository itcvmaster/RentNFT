import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Icon30x30 } from '../Icon';
import { Button, Input } from "components";
import { mobile } from 'utils'
import { Actions } from "store/types";

const NFTDetail: React.FC<any> = (props) => {
  const { setShowModal, data, setConfirm, action } = props;
  const navigate = useNavigate();

  return (
    <Container>
      <Title>
        <Icon30x30 src="icons/logo.svg" />
        <Span>Settings</Span>
        <Icon30x30
          src="icons/close.svg"
          onClick={() => setShowModal(false)}
        />
      </Title>
      <Content>
        <Section>
          <Img src={data.imagePath} />
        </Section>
        <Section>
          <Block>
            <Lender>
              <Text>{data.lenderAdd ? "Lender" : ""}</Text>
              <A
                href={data.lenderAdd ? "https://etherscan.io/address/" + data.lenderAdd : ""}
                target="_blank"
              >
                {data.lenderAdd ? data.lenderAdd.slice(0, 5) + "..." + data.lenderAdd.slice(data.lenderAdd.length - 3) : ""}
              </A>
            </Lender>
            <TextClick
              onClick={() => {
                if (action === Actions.BUY_NFT) {
                  navigate("/Collections/" + data.author)
                  setShowModal(false)
                }
              }}
            >
              {data.author}
            </TextClick>
            <TextBlack>{data.title}</TextBlack>
            <A
              href={data.contractAdd ? "https://etherscan.io/address/" + data.contractAdd : ""}
              target="_blank"
            >
              {data.contractAdd ? data.contractAdd.slice(0, 5) + "..." + data.contractAdd.slice(data.contractAdd.length - 3) : ""}
            </A>
            <Text>{data.describe}</Text>
          </Block>
          {action === Actions.BUY_NFT && <Block>
            <Input
              title="Rent Duration"
              unit="Days"
            />
            <Line>
              <Text>Max Duration</Text>
              <Text>{data.maxDuration} Days</Text>
            </Line>
            <Line>
              <Text>Daily price</Text>
              <Text>{data.dailyPrice} {data.priceUnit}</Text>
            </Line>
            <Line>
              <Text>Collateral</Text>
              <Text>{data.collateralPrice} {data.priceUnit}</Text>
            </Line>
          </Block>}
          {action === Actions.LEND_NFT && <Block>
            <Input
              title="Max Duration"
              unit="Days"
            />
            <Input
              title="Daily price"
              unit="ETH"
            />
            <Input
              title="Collateral"
              unit="ETH"
            />
          </Block>}
          {action === Actions.PAYBACK_NFT && <Block>
            <Line>
              <Text>Rent Date</Text>
              <Text>{data.rentDate}</Text>
            </Line>
            <Line>
              <Text>Duration</Text>
              <Text>{data.maxDuration} Days</Text>
            </Line>
            <Line>
              <Text>Daily Price</Text>
              <Text>{data.dailyPrice} {data.priceUnit}</Text>
            </Line>
            <Line>
              <Text>Collateral Price</Text>
              <Text>{data.collateralPrice} {data.priceUnit}</Text>
            </Line>
            <Line>
              <Text>Total Amount</Text>
              <Text>{data.maxDuration * data.dailyPrice} {data.priceUnit}</Text>
            </Line>
          </Block>}
          <Button
            text="OK"
            disabled={data.state === "Rented"}
            onClick={() => {
              setShowModal(false);
              setConfirm(true);
            }}
          />
        </Section>
      </Content>
    </Container>
  )
}
//BEP20 USDT 0x5ddfdfeacc39afe3127536ca5e44d0aed5d3c39d

export default NFTDetail;

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
