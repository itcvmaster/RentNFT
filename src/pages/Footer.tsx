import styled from 'styled-components';

import { Icon30x30 } from 'components/Icon';
import { FacebookUrl, TwitterUrl, LinkedinUrl } from 'utils';

const Footer: React.FC = () => {
  return (
    <FooterBar>
      <Copyright>
        © NFTLAND, Inc. All rights reserved.
      </Copyright>
      <Section>
        <a
          href={FacebookUrl}
          target="_blank"
          rel="noreferrer"
        >
          <Icon30x30 src="icons/facebook.svg" />
        </a>
        <a
          href={TwitterUrl}
          target="_blank"
          rel="noreferrer"
        >
          <Icon30x30 src="icons/twitter.svg" />
        </a>
        <a
          href={LinkedinUrl}
          target="_blank"
          rel="noreferrer"
        >
          <Icon30x30 src="icons/linkedin.svg" />
        </a>
      </Section>
    </FooterBar>
  );
}

const FooterBar = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  flex-direction: column;
  padding: 0;
  justify-content: center;
  display: flex;
  align-items: center;
  background: var(--blue);
  color: var(--shade-8);
  gap: 20px;
`;
const Section = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;
const Copyright = styled.span`
  font-weight: 300;
  font-size: 16px;
  color: var(--shade-6);
`;

export default Footer