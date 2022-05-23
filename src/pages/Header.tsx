import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { HD, desktop, tablet, mobile, mobileSmall } from 'components/utils/constants'
import { Search, Logo } from 'components';

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Logo />
      <Search />
      <Section>
        <Menu onClick={() => navigate("/")} >
          Market
        </Menu>
        <Menu onClick={() => navigate("/Collections")} >
          Collections
        </Menu>
      </Section>
      <Menu >
        Connect Wallet
      </Menu>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: var(--padding);
  background: var(--blue);
  color: var(--shade-8);
  gap: 20px;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 30px;
`;

const Menu = styled.button`
  font-weight: 300;
  font-size: 18px;
  border: 0;
  cursor: pointer; 
  background: transparent;
  color: var(--shade-7);
  :hover {
    color: var(--hover);
  }
`;

export default Header;