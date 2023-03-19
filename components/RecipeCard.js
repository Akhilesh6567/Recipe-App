import React, { useContext } from "react";
import styles from "./RecipeCardStyles";
import { ImageBackground, Text, View, Alert, Pressable } from "react-native";
import DishContext from "../context/dishes/DishContext";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons/faBookmark";
import formatTime from "../utils/formatTime";
const RecipeCard = (props) => {
  const { addFavourite } = useContext(DishContext);
  const date = new Date(props.dish.time);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const recipieTime = formatTime(hours, minutes, seconds);
  const handleFavorite = (dish) => {
    addFavourite(dish);
    Alert.alert("Added to Favorites");
  };

  return (
    <View
      style={styles.card}
      onTouchEnd={() =>
        props.navigation.navigate("RecipeDetail", {
          dishId: props.dish.id,
          dishName: props.dish.name,
          dishIngredients: props.dish.ingredients,
          dishTime: props.dish.time,
          dishImage: props.dish.image,
          dishVideo: props.dish.video,
          dishDescription: props.dish.description,
          dishPreparationSteps: props.dish.preparationSteps,
        })
      }
    >
      <ImageBackground
        source={{ uri: props.dish.image }}
        style={styles.image}
        imageStyle={{
          borderRadius: 15,
          resizeMode: "cover",
          paddingHorizontal: 20,
        }}
      >
        <LinearGradient
          colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.15)", "rgba(0,0,0,.4)"]}
          style={styles.gradient}
        />
        <Pressable style={styles.favorite} onPress={() => {}}>
          <FontAwesomeIcon
            icon={faBookmark}
            style={styles.favoriteIcon}
            size={20}
          />
        </Pressable>

        <View style={styles.recipeDetails}>
          <Text style={styles.recipeName}>{props.dish.name}</Text>
          <View>
            <Text
              style={styles.recipeDesc}
            >{`${props.dish.ingredients.length} Ingredients `}</Text>
            <Text style={styles.recipeDesc}>{recipieTime}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default RecipeCard;
