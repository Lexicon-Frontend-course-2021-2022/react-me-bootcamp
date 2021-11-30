/* ============================================================================
 * Imports
 * ========================================================================= */
import { useSelector, useDispatch } from 'react-redux'
import actions from '../../state/actions'

/* ============================================================================
 * Styling
 * ========================================================================= */
import styled from "styled-components";

const Main = styled.main`
  background-color: ${(state) => state.theme.main.backgroundColor};
  color: ${(state) => state.theme.main.color};
`

/* ============================================================================
 * Component
 * ========================================================================= */
const Component = () => {

  /* Boilerplate */
  const state = useSelector(state => state);
  const dispatch = useDispatch();


  return (
    <>
      <Main>
        <button onClick={() => dispatch(actions.theme.light())}>Light theme</button>
        <button onClick={() => dispatch(actions.theme.dark())}>Dark theme</button>
      </Main>
    </>
  )
};

/* ============================================================================
 * Exports
 * ========================================================================= */
export default Component