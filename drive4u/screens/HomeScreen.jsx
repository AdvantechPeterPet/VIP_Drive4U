import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Drive4U</Text>
      <Text style={styles.subTitleText}>
        Drive Safe, Stay Alive
      </Text>
      <Button
        title="Explore"
        onPress={() => navigation.navigate("Explore")}
        color="#ff8800"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#ff8800",
    marginBottom: 20
  },
  subTitleText: {
    fontSize: 18,
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 40
  }
});

export default HomeScreen;
