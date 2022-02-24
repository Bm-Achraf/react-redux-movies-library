import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';

import store from './features/store'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

import { Auth0Provider } from '@auth0/auth0-react';
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientID= process.env.REACT_APP_AUTH0_CLIENT_ID;

//React.StrictMode
ReactDOM.render(
  <Auth0Provider
   domain={domain} 
   clientId={clientID} 
   redirectUri={window.location.origin}>
    
    <Provider store={store}>
      <App />
    </Provider>

  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
