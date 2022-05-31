import styled from 'styled-components';

import { Filter, MarketCard } from 'components';
import testData from '../utils/testData.json';

const Market: React.FC<any> = () => {
  return (
    <Container>
      <Filter />
      <Content>
        {testData.map((data, index) => (
          <MarketCard
            key={index}
            imagePath={data.imagePath}
            title={data.title}
            author={data.author}
            dailyPrice={data.dailyPrice}
            collateralPrice={data.collateralPrice}
            priceUnit={data.priceUnit}
            state={data.state}
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
  padding-bottom: 50px;
  box-sizing: border-box;
`

const Content = styled.div`
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  display: grid;
  gap: 30px;
  padding: 10px;
`

export default Market;