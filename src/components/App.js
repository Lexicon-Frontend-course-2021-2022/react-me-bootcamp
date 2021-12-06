/* ============================================================================
 * Imports
 * ========================================================================= */
import { useSelector, useDispatch } from 'react-redux'
import actions from '../state/actions'

import { loadSettings } from '../lib/localStorage';

/* ============================================================================
 * Styled components
 * ========================================================================= */
import styled, { ThemeProvider } from 'styled-components';

/* ============================================================================
 * Auth0
 * ========================================================================= */
import { useAuth0 } from "@auth0/auth0-react";

/* ============================================================================
 * Components
 * ========================================================================= */
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

/* ============================================================================
 * Style
 * ========================================================================= */
import { createGlobalStyle } from 'styled-components';

/* ----------------------------------------------------------------------------
 * Global style
 * ------------------------------------------------------------------------- */
const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box;
  font-family: 'Outfit', sans-serif;
  transition: 0.1s;
}

body {
  margin: 0;
  height: 100wh;
  width: 100wv;
}

button {
  border: none;
  background-color: ${(state) => state.theme.header.backgroundColor};
  color: ${(state) => state.theme.header.color};
  cursor: pointer;
  height: 28px;
  margin 1px;
  border-radius: 14px;
  padding: 0 10px;
  transition: 0.1s;
  opacity: 0.5;
}

button.selected {
  opacity: 1;
}

button:hover {
  background-color: ${(state) => state.theme.header.color};
  color: ${(state) => state.theme.header.backgroundColor};
  opacity: 1;
}

`;

/* ----------------------------------------------------------------------------
 * App style
 * ------------------------------------------------------------------------- */
const App = styled.div`
  height: 100%;
  display: grid;
  grid-template-areas: 
    "header" 
    "main" 
    "footer"
  ;
  grid-template-rows: 
    ${(state) => state.theme.header.height}px
    calc(100vh - ${(state) => state.theme.header.height}px - ${(state) => state.theme.footer.height}px) 
    ${(state) => state.theme.footer.height}px
  ;
`

/* ============================================================================
 * Component
 * ========================================================================= */
function TheApp() {

  /* Boilerplate */
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const { user, isAuthenticated } = useAuth0();

  if (isAuthenticated && !state.user) {
    /* 
     * Wrap dispatch using a timer with timeout of 0ms. 
     *
     * This seems to be a good workaround for the following error: 
     * 
     * "Warning: Cannot update a component (`<whatever>`) while rendering a 
     * different component (`<whatever_else`). To locate the bad setState() call
     * inside `<wherever>`" 
     */
    setTimeout(() => {
      dispatch(actions.user.login(user));
      dispatch(actions.theme.set(loadSettings(user.nickname, 'theme')));
    }
      , 0);


  }

  if (!isAuthenticated && state.user) {
    dispatch(actions.user.logout());
  }

  return (
    <ThemeProvider theme={state.theme}>
      <GlobalStyle />
      <App>
        <Header />
        <Main />
        <Footer />
      </App>
    </ThemeProvider>
  );
}

/* ============================================================================
 * Exports
 * ========================================================================= */
export default TheApp;
