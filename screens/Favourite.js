import React, { useContext } from 'react'
import { ScrollView, Text, View, Image } from "react-native";
import RecipeCard from "../components/RecipeCard";
import uuid from "react-native-uuid";
import UserContext from '../context/auth/UserContext';
import DishContext from '../context/dishes/DishContext';
import styles from './FavouriteStyles';

const Favourite = (props) => {

  const { user } = useContext(UserContext);
  const { dishes } = useContext(DishContext);

  return (

    <ScrollView
      contentContainerStyle={styles.scrollableView}
    >
      {
        user.favoriteRecipes.length === 0 ?
          <View style={styles.noFav}>
            <Text style={styles.noFavText}>No Favourite Recipes</Text>
          </View>
          :
          user.favoriteRecipes.map((recipe) => {
            const dish = dishes.find((dish) => dish.id === recipe);

            return (
              dish &&
              <RecipeCard
                key={uuid.v4()}
                dish={dish}
                navigation={props.navigation}
                isDelete={true}
              />
            );
          })}
    </ScrollView>
  )
}

export default Favourite;
