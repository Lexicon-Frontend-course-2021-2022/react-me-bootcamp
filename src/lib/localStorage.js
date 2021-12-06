// localStorage.js
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

export const saveSettings = (username, name, data) => {


  try {
    const serializedState = JSON.stringify(data);
    localStorage.setItem(username + '_' + name, serializedState);
  } catch {
    // ignore write errors
  }
};
