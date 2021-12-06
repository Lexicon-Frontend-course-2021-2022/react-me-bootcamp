/* ============================================================================
 * Imports
 * ========================================================================= */
//import { useDispatch, useSelector } from 'react-redux'
//import actions from '../../state/actions'

import UserMenu from './Menu';

/* ============================================================================
 * Styling
 * ========================================================================= */
import styled from "styled-components";


const Main = styled.main`
  background-color: ${(state) => state.theme.main.backgroundColor}; 
  color: ${(state) => state.theme.main.color};
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

/* ============================================================================
 * Component
 * ========================================================================= */
const MainArea = () => {

  /* Boilerplate */
  //  const state = useSelector(state => state);
  //  const dispatch = useDispatch();


  return (
    <>
      <Main>
        <UserMenu />
      </Main>
    </>
  )
};

/* ============================================================================
 * Exports
 * ========================================================================= */
export default MainArea