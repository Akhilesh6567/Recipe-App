import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LogoutButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Login"); // Navigate to the 'Login' screen
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Log Out</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: "rgb(247, 124, 67)",
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 20,
    width: 100,
    marginLeft: "auto",
    marginRight: "auto",
    color: "#fff",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default LogoutButton;
