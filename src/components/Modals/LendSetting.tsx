import styled from "styled-components";

import { Icon30x30 } from '../Icon';
import { Button, Input } from "components";
import { mobile } from 'utils'

const LendSetting: React.FC<any> = (props) => {
  return (
    <Container>
      <Title>
        <Icon30x30 src="icons/logo.svg" />
        <Span>Lend Setting</Span>
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
            <TextClick >
              {props.author}
            </TextClick>
            <TextBlack>{props.title}</TextBlack>
            <Text>{props.describe}</Text>
          </Block>
          <Block>
            <Input
              title = "Max Duration"
              unit = "Days"
            />
            <Input
              title = "Daily price"
              unit = "ETH"
            />
            <Input
              title = "Collateral"
              unit = "ETH"
            />
          </Block>
          <Button 
            text="Lend Now" 
            onClick={() => props.setConfirm(true)}
          />
        </Section>
      </Content>
    </Container>
  )
}

export default LendSetting;

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
  cursor: pointer; 
  user-select: none;
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