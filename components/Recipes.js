import React, { useState, useEffect } from 'react'
import { ScrollView, Text, View, Image } from 'react-native'
import styles from './RecipesStyles'
import RecipeCard from './RecipeCard'
import Spinner from '../assets/Spinner.gif';

const Recipes = (props) => {

  const { isLoading, setIsLoading } = props;

  useEffect(() => {

    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, [isLoading]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={Spinner} style={{ width: 100, height: 100 }} />
      </View>
    )
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollableView}>

      {props.dishes.map((dish, index) => {

        return <RecipeCard key={dish.id} dish={dish} navigation={props.navigation} />

      })}

    </ScrollView>
  )
}

export default Recipes;
