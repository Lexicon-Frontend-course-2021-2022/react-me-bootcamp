import { Link } from "react-router-dom";
import MenuItem from './MenuItem';
import { useDispatch } from "react-redux";
import actions from '../../../../state/actions'

export default ({ path, children }) => {
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
