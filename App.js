import React from "react";
import { StyleSheet, View, Text } from "react-native";
import NeoScreen from "./screens/NeoScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Asteroid Observer</Text>
      <NeoScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30, 
    margin: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 35,
    textAlign: 'center',
  },
});
