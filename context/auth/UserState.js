import UserContext from "./UserContext";
import { useState } from "react";
import axios from "axios";
const baseUrl = 'https://recipe-maker-34e87-default-rtdb.firebaseio.com';

function UserState(props) {
    const [user, setUser] = useState({
        username: "",
        email: "",
        id: "",
        country: "",
        favoriteRecipes: [],
        notes: [],
    });

    // // adding favorite to user in firebase
    const addFavorite = (dishId) => {
        const usersUrl = `${baseUrl}/users/${user.id}.json`;

        try {
            axios.patch(usersUrl, { favoriteRecipes: [...user.favoriteRecipes, dishId] });
        }
        catch (error) {
            console.log(error);
        }
        // adding favorite to user in state
        setUser({ ...user, favoriteRecipes: [...user.favoriteRecipes, dishId] });
    };

    // deleting favorite from user in firebase
    const deleteFavorite = (dishId) => {

        try {
            const usersUrl = `${baseUrl}/users/${user.id}.json`;
            axios.patch(usersUrl, { favoriteRecipes: user.favoriteRecipes.filter((id) => id !== dishId) });
        }
        catch (error) {
            console.log(error);
        }
        // deleting favorite from user in state
        setUser({ ...user, favoriteRecipes: user.favoriteRecipes.filter((id) => id !== dishId) });
    };

    // adding note to user in firebase
    const addNote = (newNote) => {
        const usersUrl = `${baseUrl}/users/${user.id}.json`;

        try {
            axios.patch(usersUrl, { notes: [...user.notes, newNote] });
        }
        catch (error) {
            console.log(error);
        }
        // adding note to user in state
        setUser({ ...user, notes: [...user.notes, newNote] });

    };

    // deleting note from user in firebase
    const deleteNote = (noteId) => {
        const usersUrl = `${baseUrl}/users/${user.id}.json`;
        try {
            axios.patch(usersUrl, { notes: user.notes.filter((note) => note.id !== noteId) });
        }
        catch (error) {
            console.log(error);
        }

        // deleting note from user in state
        setUser({ ...user, notes: user.notes.filter((note) => note.id !== noteId) });
    };

    return (
        <UserContext.Provider value={{ user, setUser, addFavorite, deleteFavorite, addNote, deleteNote }}>
            {props.children}
        </UserContext.Provider>
    );

}

export default UserState;