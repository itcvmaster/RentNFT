import styled, { createGlobalStyle } from 'styled-components';
import ReactModal from 'react-modal';

import { Icon30x30 } from './Icon';
import { Button } from "components";
import { mobile, mobileSmall } from 'utils'
ReactModal.setAppElement("#root");

const Modal: React.FC<any> = (props) => {
  return (
    <>
      <ModalStyles />
      <ReactModal
        isOpen={props.showModal}
        onRequestClose={() => props.setShowModal(false)}
        overlayClassName="myoverlay"
        className="mycontent"
      >
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
                <Text>{props.author}</Text>
                <TextBlack>{props.title}</TextBlack>
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
      </ReactModal>
    </>
  );
}

export default Modal;

const ModalStyles = createGlobalStyle`
.myoverlay {
  z-index: 10;
} 
.mycontent {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;    
  background-color: rgba(255, 255, 255, 0.5);
}
`;
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
  ${mobile}, ${mobileSmall} {
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
  ${mobile}, ${mobileSmall} {
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

const Text = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: var(--shade-4);
`;
const TextBlack = styled.div`
  color: var(--shade-0);
  font-size: 24px;
  font-weight: 600;
`