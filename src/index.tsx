import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from 'react-moralis';

import App from './App';
import { MORALIS_TEST_SERVER } from 'utils/constants';

const container = document.getElementById('root') as Element | DocumentFragment;
const root = ReactDOM.createRoot(container)
const appElement = (
  <React.StrictMode>
    <MoralisProvider
      serverUrl={MORALIS_TEST_SERVER.serverUrl}
      appId={MORALIS_TEST_SERVER.appId}
    >
      <HashRouter>
        <App />
      </HashRouter>
    </MoralisProvider>
  </React.StrictMode>
);
root.render(appElement);

reportWebVitals();
