import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Drive4U</Text>
      <Text style={styles.subTitleText}>
        Save your life
      </Text>
      <Button
        title="Explore"
        onPress={() => navigation.navigate("Explore")}
        color="#8c6b52"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#371c07",
    marginBottom: 10
  },
  subTitleText: {
    fontSize: 16,
    color: "#8c6b52",
    textAlign: "center",
    marginBottom: 20
  }
});

export default HomeScreen;