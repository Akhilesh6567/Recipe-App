import DishContext from "./DishContext";
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const baseUrl = 'https://recipe-maker-34e87-default-rtdb.firebaseio.com'
// Set data in dishes state from firebase
async function gete() {
  try {
    const res = await axios.get(`${baseUrl}/Momrecipes.json`)
    const allRecpies = []
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

      }
      allRecpies.push(expensObj)
    }
    return allRecpies;
  } catch (error) {
    alert(error)
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
    getRecipes()
  }, [])


  // Add dish data to firebase


  return (

    <DishContext.Provider value={{ dishes, setDishes}}>
      {props.children}
    </DishContext.Provider>
  )

}

export default DishState;