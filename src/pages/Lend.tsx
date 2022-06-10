import styled from 'styled-components';
import { useMoralis } from 'react-moralis';
import { useSelector } from 'react-redux';

import { LendCard } from 'components';

const Lend: React.FC<any> = () => {
  const data = useSelector((state: any) => state.myNFTs);
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
          <LendCard
            key={index}
            dataIndex={index}
            imagePath={_data.imagePath}
            title={_data.title}
            author={_data.author}
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
  width: 100%;
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

export default Lend;