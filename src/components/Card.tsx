import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import ReactModal from 'react-modal';

import { Icon15x15 } from './Icon';
import Modal from './Modal';
import { Setting } from '../pages';

const Card: React.FC<any> = (props: any) => {
  let [showSetting, setShowSetting] = useState(false)

  return (
    <Container>
      <Img
        src={props.imagePath}
        onClick={() => setShowSetting(true)}
      />
      <Content>
        <Title>{props.title}</Title>
        {props.isMarket &&
          <MarInf>
            <TextGroup>
              <Text>{props.author}</Text>
              <Price>
                <Text>Daily price:</Text>
                <Text>{props.dailyPrice}</Text>
              </Price>
              <Price>
                <Text>Collateral:</Text>
                <Text>{props.collateral}</Text>
              </Price>
              <Text>{props.state}</Text>
            </TextGroup>
            <IconGroup>
              <Icon15x15 src="icons/ellipsis.svg" />
              <Switch onClick={() => {
                props.setLiked(!props.isLiked);
                if (props.onClick) props.onClick();
              }
              }>
                <Icon15x15
                  src={
                    props.isLiked ?
                      "icons/heart-red.svg" :
                      "icons/heart.svg"
                  }
                />
              </Switch>
            </IconGroup>
          </MarInf >
        }
        {props.isCol &&
          <ColInf>
            <Icon15x15 src={props.imageIcon} />
            <Text>{props.text}</Text>
          </ColInf>
        }
      </Content>
      <Modals>
        <ReactModal
          isOpen={showSetting}
          onRequestClose={() => setShowSetting(false)}
          className="no-class"
          overlayClassName="myoverlay"
        >
          <Modal
            title="Rent Settings"
            content={
              <Setting
                imagePath={props.imagePath}
                author={props.author}
                title={props.title}
                describe={props.describe}
                dailyPrice={props.dailyPrice}
                collateral={props.collateral}
              />
            }
            onClose={() => setShowSetting(false)}
          />
        </ReactModal>
        <ModalStyles />
      </Modals>
    </Container >
  );
}

const Modals = styled.div`
  z-index: 10;
  box-sizing: border-box;
`;
const ModalStyles = createGlobalStyle`
  .myoverlay {
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(111, 111, 111, 0.5);
  }

  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 400ms ease-in-out;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
  }
  `;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 36px #e4e4e4;
  border-radius: 22px;
`

const Content = styled.div`
  padding-top: 15px;
  padding-bottom: 23px;
  padding-right: 23px;
  padding-left: 23px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`

const Img = styled.img`
  width: 100%;
  max-width: none;
  aspect-ratio: 1;
  border-top-right-radius: 22px;
  border-top-left-radius: 22px;
  cursor: pointer;
`

const Title = styled.div`
  font-family: 'Pridi';
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  display: flex;    
  align-items: center;
  justify-content: center;
`

const Price = styled.div`
  display: flex;
  justify-content: space-between;
`

const MarInf = styled.div`
  display: flex;
  justify-content: space-between;
`

const ColInf = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const IconGroup = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 16px;
`

const Switch = styled.div`
  display: flex;
`

const TextGroup = styled.div`
  font-family: 'Pridi';
  font-weight: 400;
  font-size: 16px;
  color: #000000;
`
const Text = styled.div`
  font-family: 'Pridi';
  font-weight: 400;
  font-size: 14px;
  color: #707A83;
`

export default Card;