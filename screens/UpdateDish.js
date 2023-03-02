import React, { useState, useContext, useEffect } from 'react'
import { Text, View, TextInput, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import styles from './UpdateDishStyles'
import Container, { Toast } from 'toastify-react-native'
import isAlphabetic from '../utils/isAlphabetic'
import isNumeric from '../utils/isNumeric'
import isAlphaNumeric from '../utils/isAlphaNumeric'
import uuid from 'react-native-uuid'
import { categories } from '../data/constants'
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import DishContext from "../context/dishes/DishContext";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons/faPlusCircle";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons/faMinusCircle";


const UpdateDish = (props) => {

    const context = useContext(DishContext);
    const { updateDish, dishes } = context;

    const [showPicker, setShowPicker] = useState(false);

    const [name, setname] = useState(
        dishes.find((dish) => dish.id === props.route.params.dishId).name
    );

    const [category, setCategory] = useState(
        dishes.find((dish) => dish.id === props.route.params.dishId).category
    );

    const [image, setimage] = useState(
        dishes.find((dish) => dish.id === props.route.params.dishId).image
    );

    const [video, setvideo] = useState(
        dishes.find((dish) => dish.id === props.route.params.dishId).video
    );

    const [time, setTime] = useState(
        new Date(dishes.find((dish) => dish.id === props.route.params.dishId).time)
    );

    const [description, setDescription] = useState(
        dishes.find((dish) => dish.id === props.route.params.dishId).description
    );

    const [ingredients, setIngredients] = useState([]);


    useEffect(() => {
        setIngredients(() => {
            return dishes.find((dish) => dish.id === props.route.params.dishId).ingredients.map((ingredient) => {
                return { key: uuid.v4(), name: ingredient.name, quantity: ingredient.quantity };
            });
        });

    }, [props.route.params.dishId])


    const onTimeChange = (event, newTime) => {
        setShowPicker(false);
        if (newTime !== undefined) {
            setTime(newTime);
        }
    };

    const changeTimeFormat = (time) => {

        const date = new Date(time);

        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        return `${hours}:${minutes}:${seconds}`;
    };

    const addIngredient = () => {
        if (ingredients.length === 15) {
            Toast.warn("Maximum 15 ingredients allowed");
            return;
        }
        setIngredients([...ingredients, { key: uuid.v4(), name: "", quantity: "" }]);
    }

    const removeIngredient = () => {
        setIngredients(ingredients.slice(0, -1));
    }

    const handleUpdateDish = () => {
        if (
            name.trim() === "" ||
            image.trim() === "" ||
            video.trim() === "" ||
            time.trim() === "" ||
            description.trim() === ""
        ) {
            Toast.warn("Please fill all the fields");
            return;
        }

        if (ingredients.length === 0) {
            Toast.warn("Please add atleast one ingredient");
            return;
        }

        for (let i = 0; i < ingredients.length; i++) {
            if (ingredients[i].name.trim() === "" || ingredients[i].quantity.trim() === "") {
                Toast.warn("Please fill all the fields");
                return;
            }
        }
        if (time.toLocaleTimeString() === "00:00:00") {
            Toast.warn("Please select time");
            return;
        }

        Toast.success("Dish Updated Successfully");
        updateDish(props.route.params.dishId, name, category, image, video, time.toString(), ingredients, description);
        props.navigation.navigate("AdminPanel");
    }

    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.heading}>Enter Dish Details</Text>
                    <View style={{ marginTop: 10 }}>
                        <View style={styles.inputRow}>
                            <Text style={styles.label}>Name</Text>
                            <TextInput
                                style={styles.inputField}
                                value={name}
                                onChangeText={(text) => {
                                    isAlphabetic(text)
                                        ? setname(text)
                                        : Toast.warn("Name should be alphabet");
                                }}
                                placeholder="Enter Dish Name"
                                placeholderTextColor="#ccc"
                                cursorColor="#ccc"
                            ></TextInput>
                        </View>
                        <View style={styles.inputRow}>
                            <Text style={styles.label}>Category</Text>
                            <Picker
                                style={styles.inputField}
                                selectedValue={category}
                                onValueChange={(itemValue) => setCategory(itemValue)}
                            >
                                {categories.map((category) => {
                                    return (
                                        <Picker.Item
                                            key={uuid.v4()}
                                            label={category}
                                            value={category}
                                        />
                                    );
                                })}
                            </Picker>
                        </View>
                        <View style={styles.inputRow}>
                            <Text style={styles.label}>Image</Text>
                            <TextInput
                                value={image}
                                style={styles.inputField}
                                onChangeText={(text) => setimage(text)}
                                placeholder="Paste Image URL"
                                placeholderTextColor="#ccc"
                                cursorColor="#ccc"
                            ></TextInput>
                        </View>
                        <View style={styles.inputRow}>
                            <Text style={styles.label}>Video</Text>
                            <TextInput
                                value={video}
                                style={styles.inputField}
                                onChangeText={(text) => setvideo(text)}
                                placeholder="Paste Youtube Video ID"
                                placeholderTextColor="#ccc"
                                cursorColor="#ccc"
                            ></TextInput>
                        </View>
                        <View style={styles.inputRow}>
                            <Text style={styles.label}>Time</Text>
                            <TouchableOpacity
                                style={styles.timeField}
                                onPress={() => setShowPicker(true)}
                            >
                                <Text style={styles.result}>{time.toLocaleTimeString()}</Text>
                            </TouchableOpacity>
                            {showPicker && (
                                <DateTimePicker
                                    value={time}
                                    mode="time"
                                    is24Hour={true}
                                    display="clock"
                                    onChange={onTimeChange}
                                />
                            )}
                        </View>

                        <View style={styles.inputRow}>
                            <Text style={styles.label}>Description</Text>
                            <TextInput
                                style={styles.inputField}
                                value={description}
                                onChangeText={(text) => {
                                    isAlphabetic(text)
                                        ? setDescription(text)
                                        : Toast.warn("Description should be alphabetic");
                                }}
                                placeholder="Enter Dish Description"
                                placeholderTextColor="#ccc"
                                cursorColor="#ccc"
                            ></TextInput>
                        </View>


                        <View style={styles.ingredientsView}>
                            <Text style={styles.ingredientLabel}>Ingredients</Text>
                            {
                                ingredients.map((item, index) => {
                                    return (
                                        <View key={item.key}>
                                            <Text style={styles.labels}>
                                                Ingredient {index + 1}:
                                            </Text>
                                            <View style={{ display: "flex", flexDirection: "row" }}>
                                                <TextInput
                                                    value={item.name}
                                                    style={styles.nameField}
                                                    onChangeText={(text) => {
                                                        isAlphabetic(text)
                                                            ? setIngredients(ingredients.map((ingredient) => {
                                                                if (ingredient.key === item.key) {
                                                                    ingredient.name = text;
                                                                }
                                                                return ingredient;
                                                            }))
                                                            : Toast.warn("Ingredient name only alphabet");
                                                    }}
                                                    placeholder="Enter Ingredient Name"
                                                    placeholderTextColor="#ccc"
                                                    cursorColor="#ccc"
                                                ></TextInput>
                                                <TextInput
                                                    style={styles.quanField}
                                                    value={item.quantity}
                                                    onChangeText={(text) => {
                                                        isAlphaNumeric(text) ?
                                                            setIngredients(ingredients.map((ingredient) => {
                                                                if (ingredient.key === item.key) {
                                                                    ingredient.quantity = text;
                                                                }
                                                                return ingredient;
                                                            }))
                                                            : Toast.warn("Quantity should be alphaNumeric");
                                                    }}
                                                    placeholder="Enter Ingredient Quantity"
                                                    placeholderTextColor="#ccc"
                                                    cursorColor="#ccc"
                                                ></TextInput>
                                            </View>
                                        </View>
                                    );
                                })
                            }

                            <View style={
                                {
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    marginVertical: 20,
                                }
                            }>

                                <TouchableOpacity
                                    style={styles.addBtn}
                                    onPress={() => {
                                        addIngredient();
                                    }}
                                >
                                    <FontAwesomeIcon icon={faPlusCircle} size={22} color="rgb(247, 124, 67)" />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.removeBtn}
                                    onPress={removeIngredient}
                                >
                                    <FontAwesomeIcon icon={faMinusCircle} size={22} color="#000" />
                                </TouchableOpacity>
                            </View>
                        </View>


                        <View style={{ display: "flex", alignItems: "center" }}>
                            <Pressable
                                style={styles.addDishButton}
                                onPress={() => handleUpdateDish()}
                            >
                                <Text style={styles.buttonText}>Update Dish</Text>
                            </Pressable>
                        </View>

                    </View>
                </View>
            </ScrollView>
        </>

    )
}

export default UpdateDish;
