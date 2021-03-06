/**
 * This is the "controller" launched by the micro-router
 * It returns the methods to cleanup after unmounting
 * @param { location, params }
 * @param location
 * @returns {unMount}
 */
const mount = () => {
  document.getElementById('generic-container').style.display = 'block';
  document.getElementById('home-content').style.display = 'block';
  const unMount = () => {
    document.getElementById('generic-container').style.display = 'none';
    document.getElementById('home-content').style.display = 'none';
  };
  return unMount;
};

export default mount;
