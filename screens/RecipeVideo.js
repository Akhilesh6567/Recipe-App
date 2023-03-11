import React, { useEffect, useState, useCallback, useRef } from "react";
import { Image, Button, View, Alert } from "react-native";
import { Text, ScrollView } from 'react-native'
import styles from "./RecipeVideoStyles";
import YoutubePlayer from "react-native-youtube-iframe";
import Spinner from '../assets/Spinner.gif'

const RecipeVideo = ({ route }) => {

  const [isLoading, setIsLoading] = useState(true);
  const { recipeVideo, dishDescription } = route.params;
  const [playing, setPlaying] = useState(false);

  useEffect(() => {

    setTimeout(() => {
      setIsLoading(false)
    }, 2000);

  }, [isLoading])

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);


  if (isLoading) {
    return (
      <View style={styles.spinner}>
        <Image source={Spinner} style={{ width: 100, height: 100 }} />
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <Text style={styles.text}>Start Cooking</Text>
        <YoutubePlayer
          height={250}
          play={playing}
          videoId={recipeVideo}
          onChangeState={onStateChange}
        />

      </View>
    </View>
  )

}

export default RecipeVideo;
