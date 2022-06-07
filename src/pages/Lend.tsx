import styled from 'styled-components';

import { LendCard } from 'components';
import GetData from 'utils/getData';
import data from '../utils/testData.json';

const Lend: React.FC<any> = () => {

  return (
    <Container>
      <Content>
        {data.map((_data: any, index: number) => (
          <LendCard
            key={index}
            imagePath={_data.imagePath}
            title={_data.title}
            author={_data.author}
            dailyPrice={_data.dailyPrice}
            collateralPrice={_data.collateralPrice}
            priceUnit={_data.priceUnit}
            lenderAdd={_data.lenderAdd}
            contractAdd={_data.contractAdd}
            state={_data.state}
            describe={_data.describe}
          />
        ))}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: block;
  padding: 20px;
  box-sizing: border-box;
`

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default Lend;