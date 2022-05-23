import styled from 'styled-components';

import { Logo } from '../components';
import { Icon30x30 } from '../components/Icon';

const Footer: React.FC = () => {
  return (
    <FooterBar>
      <Section1>
        <Logo />
        <Copyright>
          © NFTLAND, Inc. All rights reserved.
        </Copyright>
      </Section1>
      <Section2>
        <Icon30x30 src="icons/facebook.svg" />
        <Icon30x30 src="icons/twitter.svg" />
        <Icon30x30 src="icons/linkedin.svg" />
      </Section2>
    </FooterBar>
  );
}

const FooterBar = styled.div`
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

const Section1 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 80px;
`

const Section2 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`
const Copyright = styled.span`
  font-weight: 300;
  font-size: 16px;
  color: var(--shade-6);
`


export default Footer