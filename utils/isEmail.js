const isEmail = (text) => {
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) {
    return true;
  }
  return false;
};
export default isEmail;
