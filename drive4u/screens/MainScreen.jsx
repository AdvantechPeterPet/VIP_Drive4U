import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Accelerometer, Gyroscope } from "expo-sensors";
import axios from 'axios';

const MainScreen = () => {
  const [acceleration, setAcceleration] = useState({ x: 0, y: 0, z: 0 });
  const [gyroscope, setGyroscope] = useState({ x: 0, y: 0, z: 0 });
  const [isDriving, setIsDriving] = useState(false);

  useEffect(() => {
    let sensorInterval;

    const startSensors = async () => {
      sensorInterval = setInterval(sendSensorData, 10000); // 10 seconds
    };

    const stopSensors = () => {
      clearInterval(sensorInterval);
    };

    if (isDriving) {
      startSensors();
    } else {
      stopSensors();
    }

    return () => {
      stopSensors();
    };
  }, [isDriving]);

  const startDriving = () => {
    setIsDriving(true);
    // 주행이 시작될 때 센서 데이터를 전송
    sendSensorData();
  };

  const stopDriving = () => {
    setIsDriving(false);
  };

  const sendSensorData = async () => {
    const url = "https://zjjj2n9iql.execute-api.ap-northeast-2.amazonaws.com/Drive4U/InsertData";
    const data = {
      acceleration,
      gyroscope
    };

    try {
      const response = await axios.post(url, data);
      console.log("Sensor data sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending sensor data:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Main Screen</Text>
      <Text style={styles.text}>
        Acceleration: X: {acceleration.x.toFixed(2)}, Y: {acceleration.y.toFixed(2)}, Z: {acceleration.z.toFixed(2)}
      </Text>
      <Text style={styles.text}>
        Gyroscope: X: {gyroscope.x.toFixed(2)}, Y: {gyroscope.y.toFixed(2)}, Z: {gyroscope.z.toFixed(2)}
      </Text>
      {!isDriving ? (
        <Button title="Start Driving" onPress={startDriving} />
      ) : (
        <Button title="Stop Driving" onPress={stopDriving} />
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
