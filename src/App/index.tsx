import styled from 'styled-components'

import Header from '../pages/Header';
import Footer from '../pages/Footer';
import Router from "./Router";
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
    </>
  );
}

const Content = styled.div`
  padding: 72px 0 10px 0;
`

export default App;