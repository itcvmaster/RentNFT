import styled from 'styled-components'

import Header from 'pages/Header';
import Footer from 'pages/Footer';
import Router from "./Router";
import ScrollToTop from 'components/ScrollToTop';
import GlobalStyle from './GlobalStyles';

const App: React.FC<any> = () => {
  return (
    <>
      <GlobalStyle />
      <Content>
        <Router />
      </Content>
      <Header />
      <Footer />
      <ScrollToTop />
    </>
  );
}

const Content = styled.div`
  display: flex;
  justify-content:  center;
  align-items: center;

  padding: 70px 0 0 0;
  min-height: calc(100vh - 70px - 100px);
`

export default App;