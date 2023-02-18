import UserContext from "./UserContext";
import { useState } from "react";


function UserState(props) {
    const [user, setUser] = useState({
        username: "",
        email: "",
        id: "",
        country:""
    });
    

    return (
        <UserContext.Provider value={{ user, setUser }}>
        {props.children}
        </UserContext.Provider>
    );

}

export default UserState;