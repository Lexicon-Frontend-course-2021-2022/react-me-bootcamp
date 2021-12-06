/* ============================================================================
 * Imports
 * ========================================================================= */
import { actions as user } from '../user';
import { actions as theme } from '../theme';
import { actions as menu } from '../menu';

/* ============================================================================
 * Exports
 * ========================================================================= */
const actions = {
  theme,
  user,
  menu
};

export default actions;