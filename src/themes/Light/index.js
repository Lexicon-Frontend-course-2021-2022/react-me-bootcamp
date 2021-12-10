/* ============================================================================
 * Imports
 * ========================================================================= */
import _ from 'lodash';
import common from '../common';

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
 * Misc colors
 * ========================================================================= */
const colorNeutral = '#c8f';
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
