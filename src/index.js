/* ============================================================================
 * Fonts
 * ========================================================================= */
import './fonts.css';

/* ============================================================================
 * Components
 * ========================================================================= */
import App from './components/App';

/* ============================================================================
 * react
 * ========================================================================= */
import React from 'react';
import ReactDOM from 'react-dom';

/* ============================================================================
 * Redux
 * ========================================================================= */
import { Provider } from 'react-redux';
import store from './state';

/* ============================================================================
 * Auth0
 * ========================================================================= */

import { Auth0Provider } from "@auth0/auth0-react";
import auth0 from "./config/auth0";

/* ============================================================================
 * Render app
 * ========================================================================= */
ReactDOM.render(
  <Auth0Provider
    domain={auth0.domain}
    clientId={auth0.clientId}
    redirectUri={window.location.origin}>
    <Provider store={store}>
      <App />
    </Provider >
  </Auth0Provider>
  ,
  document.getElementById('root')
);