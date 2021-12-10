/* ============================================================================
 * Imports
 * ========================================================================= */
import light from '../themes/Light';
import dark from '../themes/Dark';

const themes = {
  light, dark
}

/* ============================================================================
 * Actions
 * ========================================================================= */
const actions = {
  dark: () => ({ type: 'THEME_DARK' }),
  light: () => ({ type: 'THEME_LIGHT' }),
  toggle: () => ({ type: 'THEME_TOGGLE' }),
  set: (payload) => ({ type: 'THEME_SET', payload }),
};

/* ============================================================================
 * Reducers
 * ========================================================================= */
const reducer = (state = themes.light, action) => {

  switch (action.type) {

    case 'THEME_DARK':
      return themes.dark;

    case 'THEME_LIGHT':
      return themes.light;

    case 'THEME_TOGGLE':
      return state.name === 'Light' ? themes.dark : themes.light;

    case 'THEME_SET':
      return action.payload === 'Light' ? themes.light : themes.dark;

    default:
      return state;
  }
}

/* ============================================================================
 * Exports
 * ========================================================================= */
export { actions, reducer };