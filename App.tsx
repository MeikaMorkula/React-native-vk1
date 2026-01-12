import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [age, setAge] = useState<string>("");

  const ageAsNumber: number = Number(age);

  const ageValid: boolean = age !== "" && !isNaN(ageAsNumber) && ageAsNumber>0;

  const lowerLimit: number = ageValid ? (220 - ageAsNumber) * 0.65 : 0;
  const upperLimit: number = ageValid ? (220 - ageAsNumber) * 0.85 : 0;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Heart rate limits calculator</Text>

      <Text style={styles.text}>Enter your age:</Text>
      <TextInput
        placeholder="age"
        keyboardType="number-pad"
        value={age}
        onChangeText={setAge}
      />

      <Text style={styles.text}>Lower limit: {lowerLimit.toFixed(2)} bpm</Text>
      <Text style={styles.text}>Upper limit: {upperLimit.toFixed(2)} bpm</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  heading: {
    fontSize: 24,
    marginTop: 32,
    marginBottom: 16,
  },
  text: {
    marginVertical: 16,
  },
});
