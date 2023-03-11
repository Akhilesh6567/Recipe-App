const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])/;

const isPasswordValid = (password) => {
  return passwordRegex.test(password);
};
export default isPasswordValid;
