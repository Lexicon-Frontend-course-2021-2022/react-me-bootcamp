/* ============================================================================
 * Imports
 * ========================================================================= */
import { useSelector, useDispatch } from 'react-redux'
import actions from '../state/actions'

/* ============================================================================
 * Styled components
 * ========================================================================= */
import { ThemeProvider } from 'styled-components';

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
:root {
  /* Layout */
  --header-height: ${(state) => state.theme.header.height}px;
  --footer-height: 20px;
}

*,
*::after,
*::before {
  box-sizing: border-box;
  font-family: 'Titillium Web', sans-serif;
}

body {
  margin: 0;
  height: 100wh;
  width: 100wv;
}
`;

/* ----------------------------------------------------------------------------
 * App style
 * ------------------------------------------------------------------------- */
const AppStyle = createGlobalStyle`
.App {
  height: 100%;
  display: grid;
  grid-template-areas: "header" "main" "footer";
  grid-template-rows: var(--header-height) calc(100vh - var(--header-height) - var(--footer-height)) var(--footer-height);
}
`

/* ============================================================================
 * Component
 * ========================================================================= */
function App() {


  /* Boilerplate */
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const { user, isAuthenticated } = useAuth0();

  if (isAuthenticated && !state.user) {
    dispatch(actions.user.login(user));
  }

  if (!isAuthenticated && state.user) {
    dispatch(actions.user.logout());
  }
  console.log(state);

  return (
    <ThemeProvider theme={state.theme}>
      <GlobalStyle />
      <AppStyle />
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

/* ============================================================================
 * Exports
 * ========================================================================= */
export default App;
