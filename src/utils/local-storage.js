export const loadUser = () => {
  try {
    const user = localStorage.getItem('user-name');
    if (user === null) {
      return undefined;
    }
    return user;
  } catch (err) {
    return undefined;
  }
}; 

export const saveUser = (username) => {
  try {    
    localStorage.setItem('user-name', username);
  } catch {
    // ignore write errors
  }
};
export const removeUser = () => {
  try {
    localStorage.removeItem('user-name');
  }
  catch {    
  }
}
