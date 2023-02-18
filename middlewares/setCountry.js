import axios from "axios";
const baseUrl = 'https://recipe-maker-34e87-default-rtdb.firebaseio.com';
export const setCountry = async ({ id, country }) => {
 try {
  const usersUrl = `${baseUrl}/users/${id}.json`;
  const user = await axios.get(usersUrl);
  await axios.patch(usersUrl, { country });
  return true;
 }
 catch (error) {
  alert(error);
  return false;
 }
}