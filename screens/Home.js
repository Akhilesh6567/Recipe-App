import React, { useState, useContext } from "react";
import { Text, View } from "react-native";
import Recipes from "../components/Recipes";
import SearchHeader from "../components/SearchHeader";
import styles from "./HomeStyles";
import DishContext from "../context/dishes/DishContext";

const Home = ({ navigation }) => {
  const [tagValue, setTagValue] = useState("All");
  const [searchValue, setSearchValue] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  // Using context api
  const context = useContext(DishContext);
  const { dishes, setDishes } = context;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>Find Best Recipe{"\n"}For Cooking</Text>
        <SearchHeader
          tagValue={tagValue}
          setTagValue={setTagValue}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setIsLoading={setIsLoading}
        />
      </View>

      <View style={styles.dishesContainer}>
        <Recipes
          dishes={dishes}
          tagValue={tagValue}
          searchValue={searchValue}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          navigation={navigation}
        />
      </View>
    </View>
  );
};

export default Home;
