import styled from 'styled-components';
import { useMoralis } from 'react-moralis';
import { useSelector } from 'react-redux';

import { DefaultCard } from 'components';
import { Actions } from 'store/types';

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
          <DefaultCard
            key={index}
            action={Actions.PAYBACK_NFT}
            dataIndex={index}
            data={_data}
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