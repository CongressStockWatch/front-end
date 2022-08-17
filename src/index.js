import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Auth from './context/auth'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth>
        <App />
    </Auth>
  </React.StrictMode>
);
