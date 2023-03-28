import axios from "axios";

const baseUrl = "https://recipe-maker-34e87-default-rtdb.firebaseio.com";
const usersUrl = `${baseUrl}/users.json`;

export const loginAuth = async (userData) => {
  try {
    const res = await axios.get(usersUrl);
    const users = Object.keys(res.data).map((key) => {
      return { id: key, data: res.data[key] };
    });
    const userExists = users.find(
      (u) =>
        u.data.email === userData.email && u.data.password === userData.password
    );

    if (!userExists) {
      alert("Invalid Credentials");
      return false;
    }
    const { id, data } = userExists;
    const { email, username, country, favoriteRecipes, notes } = data;

    // console.log(Object.entries(data));
    return {
      id, email, username, country,
      favoriteRecipes: favoriteRecipes || [],
      notes: notes || [],
    };
  } catch (error) {
    alert(error);
    return false;
  }
};
