import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Accelerometer } from "expo-sensors";

const MainScreen = () => {
  const [acceleration, setAcceleration] = useState({ x: 0, y: 0, z: 0 });
  const [isDriving, setIsDriving] = useState(false);

  // 가속도 센서 값 읽기
  useEffect(() => {
    let subscription;
    const startAccelerometer = async () => {
      subscription = Accelerometer.addListener(({ x, y, z }) => {
        setAcceleration({ x, y, z });
      });
    };
    startAccelerometer();

    return () => {
      subscription && subscription.remove(); // cleanup
    };
  }, []);

  const startDriving = () => {
    setIsDriving(true);
    // 여기에 가속도 센서 값을 사용하여 주행 시작하는 로직 추가
    console.log("Start Driving");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Main Screen</Text>
      <Text style={styles.text}>
        Acceleration: X: {acceleration.x.toFixed(2)}, Y: {acceleration.y.toFixed(2)}, Z: {acceleration.z.toFixed(2)}
      </Text>
      {!isDriving ? (
        <Button title="Start Driving" onPress={startDriving} />
      ) : (
        <Text style={styles.text}>Driving...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default MainScreen;
