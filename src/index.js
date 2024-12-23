import React from 'react';
import ReactDOM from 'react-dom/client'; // ใช้ react-dom/client แทน react-dom
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';

// ใช้ createRoot แทน render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
