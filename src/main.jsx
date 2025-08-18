import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Imports your main App component

// This line finds the 'root' div and tells React to take control of it.
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode> is a helper that checks for potential problems in your app.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);