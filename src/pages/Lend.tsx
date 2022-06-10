import styled from 'styled-components';
import { useMoralis } from 'react-moralis';
import { walletData as data} from 'utils/testData';
import { LendCard } from 'components';

const Lend: React.FC<any> = () => {
  const { isAuthenticated } = useMoralis();
  return (
    <Container>
      <Content>
        <Text isAuthenticated={isAuthenticated}>Nothing to show. Please connect to your Wallet.</Text>
        {isAuthenticated && data.map((_data, index) => (
          <LendCard
            key={index}
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
`

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Text = styled.span<{ isAuthenticated: boolean }>`
  font-size: 20px;
  display: ${props => props.isAuthenticated ? "none" : ""};
  color: var(--shade-3)
  align-items: center;
  justify-content: center;
  width: 100%;
`

export default Lend;