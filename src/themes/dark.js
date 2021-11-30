/* ============================================================================
 * Imports
 * ========================================================================= */
import _ from 'lodash';
import common from './common';

/* ============================================================================
 * Dark theme
 * ========================================================================= */

/* Theme name */
const name = 'Dark';

/* Normal colors */
const backgroundColor = '#222';
const color = '#fff';

/* Header/footer colors */
const backgroundColorExtra = '#444';
const colorExtra = '#ccc';

/* ============================================================================
 * Use lodash to merge theme with common settings
 * ========================================================================= */
export default _.merge({}, common, {
  name,
  header: {
    backgroundColor: backgroundColorExtra,
    color: colorExtra,
  },

  main: {
    backgroundColor,
    color
  },

  footer: {
    backgroundColor: backgroundColorExtra,
    color: colorExtra,
  },
});