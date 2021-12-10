/* ============================================================================
 * Imports
 * ========================================================================= */
import { Link } from "react-router-dom";
import MenuItem from './MenuItem';
import { useDispatch } from "react-redux";
import actions from '../../../../state/actions'

import SectionHeader from "./SectionHeader";

/* ============================================================================
 * Subcomponent
 * ========================================================================= */
const NavigationLink = ({ path, children }) => {
  const dispatch = useDispatch();
  return (

    <MenuItem
      onClick={() => dispatch(actions.menu.hide())}
      className={window.location.pathname === path ? 'selected' : ''}
    >

      <Link
        style={{ width: '100%', height: '100%' }}
        className="header" to={path}
      >

        {children}

      </Link>

    </MenuItem>
  );
}


/* ============================================================================
 * Main component
 * ========================================================================= */
const NavigationSection = ({ items, header }) => {
  return (
    <>{header && <SectionHeader>{header}</SectionHeader>}
      {items.map(item => {
        return (
          <NavigationLink key={item.path} path={item.path}>{item.text}</NavigationLink>
        )
      })}</>
  );
};

/* ============================================================================
 * Exports
 * ========================================================================= */
export default NavigationSection;