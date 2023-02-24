import React from 'react'
import { Image, Text, View, ScrollView, ImageBackground, Pressable, Alert } from 'react-native'
import IngredientCard from '../components/IngredientCard';
import styles from './RecipeDetailStyles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'
import uuid from 'react-native-uuid';

const RecipeDetail = (props) => {

    const { dishId, dishName, dishIngredients, dishTime, dishImage, dishDescription, dishVideo } = props.route.params;

    return (
        <ScrollView>

            <View style={styles.videoContainer}>
                <ImageBackground
                    source={{ uri: dishImage }}
                    style={styles.image}
                    imageStyle={
                        {
                            backgroundColor: '#000',
                            opacity: 0.5,
                            borderRadius: 20,
                            resizeMode: "cover",
                            paddingHorizontal: 20,
                        }}
                >
                    <Pressable
                        style={{ backgroundColor: 'rgb(247, 124, 67)', padding: 10, borderRadius: 50 }}
                        onPress={() => { }}
                    >
                        <FontAwesomeIcon icon={faPlay} style={{ color: 'whitesmoke' }} size={20} />
                    </Pressable>
                </ImageBackground>
            </View>

            <View style={styles.description}>
                <Text style={{ fontFamily: 'Poppins_500Medium', fontSize: 20, color: '#000', lineHeight: 32 }} >Description</Text>
                <Text
                    style={{
                        fontSize: 18,
                        color: '#000',
                        textAlign: 'justify',
                        fontFamily: 'Poppins_300Light',
                    }}
                >{dishDescription}</Text>
            </View>


            <View style={styles.cardsHeader}>
                <Text style={styles.heading}>{`Ingredients(${dishIngredients.length})`}</Text>
                <Text style={styles.timeHeading}>{dishTime}</Text>
            </View>

            <View style={styles.ingredientCards}>
                {dishIngredients.map((ingredient, index) => {
                    return <IngredientCard key={uuid.v4()} name={ingredient.name} quantity={ingredient.quantity} />
                })}
            </View>

            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 25 }}>
                <Pressable
                    style={{ backgroundColor: 'rgb(247, 124, 67)', width: '60%', padding: 18, borderRadius: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => { }}
                >
                    <Text style={{ fontFamily: 'Poppins_500Medium', color: 'whitesmoke', fontSize: 16, textAlign: 'center' }}>Start Cooking!</Text>
                    <FontAwesomeIcon icon={faArrowRight} style={{ color: 'whitesmoke', marginLeft: 14 }} size={18} />
                </Pressable>
            </View>

        </ScrollView>
    )
}

export default RecipeDetail;