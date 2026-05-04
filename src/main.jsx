/**
 * @file main.jsx
 * @description Application entry point. Mounts the React tree into #root
 *              and imports global styles.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
