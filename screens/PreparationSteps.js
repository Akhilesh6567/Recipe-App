import React from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "./PreparationStepsStyle";

const PreparationSteps = ({ route }) => {
  const { preparationSteps } = route.params;

  return (
    <ScrollView>
      {preparationSteps.map((step, index) => {
        return (
          <View key={step.key} style={styles.prepCard}>
            <Text style={styles.cardTitle}>Step {index + 1}</Text>
            <Text style={styles.cardContent}>{step.step}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default PreparationSteps;
