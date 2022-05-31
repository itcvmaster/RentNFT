import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import App from './App';

const container = document.getElementById('root') as Element | DocumentFragment;
const root = ReactDOM.createRoot(container)
const appElement = (
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
root.render(appElement);

reportWebVitals();
