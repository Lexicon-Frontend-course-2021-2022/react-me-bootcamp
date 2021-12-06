/* ============================================================================
 * Imports
 * ========================================================================= */
import { useSelector, useDispatch } from 'react-redux'
import actions from '../../../state/actions'

import { saveSettings } from '../../../lib/localStorage';

/* ============================================================================
 * Auth0
 * ========================================================================= */
import { useAuth0 } from "@auth0/auth0-react";

/* ============================================================================
 * Components
 * ========================================================================= */
import Slider from '../../Widgets/Slider';

/* ============================================================================
 * Styling
 * ========================================================================= */
import styled from "styled-components";

const Menu = styled.div`
  position: absolute;
  background-color: ${(state) => state.theme.header.backgroundColor};
  color: ${(state) => state.theme.header.color};
  width: 200px;
  padding: 0 5px 0 5px;
  border: 1px solid ${(state) => state.theme.header.color}4;
  border-top: none;
  cursor: pointer;
`;

const MenuItem = styled.div`
  height: 30px;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;

`;

const Br = styled.div`
  background-color: ${(state) => state.theme.header.color};
  height: 1px;
  opacity: 25%;
`;

const FloatRight = styled.div`
  margin: 0 0 0 auto;
`


/* ============================================================================
 * 
 * ========================================================================= */

const UserMenu = () => {

  /* Boilerplate */
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const { logout } = useAuth0();

  if (state.user && state.menu) {
    return (
      <Menu>

        <MenuItem
          onClick={() => {
            saveSettings(state.user.nickname, 'theme',
              state.theme.name === 'Dark' ? 'Light' : 'Dark');
            dispatch(actions.theme.toggle());

          }}
        >
          Dark theme
          <FloatRight>
            <Slider enabled={state.theme.name === 'Dark'} />
          </FloatRight>
        </MenuItem>

        <Br />

        <MenuItem onClick={() => {
          dispatch(actions.menu.hide());
          dispatch(actions.theme.light());
          //logout({ localOnly: true });
          logout();
          dispatch(actions.user.logout());
        }}>
          Logout
        </MenuItem>

      </Menu>
    )
  } else {
    return (
      <></>
    )
  }
};

/* ============================================================================
 * Exports
 * ========================================================================= */
export default UserMenu;