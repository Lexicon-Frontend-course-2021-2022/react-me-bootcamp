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
import MenuItem from './Widgets/MenuItem';
import NavigationSection from './Widgets/NavigationSection';
import SectionHeader from './Widgets/SectionHeader';

/* ============================================================================
 * Styling
 * ========================================================================= */
import styled from "styled-components";

const Menu = styled.div`
  padding: 5px 0 5px 0;
  position: fixed;
  top: ${(state) => state.theme.header.height}px;
  background-color: ${(state) => state.theme.header.backgroundColor};
  color: ${(state) => state.theme.header.color};
  width: 200px;
  border: 1px solid ${(state) => state.theme.header.color}4;
  border-top: none;
  cursor: pointer;
  border-radius: 0 0 20px 0;
  opacity: 95%;
`;

/* Just a menu divider */
const MenuDivider = styled.div`
  background-color: ${(state) => state.theme.header.color};
  height: 1px;
  opacity: 25%;
  margin-top: 5px;
`;

const FloatRight = styled.div`
  margin: 0 3px 0 auto;
`


/* ============================================================================
 * Component
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

          {/* Navigation section */}
          <NavigationSection
            header='Navigation'
            items={
              [
                { path: '/', text: "Home" },
                { path: '/about', text: "About this app" },
                { path: '/help', text: "Help" },
              ]
            } />

          {/* Settings section */}
          <MenuDivider />
          <SectionHeader>Settings</SectionHeader>
          <MenuItem onClick={() => {
            saveSettings(state.user.nickname, 'theme', state.theme.name === 'Dark' ? 'Light' : 'Dark');
            dispatch(actions.theme.toggle());
          }}>
            Use dark theme
            <FloatRight><Slider enabled={state.theme.name === 'Dark'} /></FloatRight>
          </MenuItem>


          {/* User section */}
          <MenuDivider />
          <SectionHeader>User</SectionHeader>
          <MenuItem onClick={() => { logout(); dispatch(actions.user.logout()); }}>
            <b>Log out</b>
          </MenuItem>

        </Menu >
      )
    } else {
      return (
        <Menu onMouseLeave={() => dispatch(actions.menu.hide())}>
          <SectionHeader>User</SectionHeader>

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