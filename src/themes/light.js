/* ============================================================================
 * Imports
 * ========================================================================= */
import _ from 'lodash';
import common from './common';

/* ============================================================================
 * Light theme
 * ========================================================================= */
/* Theme name */
const name = 'Light';

/* Normal colors */
const backgroundColor = '#fff';
const color = '#000';

/* Header/footer colors */
const backgroundColorExtra = '#ccc';
const colorExtra = '#000';

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
