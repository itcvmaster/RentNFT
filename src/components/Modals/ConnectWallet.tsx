import styled from "styled-components";
import { useEffect, useRef } from "react";

import { mobileSmall } from 'utils'
import { Icon50x50 } from "components/Icon";
import { TextBlack, Text } from "./NFTDetail";

const ConnectWallet: React.FC<any> = (props) => {

  const selector: any = useRef(null);
  const onClickOutside = (e: any) => {
    if (!selector || !selector?.current) return;
    if (!selector.current.contains(e.target)) {
      props.setShowModal(false);
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    }
  });

  return (
    <Container ref={selector}>
      <Card onClick={props.onClickWallet}>
        <Icon50x50 src="icons/metamask.svg" />
        <TextBlack>MetaMask</TextBlack>
        <Text>{props.isAuthenticated ? "Disconnect to your MetaMask Wallet" : "Connect to your MetaMask Wallet"}</Text>
      </Card>
    </Container>
  )
}

export default ConnectWallet;

const Container = styled.div`
  width: 400px;
  max-height: 600px;
  display: block;
  box-shadow: 0 8px 36px #e4e4e4;
  background: var(--shade-8);
  overflow: auto;
  border-radius: 18px;
  ${mobileSmall} {
    width: 100%;
  }
`;
const Card = styled.div`
  cursor: pointer;
  width: 100%;
  height: 150px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`
