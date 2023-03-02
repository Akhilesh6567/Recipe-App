const isAlphabetic = (text) => {
  if (/^[a-zA-Z ]*$/.test(text)) {
    return true;
  }
  return false;
};
export default isAlphabetic;
