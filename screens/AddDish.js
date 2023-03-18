import React, { useState, useContext } from "react";
import {
  Text,
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DishContext from "../context/dishes/DishContext";
import styles from "./AddDishStyles";
import { Toast } from "toastify-react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import isAlphabetic from "../utils/isAlphabetic";
import isAlphaNumeric from "../utils/isAlphaNumeric";
import uuid from "react-native-uuid";
import { categories } from "../data/constants";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons/faPlusCircle";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons/faMinusCircle";

const AddDish = ({ navigation }) => {
  const { addDish } = useContext(DishContext);
  const [name, setname] = useState("");
  const [category, setCategory] = useState("Breakfast");
  const [image, setimage] = useState("");
  const [video, setvideo] = useState("");
  const [time, setTime] = useState(new Date(0, 0, 0));
  const [showPicker, setShowPicker] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [description, setdescription] = useState("");
  const [preparationSteps, setPreparationSteps] = useState([]);

  const onTimeChange = (event, newTime) => {
    setShowPicker(false);
    if (newTime !== undefined) {
      setTime(newTime);
    }
  };

  const addIngredient = () => {
    if (ingredients.length === 15) {
      Toast.warn("Max 15 ingredients allowed");
      return;
    }
    setIngredients([
      ...ingredients,
      { key: uuid.v4(), name: "", quantity: "" },
    ]);
  };

  const removeIngredient = () => {
    setIngredients(ingredients.slice(0, -1));
  };

  const addPreparationStep = () => {
    if (preparationSteps.length === 15) {
      Toast.warn("Max 15 preparation steps allowed");
      return;
    }
    setPreparationSteps([...preparationSteps, { key: uuid.v4(), step: "" }]);
  };

  const removePreparationStep = () => {
    setPreparationSteps(preparationSteps.slice(0, -1));
  };

  const handleAddDish = (e) => {
    if (
      name.trim() === "" ||
      category.trim() === "" ||
      image.trim() === "" ||
      video.trim() === "" ||
      description.trim() === ""
    ) {
      Toast.warn("Please fill all the fields");
      return;
    }
    for (let i = 0; i < ingredients.length; i++) {
      if (
        ingredients[i].name.trim() === "" ||
        ingredients[i].quantity.trim() === ""
      ) {
        Toast.warn("Please fill all the fields");
        return;
      }
    }

    for (let i = 0; i < preparationSteps.length; i++) {
      if (preparationSteps[i].step.trim() === "") {
        Toast.warn("Please fill all the fields");
        return;
      }
    }

    if (time.toLocaleTimeString() === "00:00:00") {
      Toast.warn("Please select time");
      return;
    }

    if (ingredients.length === 0) {
      Toast.warn("Add atleast one ingredient");
      return;
    }

    if (preparationSteps.length === 0) {
      Toast.warn("Add atleast one preparation step");
      return;
    }

    Toast.success("Dish Added");
    // console.log(preparationSteps);
    addDish(
      name,
      category,
      image,
      video,
      time.toString(),
      ingredients,
      description,
      preparationSteps
    );
    navigation.navigate("AdminPanel");
  };

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
                    ? setdescription(text)
                    : Toast.warn("Description should be alphabetic");
                }}
                placeholder="Enter Dish Description"
                placeholderTextColor="#ccc"
                cursorColor="#ccc"
              ></TextInput>
            </View>

            <View style={styles.ingredientsView}>
              <Text style={styles.ingredientLabel}>Ingredients</Text>
              {ingredients.map((item, index) => {
                return (
                  <View key={item.key}>
                    <Text style={styles.labels}>Ingredient {index + 1}:</Text>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                      <TextInput
                        value={item.name}
                        style={styles.nameField}
                        onChangeText={(text) => {
                          isAlphabetic(text)
                            ? setIngredients(
                                ingredients.map((ingredient) => {
                                  if (ingredient.key === item.key) {
                                    ingredient.name = text;
                                  }
                                  return ingredient;
                                })
                              )
                            : Toast.warn("Ingredient name only alphabet");
                        }}
                        placeholder="Enter Ingredient Name"
                        placeholderTextColor="#ccc"
                        cursorColor="#ccc"
                      ></TextInput>
                      <TextInput
                        value={item.quantity}
                        style={styles.quanField}
                        onChangeText={(text) => {
                          isAlphaNumeric(text)
                            ? setIngredients(
                                ingredients.map((ingredient) => {
                                  if (ingredient.key === item.key) {
                                    ingredient.quantity = text;
                                  }
                                  return ingredient;
                                })
                              )
                            : Toast.warn("Quantity should be alphaNumeric");
                        }}
                        placeholder="Enter Ingredient Quantity"
                        placeholderTextColor="#ccc"
                        cursorColor="#ccc"
                      ></TextInput>
                    </View>
                  </View>
                );
              })}

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  marginVertical: 20,
                }}
              >
                <TouchableOpacity style={styles.addBtn} onPress={addIngredient}>
                  <FontAwesomeIcon
                    icon={faPlusCircle}
                    size={22}
                    color="rgb(247, 124, 67)"
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.removeBtn}
                  onPress={removeIngredient}
                >
                  <FontAwesomeIcon
                    icon={faMinusCircle}
                    size={22}
                    color="#000"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.preparationView}>
              <Text style={styles.preparationLabel}>Preparation Steps</Text>
              {preparationSteps.map((item, index) => {
                return (
                  <View key={item.key}>
                    <Text style={styles.labels}>Step {index + 1}:</Text>
                    <TextInput
                      style={styles.preparationField}
                      value={item.step}
                      onChangeText={(text) => {
                        isAlphaNumeric(text)
                          ? setPreparationSteps(
                              preparationSteps.map((preparation) => {
                                if (preparation.key === item.key) {
                                  preparation.step = text;
                                }
                                return preparation;
                              })
                            )
                          : Toast.warn("Preparation step should be alphabetic");
                      }}
                      placeholder="Enter Preparation Step"
                      placeholderTextColor="#ccc"
                      cursorColor="#ccc"
                    ></TextInput>
                  </View>
                );
              })}
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  marginVertical: 20,
                }}
              >
                <TouchableOpacity
                  style={styles.addBtn}
                  onPress={addPreparationStep}
                >
                  <FontAwesomeIcon
                    icon={faPlusCircle}
                    size={22}
                    color="rgb(247, 124, 67)"
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.removeBtn}
                  onPress={removePreparationStep}
                >
                  <FontAwesomeIcon
                    icon={faMinusCircle}
                    size={22}
                    color="#000"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ display: "flex", alignItems: "center" }}>
              <Pressable
                style={styles.addDishButton}
                onPress={() => handleAddDish()}
              >
                <Text style={styles.buttonText}>Add Dish</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default AddDish;
