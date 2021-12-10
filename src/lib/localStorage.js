/* ============================================================================
 * Load specific setting from local storage
 * ========================================================================= */
export const loadSettings = (username, name) => {
  try {
    const serializedState = localStorage.getItem(username + '_' + name);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

/* ============================================================================
 * Save specific setting to local storage
 * ========================================================================= */
export const saveSettings = (username, name, data) => {
  try {
    const serializedState = JSON.stringify(data);
    localStorage.setItem(username + '_' + name, serializedState);
  } catch {
    // ignore write errors
  }
};
