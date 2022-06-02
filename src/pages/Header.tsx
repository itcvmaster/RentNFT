import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { mobile, mobileSmall } from 'utils'
import { Logo } from 'components';
import { Icon30x30 } from 'components/Icon';

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Logo />
      <Section>
        <Menu onClick={() => navigate("/")} >
          Maket
        </Menu>
        <Menu onClick={() => navigate("/Collections")} >
          Collections
        </Menu>
      </Section>
      <Menu >
        Connect Wallet
      </Menu>
      <HidenMenuIcon src="icons/select.svg" />
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  z-index: 3;
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
  gap: 50px;
  ${mobile} {
    gap: 20px;
  }
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
  ${mobileSmall} {
    display: none;
  }
`;

const HidenMenuIcon = styled(Icon30x30)`
  display: none;
  ${mobileSmall} {
    display: block;
  }
`

export default Header;