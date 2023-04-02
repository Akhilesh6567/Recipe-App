import axios from "axios";

const baseUrl='https://recipe-maker-34e87-default-rtdb.firebaseio.com';
export const resetPassword = async ({id,password}) => {
    try {
        const usersUrl = `${baseUrl}/users/${id}.json`;
        const user=await axios.get(usersUrl);
        if(user.data.password===password){
            alert("New password cannot be the same as the old password");
            return false;
        }
        await axios.patch(usersUrl, {password});
        return true;
    }
    catch (error) {
        alert(error);
        return false;
    }
}