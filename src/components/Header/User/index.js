/* ============================================================================
 * Imports
 * ========================================================================= */
import { useSelector, useDispatch } from 'react-redux'
import actions from '../../../state/actions'

import light from './user-light.png';
import dark from './user-dark.png';

/* ============================================================================
 * Auth0
 * ========================================================================= */
import { useAuth0 } from "@auth0/auth0-react";

/* ============================================================================
 * Components
 * ========================================================================= */
import Gravatar from './Gravatar';

/* ============================================================================
 * Styling
 * ========================================================================= */
import styled from "styled-components";

const User = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 5px;
  height: ${(state) => state.theme.header.height * 0.75}px;
`;


const Username = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  color: ${(state) => state.theme.header.color};
`;
/* ============================================================================
 * Component
 * ========================================================================= */
const UserWidget = () => {

  /* Boilerplate */
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  if (state.user) {
    return (
      <User onMouseEnter={() => { dispatch(actions.menu.show()); }}>
        <Gravatar url={state.user.picture} />
        <Username>{state.user.name}</Username>
      </User>
    )
  }
  else {
    return (
      <User onMouseEnter={() => { dispatch(actions.menu.show()); }}>
        <Gravatar url={state.theme.name === 'Dark' ? dark : light} />
        <Username>Not logged in</Username>
      </User>
    )

  }
};

/* ============================================================================
 * Exports
 * ========================================================================= */
export default UserWidget;