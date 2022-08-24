import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import 'antd/dist/antd.css';
import Header from './components/Header';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>
);
