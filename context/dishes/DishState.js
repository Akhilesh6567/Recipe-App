import DishContext from "./DishContext";
import React, { useState, useEffect } from "react";
import axios from "axios";
const baseUrl = "https://recipe-maker-34e87-default-rtdb.firebaseio.com";
// Set data in dishes state from firebase
async function gete() {
  const allRecpies = [];
  try {
    const res = await axios.get(`${baseUrl}/Momrecipes.json`);
    for (const key in res.data) {
      const expensObj = {
        id: key,
        name: res.data[key].name,
        image: res.data[key].image,
        video: res.data[key].video,
        description: res.data[key].description,
        ingredients: res.data[key].ingredients,
        time: res.data[key].time,
        category: res.data[key].category,
        preparationSteps: res.data[key].preparationSteps,
      };
      allRecpies.push(expensObj);
    }
    return allRecpies;
  } catch (error) {
    alert(error);
    return allRecpies;
  }
}

function DishState(props) {
  // dishes state
  const [dishes, setDishes] = useState([]);

  // Get dishes from firebase
  useEffect(() => {
    async function getRecipes() {
      const expense = await gete();
      setDishes(expense);
    }
    getRecipes();
  }, []);

  // Add dish data to firebase
  function addDish(
    name,
    category,
    image,
    video,
    time,
    ingredients,
    description,
    preparationSteps
  ) {
    const dish = {
      name,
      category,
      image,
      video,
      time,
      ingredients,
      description,
      preparationSteps,
    };
    try {
      // alert(JSON.stringify(dish));
      axios.post(`${baseUrl}/Momrecipes.json`, dish);
      setDishes([...dishes, dish]);
    } catch (error) {
      alert(error);
    }
  }

  // Delete dish from firebase
  function deleteDish(id) {
    try {
      axios.delete(`${baseUrl}/Momrecipes/${id}.json`);
      const newDishes = dishes.filter((dish) => dish.id !== id);
      setDishes(newDishes);
    } catch (error) {
      alert(error);
    }
  }

  // Update dish data in firebase
  function updateDish(
    id,
    name,
    category,
    image,
    video,
    time,
    ingredients,
    description,
    preparationSteps
  ) {
    const dishData = {
      name,
      category,
      image,
      video,
      time,
      ingredients,
      description,
      preparationSteps,
    };
    try {
      axios.put(`${baseUrl}/Momrecipes/${id}.json`, dishData);

      const newDishes = dishes.map((dish) => {
        if (dish.id === id) {
          dish.name = name;
          dish.category = category;
          dish.image = image;
          dish.video = video;
          dish.time = time;
          dish.ingredients = ingredients;
          dish.description = description;
          dish.preparationSteps = preparationSteps;
        }
        return dish;
      });

      setDishes(newDishes);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <DishContext.Provider
      value={{ dishes, setDishes, addDish, deleteDish, updateDish }}
    >
      {props.children}
    </DishContext.Provider>
  );
}
export default DishState;
