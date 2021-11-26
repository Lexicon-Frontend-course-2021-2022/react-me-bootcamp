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
 * Render app
 * ========================================================================= */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);