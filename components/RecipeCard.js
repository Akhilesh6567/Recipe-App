import React,{useContext} from 'react'
import styles from './RecipeCardStyles'
import {ImageBackground, Text, View, Alert, Pressable } from 'react-native'
import DishContext from '../context/dishes/DishContext'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons/faBookmark'

const RecipeCard = (props) =>{

    const {addFavourite} = useContext(DishContext);  

    const handleFavorite = (dish) => {
        addFavourite(dish);
        Alert.alert('Added to Favorites');
    }

    return (
      <View style={styles.card}
        onTouchEnd={() => props.navigation.navigate('DishRecipe', {dishId:props.dish.id,dishName:props.dish.name, dishIngredients:props.dish.ingredients, dishTime:props.dish.time, dishImage:props.dish.image,
        dishVideo:props.dish.video, dishDescription:props.dish.description})}
      >
        <ImageBackground 
            source={{uri: props.dish.image}} 
            style={styles.image} 
            imageStyle={{borderRadius: 15,resizeMode: "cover",paddingHorizontal: 20,}}
        >
            <Pressable style={styles.favorite}
            onPress={() => handleFavorite(props.dish)}

            >
            <FontAwesomeIcon icon={faBookmark} style={styles.favoriteIcon} size={20}/>
            </Pressable>

            <View style={styles.recipeDetails}>
                <Text style={styles.recipeName}>{props.dish.name}</Text>
                <View>
                    <Text style={styles.recipeDesc}>{`${props.dish.ingredients.length} Ingredients | ${props.dish.time}`}</Text>
                </View>

            </View>

        </ImageBackground>
      </View>
    )
  
}
    

export default RecipeCard;
