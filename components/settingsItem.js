import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const SettingsItem = ({
  settingIcon,
  heading,
  helpingText,
  whereToNavigate,
}) => {
  const handlePress = () => {
    whereToNavigate();
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        {settingIcon}
        <View style={styles.text}>
          <Text style={styles.heading}>{heading}</Text>
          <Text style={styles.helpingText}>{helpingText}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
  },
  text: {
    flex: 1,
    padding: 10,
    paddingLeft: 30,
  },
  heading: {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
  },
  helpingText: {
    fontSize: 12,
    fontFamily: "Poppins_300Light",
  },
});

export default SettingsItem;
