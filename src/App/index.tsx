import styled from 'styled-components'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from 'pages/Header';
import Footer from 'pages/Footer';
import Router from "./Router";
import ScrollToTop from 'components/ScrollToTop';
import GlobalStyle from './GlobalStyles';
import { Actions } from 'store/types';

const App: React.FC<any> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: Actions.APP_INIT });
  });

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
  padding: 70px 0 0 0;
  min-height: calc(100vh - 70px - 100px);
`

export default App;