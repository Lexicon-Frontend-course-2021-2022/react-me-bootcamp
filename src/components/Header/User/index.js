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
const Component = () => {

  /* Boilerplate */
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const { loginWithPopup, logout } = useAuth0();

  if (state.user) {
    return (
      <User>
        <Username>{state.user.name}</Username>
        <Gravatar
          url={state.user.picture}
          onClick={() => { logout({ localOnly: true }); dispatch(actions.user.logout()); }}
        />
      </User>
    )
  }
  else {
    return (
      <User>
        <Username>Not logged in</Username>
        <Gravatar
          url={state.theme.name === 'Dark' ? dark : light}
          onClick={() => loginWithPopup()}
        />
      </User>
    )

  }
};

/* ============================================================================
 * Exports
 * ========================================================================= */
export default Component