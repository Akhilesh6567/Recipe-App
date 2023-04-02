import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Hr from "../components/Hr";
const About = () => {
  return (
    <View style={styles.container}>
      <View style={styles.aboutApp}>
        <Text style={styles.appName}>Recipio</Text>
        <Text style={styles.appDesc}>
          Recipio is a mobile app with a vast selection of food recipes for
          different cuisines. With an intuitive interface and easy-to-follow
          instructions, Recipio makes cooking enjoyable for everyone, from
          beginners to seasoned chefs.
        </Text>
      </View>
      <View style={styles.developers}>
        <Text style={styles.developerHeading}>Developers</Text>
        <View style={styles.developer}>
          <Text style={styles.devloperName}>Akhilesh</Text>
          <Text style={styles.devEmail}>akhileshreddy6567@gmail.com</Text>
        </View>
        <View style={styles.developer}>
          <Text style={styles.devloperName}>AngelEldhose</Text>
          <Text style={styles.devEmail}>aeldhose2201@gmail.com</Text>
        </View>
        <View style={styles.developer}>
          <Text style={styles.devloperName}>Sumikendhar</Text>
          <Text style={styles.devEmail}>sumikendhar.vvf119@gmail.com</Text>
        </View>
        <View style={styles.developer}>
          <Text style={styles.devloperName}>Felipehhbrito</Text>
          <Text style={styles.devEmail}>felipehhbrito@gmail.com</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  appName: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
  },
  appDesc: {
    textAlign: "justify",
    fontFamily: "Poppins_400Regular",
    padding: 15,
    fontSize: 15,
    marginTop: 10,
    backgroundColor: "#f5f5f5",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
  },
  developerHeading: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 5,
  },
  developer: {
    paddingHorizontal: 10,
    backgroundColor: "#f7f7f7",
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  devloperName: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
  },
  devEmail: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    color: "#555",
  },
});

export default About;
