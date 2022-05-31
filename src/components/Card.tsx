import styled from 'styled-components';
import { useState } from 'react';

import { Icon15x15 } from './Icon';
import Modal from './Modal';

export const MarketCard: React.FC<any> = (props: any) => {
  let [showModal, setShowModal] = useState(false)
  return (
    <Container>
      <Img
        src={props.imagePath}
        onClick={() => setShowModal(true)}
      />
      <Content>
        <Title>{props.title}</Title>
        <Line>{props.author}</Line>
        <Line>
          Daily Price
          <div>
            {props.dailyPrice}
            {props.priceUnit}
          </div>
        </Line>
        <Line>
          Collateral
          <div>
            {props.collateralPrice}
            {props.priceUnit}
          </div>
        </Line>
        <Line>
          {props.state}
          <div style={{ display: "flex", gap: "10px" }}>
            <Icon15x15 src="icons/ellipsis.svg" />
            <Icon15x15 src={props.isLiked ? "icons/heart-red.svg" : "icons/heart.svg"} />
          </div>
        </Line>
      </Content>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        imagePath={props.imagePath}
        title={props.title}
        author={props.author}
        dailyPrice={props.dailyPrice}
        collateralPrice={props.collateralPrice}
        priceUnit={props.priceUnit}
        state={props.state}
        describe={props.describe}
      />
    </Container >
  );
}
export const CollectionCard: React.FC<any> = (props: any) => {

  return (
    <Container>
      <Img src={props.imagePath} />
      <Content>
        <Title>{props.author}</Title>
        <Opensea
          href={'https://opensea.io/collection/' + props.author}
          target="_blank"
        >
          <Icon15x15 src="icons/opensea.svg" />
          <Line>View on OpenSea</Line>
        </Opensea>
      </Content>
    </Container >
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 36px #e4e4e4;
  border-radius: var(--border-radius);
`
const Img = styled.img`
  width: 100%;
  max-width: none;
  aspect-ratio: 1;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  cursor: pointer;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px 20px 20px 20px;
  box-sizing: border-box;
`
const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: var(--shade-0);
  display: flex;
  align-items: center;
  justify-content: center;
`
const Line = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: var(--shade-3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`
const Opensea = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`



