import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useMoralis } from 'react-moralis';

import { NETWORK_NAMES, SUPPORTED_CHAIN_ID, CONNECT_WALLET_TYPE } from 'utils'
import { mobile, mobileSmall } from 'utils'
import { Logo } from 'components';
import { Icon30x30 } from 'components/Icon';
import { Modal } from 'components';
import ConnectWallet from 'components/Modals/ConnectWallet';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const [isMoralisInitialized, setInitialized] = useState(false);
  const [isConnecting, setConnecting] = useState(false);
  const { authenticate, isAuthenticated, isInitialized, account, chainId, logout } = useMoralis();

  const onConnect = async () => {
    try {
      setConnecting(true);
      await authenticate({ signingMessage: "Log in using Moralis" });
      setConnecting(false);
      setShowModal(false);
    } catch (e) {
      console.log(e);
    }
  };

  const onDisconnect = async () => {
    try {
      await logout();
      setShowModal(false);
    } catch (e) {
      console.log(e);
    }
  };

  const onClickWallet = () => {
    console.log("Calling onClickWallet");
    if (!isAuthenticated) {
      onConnect();
    } else {
      onDisconnect();
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      // setConnecting(true);
    }
    if (!isMoralisInitialized && isInitialized) {
      if (isAuthenticated) {
        authenticate().then(() => setConnecting(false));
      }
      setInitialized(true);
    }
  }, [isMoralisInitialized, isInitialized, isAuthenticated, authenticate]);

  useEffect(() => {
    if (isMoralisInitialized && isAuthenticated && Number.parseInt(chainId || "0") !== SUPPORTED_CHAIN_ID) {
      window.alert(`Please switch to ${NETWORK_NAMES[SUPPORTED_CHAIN_ID]}`);
    }
  }, [isInitialized, isAuthenticated, chainId, isMoralisInitialized]);

  return (
    <Container id="sticky-header">
      <Logo />
      <Section>
        <Menu onClick={() => navigate("/")} >
          Maket
        </Menu>
        <Menu onClick={() => navigate("/Collections")} >
          Collections
        </Menu>
      </Section>
      <Menu onClick={() => setShowModal(true)}>
        {isAuthenticated ? account?.slice(0, 5) + "..." + account?.slice(account.length - 3) : (isConnecting ? CONNECT_WALLET_TYPE.connecting : CONNECT_WALLET_TYPE.unConnected)}
      </Menu>
      <HidenMenuIcon src="icons/select.svg" />
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        content={
          <ConnectWallet
            onClickWallet={onClickWallet}
            isAuthenticated={isAuthenticated}
            setShowModal={setShowModal}
          />
        }
      />
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