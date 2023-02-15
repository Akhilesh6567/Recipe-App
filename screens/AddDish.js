import React, {useState, useContext } from 'react'
import {Text, View, TextInput,Alert, Pressable } from 'react-native'
import { ScrollView } from 'react-native';
import DishContext from '../context/dishes/DishContext'
import styles from './AddDishStyles'


const AddDish = ({navigation}) => {

    const {addDish} = useContext(DishContext)

    const [name, setname] = useState('');
    const [category, setcategory] = useState('');
    const [image, setimage] = useState('');
    const [video, setvideo] = useState('');
    const [time, settime] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [description, setdescription] = useState('');

    const [totalIngredients, setTotalIngredients] = useState(0);


    const handleIngredients = (text) => {
        if(text > 15) {
            Alert.alert('Maximum 15 Ingredients Allowed')
            return;
        }
        setTotalIngredients(text)
        let temp = [];
        for(let i=0; i<text; i++) {
            
            temp.push({key:i,name:'',quantity:''})
        }
        setIngredients(temp);

    }

    const handleAddDish = (e) => {
        if(name === '' || category === '' || image === '' || video === '' || time === '' || description === '') {
            Alert.alert('Please fill all the fields');
            return;
        }
        for(let i=0; i<ingredients.length; i++) {
            if(ingredients[i].name === '' || ingredients[i].quantity === '') {
                Alert.alert('Please fill all the fields');
                return;
            }
        }
        Alert.alert('Dish Added');
        addDish(name,category,image,video,time,ingredients,description);
        navigation.navigate('AdminPanel');        

    }

    return (
        <ScrollView>

        <View style={styles.container}>
            <Text style={styles.heading}>Enter Dish Details</Text>
            <View style={{ marginTop:10}}>
                <View style={styles.inputRow}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput
                        style={styles.inputField}
                        onChangeText={text => setname(text)}
                        placeholder='Enter Dish Name'
                        placeholderTextColor='#ccc'
                        cursorColor='#ccc'
                    >
                    </TextInput>      
                </View>
                <View style={styles.inputRow}>
                    <Text style={styles.label}>Category</Text>
                    <TextInput
                        style={styles.inputField}
                        onChangeText={text => setcategory(text)}
                        placeholder='Enter Dish Category'
                        placeholderTextColor='#ccc'
                        cursorColor='#ccc'
                        >
                    </TextInput>      
                </View>
                <View style={styles.inputRow}>
                    <Text style={styles.label}>Image</Text>
                    <TextInput
                        style={styles.inputField}
                        onChangeText={text => setimage(text)}
                        placeholder='Paste Image URL'
                        placeholderTextColor='#ccc'
                        cursorColor='#ccc'
                        >
                    </TextInput>      
                </View>
                <View style={styles.inputRow}>
                    <Text style={styles.label}>Video</Text>
                    <TextInput
                        style={styles.inputField}
                        onChangeText={text => setvideo(text)}
                        placeholder='Paste Youtube Video ID'
                        placeholderTextColor='#ccc'
                        cursorColor='#ccc'
                        >
                    </TextInput>      
                </View>
                <View style={styles.inputRow}>
                    <Text style={styles.label}>Time</Text>
                    <TextInput
                        style={styles.inputField}
                        onChangeText={text => settime(text)}
                        placeholder='Enter Cooking Time'
                        placeholderTextColor='#ccc'
                        cursorColor='#ccc'
                    >
                    </TextInput>
                </View>

                <View style={styles.inputRow}>
                    <Text style={styles.label}>Description</Text>
                    <TextInput
                        style={styles.inputField}
                        onChangeText={text => setdescription(text)}
                        placeholder='Enter Dish Description'
                        placeholderTextColor='#ccc'
                        cursorColor='#ccc'
                        >
                    </TextInput>      
                </View>

                <View style={styles.inputRow}>
                    <Text style={styles.label}>Total Ingredients</Text>
                    <TextInput
                        style={styles.ingredientNo}
                        onChangeText={text => handleIngredients(text)}
                        placeholderTextColor='#ccc'
                        cursorColor='#ccc'
                        keyboardType='numeric'
                        maxLength={2}
                        defaultValue={totalIngredients}
                        >
                    </TextInput>
                </View>
                

                <View style={{display:'flex',alignItems:'center'}}>
                {
                    ingredients.map((item,index) => {
                        return (        
                            <View key={item.key}>
                                <Text style={styles.labels}>Ingredient {item.key+1}:</Text>
                                <View  style={{display:'flex',flexDirection:'row'}}>

                                    <TextInput style={styles.nameField} 
                                    onChangeText={text => {item.name = text}}
                                    placeholder='Enter Ingredient Name' placeholderTextColor='#ccc' cursorColor='#ccc'></TextInput>
                                    <TextInput style={styles.quanField} 
                                    onChangeText={text => item.quantity = text}
                                    placeholder='Enter Ingredient Quantity' placeholderTextColor='#ccc' cursorColor='#ccc'></TextInput>
                                </View>

                            </View>   
                    
                    )})
                }   
                </View>

                <View style={{display:'flex',alignItems:'center'}}>
                    <Pressable style={styles.addDishButton} onPress={()=>handleAddDish()}>
                        <Text style={styles.buttonText}>Add Dish</Text>
                    </Pressable>
                </View>    

            </View>    

        </View>
    </ScrollView>
    )
}


export default AddDish;
