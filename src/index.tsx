import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';

const container = document.getElementById('root') as Element | DocumentFragment;
const appElement = (
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

ReactDOM.render(appElement, container);
reportWebVitals();
