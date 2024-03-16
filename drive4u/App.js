import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import axios from 'axios';

const SignUpScreen = ({ navigation }) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignUp = () => {
    const regDate = new Date().toISOString().split('T')[0]; // 오늘 날짜를 ISO 형식으로 설정

    const signUpData = {
      userId: userId,
      password: password,
      email: email,
      reg_date: regDate
    };

    axios.post('https://zjjj2n9iql.execute-api.ap-northeast-2.amazonaws.com/Drive4U/SignUp', signUpData)
      .then(response => {
        // 성공적으로 회원가입이 완료되었을 때 실행되는 코드
        console.log("회원가입 성공:", response.data);
        // 회원가입 성공 시 필요한 로직 추가
        Alert.alert("Sign Up Success", "Welcome to Drive4U!");
        navigation.navigate("Login"); // 로그인 화면으로 이동
      })
      .catch(error => {
        // 회원가입 중 에러가 발생했을 때 실행되는 코드
        console.error("회원가입 실패:", error);
        Alert.alert("Sign Up Failed", "An error occurred during sign up. Please try again later.");
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>User ID</Text>
        <TextInput
          style={styles.input}
          placeholder="User ID"
          onChangeText={setUserId}
          value={userId}
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
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          onChangeText={setEmail}
          value={email}
          placeholderTextColor="#8c6b52"
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
