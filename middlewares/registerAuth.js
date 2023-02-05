import axios from "axios";
const baseUrl='https://recipe-maker-34e87-default-rtdb.firebaseio.com';
const usersUrl = `${baseUrl}/users.json`;
export const registerAuth = async (user) => {
    try {
        const res = await axios.get(usersUrl);

        const users = Object.keys(res.data).map((key) => {
            return res.data[key];
        });
        const userExists = users.find((u) => u.email === user.email);
        if (userExists) {
            alert("User already exists");
            return;
        }

        const newUser = {
            email: user.email,
            username: user.username,
            password: user.password,
        };
        const res2 = await axios.post(usersUrl, newUser);
        alert("User created successfully");
        return true;
        
    }
    catch (error) {
        alert(error);
        return false;

    }
}