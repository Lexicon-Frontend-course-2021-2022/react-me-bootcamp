/* ============================================================================
 * Imports
 * ========================================================================= */
import _ from 'lodash';
import common from '../common';

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
 * Misc colors
 * ========================================================================= */
const colorNeutral = '#08f';
const colorGood = '#088';
const colorBad = '#800';

/* ============================================================================
 * Use lodash to merge theme with common settings
 * ========================================================================= */
export default _.merge({}, common, {

  name: name,

  header: {
    backgroundColor: backgroundColorExtra,
    color: colorExtra,
  },

  main: {
    backgroundColor,
    color,
  },

  footer: {
    backgroundColor: backgroundColorExtra,
    color: colorExtra,
  },

  highlight: {
    neutral: colorNeutral,
    good: colorGood,
    bad: colorBad
  }

});
