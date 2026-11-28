import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Writeup from './components/Writeup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {window.location.pathname === '/writeup' ? <Writeup /> : <App />}
  </React.StrictMode>
);