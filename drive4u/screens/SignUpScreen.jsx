import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    // 여기에서 회원가입 로직을 처리할 수 있습니다.
    console.log("Sign up with:", email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          onChangeText={setEmail}
          value={email}
          placeholderTextColor="#8c6b52"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Your Password"
          onChangeText={setPassword}
          value={password}
          placeholderTextColor="#8c6b52"
          secureTextEntry
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          placeholderTextColor="#8c6b52"
          secureTextEntry
        />
      </View>
      <Button
        title="Sign Up"
        onPress={handleSignUp}
        color="#ff8800"
        style={styles.button}
      />
      <Text style={styles.text}>
        Already have an account?{" "}
        <Text
          style={styles.link}
          onPress={() => navigation.navigate("Login")}
        >
          Sign In
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ff8800",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
    width: "100%",
  },
  label: {
    fontSize: 16,
    color: "#ff8800",
    marginBottom: 5,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ff8800",
    borderRadius: 5,
    paddingHorizontal: 10,
    color: "#ffffff",
    backgroundColor: "#333333",
  },
  button: {
    width: "100%",
    marginBottom: 20,
  },
  text: {
    color: "#ffffff",
  },
  link: {
    color: "#ff8800",
    textDecorationLine: "underline",
  },
});

export default SignUpScreen;
