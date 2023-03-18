import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import myIcon from "../assets/icons/image-editor.png";
import * as FileSystem from "expo-file-system";
export default function ImagePickerExample() {
  const fileName = "myImage.jpg";
  const imagePath = `${FileSystem.documentDirectory}${fileName}`;
  const [image, setImage] = useState(null);
  useEffect(() => {
    const checkFileExists = async () => {
      try {
        const fileInfo = await FileSystem.getInfoAsync(imagePath);
        fileInfo.exists ? setImage(imagePath) : setImage(null);
      } catch (error) {
        console.error(error);
      }
    };
    checkFileExists();
  }, []);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      const imageUri = result.assets[0].uri;
      const fileName = "myImage.jpg";
      const fileUri = FileSystem.documentDirectory + fileName;

      await FileSystem.copyAsync({
        from: imageUri,
        to: fileUri,
      });
    }
  };

  return (
    <View style={styles.container}>
      {image ? (
        <Image source={{ uri: image }} style={styles.image} />
      ) : (
        <Image style={styles.image} source={require("../assets/avatar.jpg")} />
      )}
      <TouchableHighlight onPress={pickImage} style={styles.icon_container}>
        <Image style={styles.icon} source={myIcon} />
      </TouchableHighlight>
      {/* <Button title="Pick an image from camera roll" onPress={pickImage} /> */}
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "red",
  },
  container: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  icon_container: {
    position: "absolute",
    bottom: -4,
    right: 2,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
