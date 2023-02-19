import React, { useState, useContext } from 'react'
import { Text, View } from 'react-native'
import Recipes from '../components/Recipes'
import styles from './HomeStyles'
import DishContext from '../context/dishes/DishContext'

const Home = ({ navigation }) => {

    const [isLoading, setIsLoading] = useState(false);

    // Using context api
    const context = useContext(DishContext)
    const { dishes, setDishes } = context;

    return (

        <View style={styles.container}>

            <View style={styles.headerContainer}>
                <Text style={styles.heading}>Find Best Recipe{'\n'}For Cooking</Text>
            </View>

            <View style={styles.dishesContainer} >
                <Recipes dishes={dishes} isLoading={isLoading} setIsLoading={setIsLoading} navigation={navigation} />

            </View>
        </View>
    )

}

export default Home;

