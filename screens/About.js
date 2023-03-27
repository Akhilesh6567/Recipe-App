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
        <Hr />
        <View style={styles.developer}>
          <Text style={styles.devloperName}>AngelEldhose</Text>
          <Text style={styles.devEmail}>aeldhose2201@gmail.com</Text>
        </View>
        <Hr />
        <View style={styles.developer}>
          <Text style={styles.devloperName}>Sumikendhar</Text>
          <Text style={styles.devEmail}>sumikendhar.vvf119@gmail.com</Text>
        </View>
        <Hr />
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
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  appName: {
    fontWeight: "900",
    fontSize: 19,
  },
  appDesc: {
    textAlign: "justify",
  },
  developerHeading: {
    fontWeight: "900",
    fontSize: 19,
    marginVertical: 10,
  },
  devloperName: {
    fontWeight: "700",
  },
  devEmail: {
    fontStyle: "italic",
  },
});

export default About;
