/* ============================================================================
 * Imports
 * ========================================================================= */
import { useSelector, useDispatch } from 'react-redux'
import actions from '../state/actions'

import { loadSettings } from '../lib/localStorage';

import { BrowserRouter as Router } from 'react-router-dom';

/* ============================================================================
 * Styled components
 * ========================================================================= */
import styled, { ThemeProvider } from 'styled-components';

import bgLight from './bg-light.png';
import bgDark from './bg-dark.png';

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
const backgroundImage = {
  Light: bgLight,
  Dark: bgDark
}

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
  background-image: url(${(state) => backgroundImage[state.theme.name]});
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


a {
  text-decoration: none;
  color: ${(state) => state.theme.main.color};

  &.header {
    color: ${(state) => state.theme.header.color};
  }
}

header {
  position: fixed;
  top: 0;
}

footer {
  position: fixed;
  top: calc(100vh - ${(state) => state.theme.footer.height}px);
}
`;

/* ----------------------------------------------------------------------------
 * App style
 * ------------------------------------------------------------------------- */
const App = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

/* ============================================================================
 * Component
 * ========================================================================= */
function TheApp() {

  /* Boilerplate */
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  /* Auth0 */
  const { user, isAuthenticated } = useAuth0();

  /* Handle login */
  if (isAuthenticated && !state.user) {
    /* 
     * Wrap dispatch using a timer with a timeout of 0ms. 
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
    }, 0);


  }

  /* Handle logout */
  if (!isAuthenticated && state.user) {
    dispatch(actions.user.logout());
  }

  return (
    <ThemeProvider theme={state.theme}>
      <GlobalStyle />
      <App>
        <Router>
          <Header />
          <Main />
          <Footer />
        </Router>
      </App>
    </ThemeProvider>
  );
}

/* ============================================================================
 * Exports
 * ========================================================================= */
export default TheApp;
