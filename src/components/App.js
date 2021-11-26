/* ============================================================================
 * Imports
 * ========================================================================= */
import { useSelector, useDispatch } from 'react-redux'
import actions from '../state/actions'

import packageJson from '../package.json';

/* ============================================================================
 * Component
 * ========================================================================= */
function App() {

  /* Boilerplate */
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>{packageJson.name} {packageJson.version}</h1>
    </div>
  );
}

/* ============================================================================
 * Exports
 * ========================================================================= */
export default App;
