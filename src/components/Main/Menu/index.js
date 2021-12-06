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
  padding: 5px 0 5px 0;
  position: absolute;
  background-color: ${(state) => state.theme.header.backgroundColor};
  color: ${(state) => state.theme.header.color};
  width: 200px;
  border: 1px solid ${(state) => state.theme.header.color}4;
  border-top: none;
  cursor: pointer;
`;

const MenuItem = styled.div`
  height: 26px;
  font-size: 18px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 5px;
`;

const Section = styled.div`
  margin: 0 0 0 2px;
  font-size: 10px;
`

const Br = styled.div`
  background-color: ${(state) => state.theme.header.color};
  height: 1px;
  opacity: 25%;
  margin-top: 10px;
`;

const FloatRight = styled.div`
  margin: 0 3px 0 auto;
`


/* ============================================================================
 * 
 * ========================================================================= */

const UserMenu = () => {

  /* Boilerplate */
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const { logout, loginWithPopup } = useAuth0();

  if (state.menu) {
    if (state.user) {
      return (
        <Menu onMouseLeave={() => dispatch(actions.menu.hide())}>

          <Section>Navigation</Section>

          <MenuItem>Main page</MenuItem>
          <MenuItem>Another page</MenuItem>
          <MenuItem>A third page</MenuItem>

          <Br />
          <Section>Settings</Section>

          <MenuItem onClick={() => {
            saveSettings(state.user.nickname, 'theme', state.theme.name === 'Dark' ? 'Light' : 'Dark');
            dispatch(actions.theme.toggle());
          }}>
            Use dark theme
            <FloatRight><Slider enabled={state.theme.name === 'Dark'} /></FloatRight>
          </MenuItem>


          <Br />
          <Section>User</Section>

          <MenuItem onClick={() => {
            dispatch(actions.menu.hide());
            dispatch(actions.theme.light());
            logout();
            dispatch(actions.user.logout());
          }}>
            <b>Log out</b>
          </MenuItem>

        </Menu>
      )
    } else {
      return (
        <Menu onMouseLeave={() => dispatch(actions.menu.hide())}>
          <Section>User</Section>

          <MenuItem onClick={() => {
            dispatch(actions.menu.hide());
            loginWithPopup();
          }}>
            <b>Log in</b>
          </MenuItem>
        </Menu>
      )
    }

  } else {
    return <></>;
  }

};

/* ============================================================================
 * Exports
 * ========================================================================= */
export default UserMenu;