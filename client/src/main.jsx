import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import CryptoApp from './CryptoApp.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
// import { ChakraProvider, theme } from '@chakra-ui/react';

const Root = () => (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);

// ReactDOM.createRoot(document.getElementById('crypto-root')).render(
//   <ChakraProvider theme={theme}>
//     <CryptoApp />
//   </ChakraProvider>
// );
export const server='https://api.coingecko.com/api/v3';



// import ReactDOM from 'react-dom/client';
// import App from './App';
// import {ChakraProvider, theme} from "@chakra-ui/react";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//   <ChakraProvider theme={theme}>
//     <App />
//   </ChakraProvider>
//   </React.StrictMode>
// );
