import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Icon30x30 } from '../Icon';
import { Button } from "components";
import { mobile } from 'utils'

const RentingDetail: React.FC<any> = (props) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Title>
        <Icon30x30 src="icons/logo.svg" />
        <Span>Renting Details</Span>
        <Icon30x30
          src="icons/close.svg"
          onClick={() => props.setShowModal(false)}
        />
      </Title>
      <Content>
        <Section>
          <Img src={props.imagePath} />
        </Section>
        <Section>
          <Block>
            <Lender>
              <Text>{props.lenderAdd ? "Lender" : ""}</Text>
              <A
                href={props.lenderAdd ? "https://etherscan.io/address/" + props.lenderAdd : ""}
                target="_blank"
              >
                {props.lenderAdd ? props.lenderAdd.slice(0, 5) + "..." + props.lenderAdd.slice(props.lenderAdd.length - 3) : ""}
              </A>
            </Lender>
            <TextClick
              onClick={() => {
                navigate("/Collections/" + props.author)
                props.setShowModal(false)
              }}
            >
              {props.author}
            </TextClick>
            <TextBlack>{props.title}</TextBlack>
            <A
              href={props.contractAdd ? "https://etherscan.io/address/" + props.contractAdd : ""}
              target="_blank"
            >
              {props.contractAdd ? props.contractAdd.slice(0, 5) + "..." + props.contractAdd.slice(props.contractAdd.length - 3) : ""}
            </A>
            <Text>{props.describe}</Text>
          </Block>
          <Block>
            <Line>
              <Text>Rent Duration</Text>
              <Input />
            </Line>
            <Line>
              <Text>Daily price</Text>
              <Text>{props.dailyPrice}{props.priceUnit}</Text>
            </Line>
            <Line>
              <Text>Collateral</Text>
              <Text>{props.collateralPrice}{props.priceUnit}</Text>
            </Line>
          </Block>
          <Button text="Rent Now" />
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
const Input = styled.input`
  box-sizing: border-box;
  border: 1px solid var(--shade-4);
  border-radius: var(--border-radius);
  font-weight: 400;
  font-size: 14px;
  width: 50%;
  padding: 5px 10px;
  text-align: right;
`;
const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 500px;
`;
const Line = styled.div`
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