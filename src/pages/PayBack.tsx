import styled from 'styled-components';
import { useMoralis } from 'react-moralis';
import { useSelector } from 'react-redux';

import { PayBackCard } from 'components';

const PayBack: React.FC<any> = () => {
  const data = useSelector((state: any) => state.rentNFTs);
  const { isAuthenticated } = useMoralis();
  return (
    <Container>
      <Content>
        {!isAuthenticated &&
          <Text>
            <span>
              Please connect to your Wallet.
            </span>
          </Text>}
        {isAuthenticated && data.map((_data: any, index: number) => (
          <PayBackCard
            key={index}
            dataIndex={index}
            imagePath={_data.imagePath}
            title={_data.title}
            author={_data.author}
            maxDuration={_data.maxDuration}
            dailyPrice={_data.dailyPrice}
            collateralPrice={_data.collateralPrice}
            priceUnit={_data.priceUnit}
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
  padding: 20px 20px 50px 20px;
  box-sizing: border-box;
`

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Text = styled.div`
  font-size: 20px;
  color: var(--shade-3);
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 70px - 100px - 70px);
`

export default PayBack;