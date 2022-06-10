import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Icon50x50 } from './Icon';

const Logo: React.FC<any> = () => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate("/")}>
      <Icon50x50 src="icons/logo.svg" />
      <Text>NFTLand</Text>
    </Container>
  )
}

const Container = styled.div`
  cursor: pointer; 
  user-select: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;

const Text = styled.div`
  font-weight: 600;
  font-size: 24px;
  color: var(--shade-7);
  font-family: dance;
`;

export default Logo;

