import styled from 'styled-components';
import { useState } from 'react';

import { Filter, Card } from 'components';
import testData from './testData.json';

const Market: React.FC<any> = (props: any) => {
  let [isMarket, setMarket] = useState(true);
  let [isLiked, setLiked] = useState(false);
  return (
    <Container>
      <Filter />
      <Content>
        {testData.map(data => (
          <Card
            imagePath={data.imagePath}
            isMar={isMarket}
            title={data.title}
            dailyPrice={data.dailyPrice}
            collateral={data.collateralPrice}
            state={data.state}
            like={data.isLiked}
            setLike={setLiked}
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

export default Market;