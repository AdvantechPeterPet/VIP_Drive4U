import React from "react";
import { StyleSheet, View, Button } from "react-native";

function MainScreen({ navigation }) {
  const handleDrive = () => {
    // 주행하기 버튼이 눌렸을 때 처리할 로직을 작성합니다.
    console.log("주행하기 버튼이 눌렸습니다.");
    // 주행 화면으로 이동하는 코드를 추가할 수 있습니다.
  };

  return (
    <View style={styles.container}>
      <Button title="주행하기" onPress={handleDrive} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MainScreen;
