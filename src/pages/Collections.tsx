import styled from 'styled-components';
import { useState } from 'react';

import { Filter, Card } from 'components';
import testData from './testData.json';

const Collections: React.FC<any> = (props: any) => {
  let [isCol, setIsCol] = useState(true);
  return (
    <Container>
      <Filter />
      <Content>
        {testData.map(data => (
          <Card  
            imagePath={data.imagePath}
            title={data.title} 
            isCol = {isCol} 
            imageIcon={data.imageIcon}
            text={data.text}
            describe={data.describe}
          />
        ))}
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