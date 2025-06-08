import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ use 'react-dom/client'
import App from './App';
import './index.css'; // Tailwind CSS import (if using)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
