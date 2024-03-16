import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

function LoginScreen({ navigation }) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("https://zjjj2n9iql.execute-api.ap-northeast-2.amazonaws.com/Drive4U/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userId: userId,
          password: password
        })
      });

      if (response.ok) {
        // 로그인 성공 처리
        console.log("로그인 성공");
        navigation.navigate("Main"); // 홈 화면으로 이동
      } else {
        // 로그인 실패 처리
        console.error("로그인 실패");
      }
    } catch (error) {
      console.error("로그인 요청 중 오류:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Welcome to Drive4U</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>User ID</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={setUserId}
          value={userId}
          placeholder="Your User ID"
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
  }
});

export default LoginScreen;
