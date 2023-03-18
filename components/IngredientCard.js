import React from "react";
import { Text, View } from "react-native";
import styles from "./IngredientCardStyles";

const IngredientCard = (props) => {
  const { name, quantity } = props;
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.quantity}>{quantity}</Text>
    </View>
  );
};

export default IngredientCard;
