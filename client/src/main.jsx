import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
const Root = () => (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);

export const server='https://api.coingecko.com/api/v3';

export const stockServer = 'http://api.marketstack.com/v1/';
