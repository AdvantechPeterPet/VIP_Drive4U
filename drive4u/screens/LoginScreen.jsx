import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(`email: ${email}, password: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Log in to Drive4U</Text>

      <View style={styles.inputContainer}>
        <Text>Email</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={setEmail}
          value={email}
          placeholder="Your Email"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>Password</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={setPassword}
          value={password}
          placeholder="Your Password"
          secureTextEntry={true}
        />
      </View>

      <Button title="Login" onPress={handleLogin} color="#8c6b52" />

      <Text style={styles.forgotPassword}>Did you forget your password?</Text>

      <Button
        title="Create Account"
        onPress={() => navigation.navigate("Register")}
        color="gray"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    justifyContent: "center",
    padding: 20
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#371c07",
    marginBottom: 20
  },
  inputContainer: {
    marginBottom: 10
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor: "#fff"
  },
  forgotPassword: {
    color: "gray",
    textDecorationLine: "underline",
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center"
  }
});

export default LoginScreen;