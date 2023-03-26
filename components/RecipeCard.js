import React, { useContext } from "react";
import styles from "./RecipeCardStyles";
import { ImageBackground, Text, View, Alert, Pressable } from "react-native";
import DishContext from "../context/dishes/DishContext";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons/faBookmark";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import formatTime from "../utils/formatTime";
import { Toast } from "toastify-react-native";
import UserContext from "../context/auth/UserContext";

const RecipeCard = (props) => {
  const date = new Date(props.dish.time);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const recipieTime = formatTime(hours, minutes, seconds);

  const { user, addFavorite, deleteFavorite } = useContext(UserContext);

  const handleFavorite = (dishId) => {
    try {
      const isFavorite = user.favoriteRecipes.includes(dishId);
      if (!isFavorite) {
        addFavorite(dishId);
        Toast.success("Recipe added to favorites");
      } else {
        Toast.warn("Recipe already in favorites");
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  const handleDeleteFavorite = (dishId) => {

    try {
      deleteFavorite(dishId);
      Toast.success("Recipe removed from favorites");
    }
    catch (error) {
      console.log(error);
    }

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

        {!props.isDelete && (
          <Pressable style={styles.favorite}
            onTouchEnd={(e) => {
              handleFavorite(props.dish.id)
              e.stopPropagation();
            }}
          >
            <FontAwesomeIcon
              icon={faBookmark}
              style={styles.favoriteIcon}
              size={20}
            />
          </Pressable>
        )}

        {props.isDelete && (
          <Pressable
            style={styles.delete}
            onTouchEnd={(e) => {
              handleDeleteFavorite(props.dish.id);
              e.stopPropagation();
            }}
          >
            <FontAwesomeIcon
              icon={faTrash}
              style={styles.deleteIcon}
              size={20}
            />
          </Pressable>
        )}

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
