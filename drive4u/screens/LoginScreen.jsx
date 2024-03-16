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
      <Text style={styles.titleText}>Welcome to Drive4U</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={setEmail}
          value={email}
          placeholder="Your Email"
          placeholderTextColor="#8c6b52"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={setPassword}
          value={password}
          placeholder="Your Password"
          placeholderTextColor="#8c6b52"
          secureTextEntry={true}
        />
      </View>

      <Button title="Login" onPress={handleLogin} color="#fff" />

      <Text style={styles.forgotPassword}>Forgot your password?</Text>

      <Button
        title="Create Account"
        onPress={() => navigation.navigate("SignUp")}
        color="#ff8800"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "center",
    padding: 20
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ff8800",
    marginBottom: 20,
    textAlign: "center"
  },
  inputContainer: {
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    color: "#ff8800",
    marginBottom: 5
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ff8800",
    borderRadius: 5,
    paddingLeft: 10,
    color: "#ffffff",
    backgroundColor: "#333333"
  },
  forgotPassword: {
    color: "#ff8800",
    textDecorationLine: "underline",
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center"
  }
});

export default LoginScreen;
