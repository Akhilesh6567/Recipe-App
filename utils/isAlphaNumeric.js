const isAlphaNumeric = (text) => {
  if (/^[a-zA-Z0-9 ]*$/.test(text)) {
    return true;
  }
  return false;
};
export default isAlphaNumeric;
