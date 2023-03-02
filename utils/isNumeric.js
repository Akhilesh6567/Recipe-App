const isNumeric = (text) => {
  if (/^[0-9]*$/.test(text)) {
    return true;
  }
  return false;
};
export default isNumeric;
