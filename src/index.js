import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Auth from './context/auth'
import { Provider } from 'react-redux';
import createStore from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth>
      <Provider store={createStore()}>
        <App />
      </Provider>
    </Auth>
  </React.StrictMode>
);
