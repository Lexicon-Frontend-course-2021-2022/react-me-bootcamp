/* ============================================================================
 * Actions
 * ========================================================================= */
const actions = {
  show: () => ({ type: 'MENU_SHOW' }),
  hide: () => ({ type: 'MENU_HIDE' }),
  toggle: () => ({ type: 'MENU_TOGGLE' }),
};

/* ============================================================================
 * Reducers
 * ========================================================================= */
const reducer = (state = false, action) => {

  switch (action.type) {

    case 'MENU_SHOW':
      return true;

    case 'MENU_HIDE':
      return false;

    case 'MENU_TOGGLE':
      return !state;

    default:
      return state;
  }
}

/* ============================================================================
 * Exports
 * ========================================================================= */
export { actions, reducer };