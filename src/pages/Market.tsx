import styled from 'styled-components';
import { useState } from 'react';

import { Filter, Card } from 'components';

const cardInf = {
  title : "vacation-palette-nft",
  dailyPrice : "20DAI",
  collateral : "500DAI",
  state : "Available"
};

const Market: React.FC<any> = (props: any) => {
  let [isMar, setIsMar] = useState(true);
  let [like, setLike] = useState(false);
  return (
    <Container>
      <Filter />
      <Content>
        <Card
          isMar = {isMar}  
          title = {cardInf.title}
          dailyPrice = {cardInf.dailyPrice}
          collateral = {cardInf.collateral}
          state = {cardInf.state}
          like = {like}
          setLike = {setLike}
        />
        <Card />
        <Card />  
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: block;
  padding: var(--padding);
  box-sizing: border-box;
`

const Content = styled.div`
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  display: grid;
  gap: 30px;
  padding: 10px;
`

export default Market;