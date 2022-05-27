import styled from 'styled-components';
import { useState } from 'react';

import { Filter, Card } from 'components';

const Collections: React.FC<any> = (props: any) => {
  let [isCol, setIsCol] = useState(true);
  return (
    <Container>
      <Filter />
      <Content>
        <Card  
          title = 'vacation-palette-nft' 
          isCol = {isCol} 
          text = 'View on OpenSea' 
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
export default Collections;