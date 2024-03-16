import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import axios from 'axios';

const SignUpScreen = ({ navigation }) => {
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    const signUpData = {
      userId: userId,
      password: password,
      name: name,
      email: email,
      reg_date: new Date().toISOString().slice(0, 19).replace('T', ' ')
    };
  
    // 유효성 검사: 비밀번호와 확인 비밀번호가 일치하는지 확인
    if (password !== confirmPassword) {
      Alert.alert("Password Error", "Passwords do not match.");
      return;
    }
  
    // 서버에 회원가입 요청 보내기
    axios.post('https://zjjj2n9iql.execute-api.ap-northeast-2.amazonaws.com/Drive4U/SignUp', signUpData)
      .then(response => {
        // 회원가입 성공 시
        console.log("회원가입 성공:", response.data);
        Alert.alert("Sign Up Success", "회원가입이 완료되었습니다.");
        navigation.navigate("Login");
      })
      .catch(error => {
        // 회원가입 실패 시
        console.error("회원가입 실패:", error);
        Alert.alert("Sign Up Failed", "회원가입 중 에러가 발생했습니다.");
      });
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>User ID</Text>
        <TextInput
          style={styles.input}
          placeholder="Your User ID"
          onChangeText={setUserId}
          value={userId}
          placeholderTextColor="#8c6b52"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          onChangeText={setName}
          value={name}
          placeholderTextColor="#8c6b52"
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
          LogIn
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
