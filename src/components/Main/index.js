/* ============================================================================
 * Imports
 * ========================================================================= */
import { useSelector } from 'react-redux'

import { Routes, Route } from 'react-router-dom';

import React from 'react';


/* ============================================================================
 * Components
 * ========================================================================= */

import UserMenu from './Menu';

// Pages
import MainPage from './Pages/Main';
import AboutPage from './Pages/About';
import HelpPage from './Pages/Help';

/* ============================================================================
 * Styling
 * ========================================================================= */
import styled from "styled-components";


const Main = styled.main`
  color: ${(state) => state.theme.main.color};
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

/* ============================================================================
 * Component
 * ========================================================================= */
const MainArea = () => {

  /* Boilerplate */
  const state = useSelector(state => state);
  //  const dispatch = useDispatch();

  // Redirect not logged in users to /
  if (!state.user && window.location.pathname !== '/') {
    window.location.pathname = '/';
  }

  return (
    <>
      <Main>
        <UserMenu />

        <Centered>
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            {state.user && <Route exact path="/about" element={<AboutPage />} />}
            {state.user && <Route exact path="/help" element={<HelpPage />} />}
          </Routes>
        </Centered>
      </Main>
    </>
  )
};

/* ============================================================================
 * Exports
 * ========================================================================= */
export default MainArea

