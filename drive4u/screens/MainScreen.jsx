import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Accelerometer, Gyroscope } from "expo-sensors";

const MainScreen = () => {
  const [acceleration, setAcceleration] = useState({ x: 0, y: 0, z: 0 });
  const [gyroscope, setGyroscope] = useState({ x: 0, y: 0, z: 0 });
  const [isDriving, setIsDriving] = useState(false);
  const [isSensorEnabled, setIsSensorEnabled] = useState(false);

  useEffect(() => {
    let accelerometerSubscription;
    let gyroscopeSubscription;

    const startSensors = async () => {
      accelerometerSubscription = Accelerometer.addListener(({ x, y, z }) => {
        setAcceleration({ x, y, z });
      });
      gyroscopeSubscription = Gyroscope.addListener(({ x, y, z }) => {
        setGyroscope({ x, y, z });
      });
      setIsSensorEnabled(true);
    };

    const stopSensors = () => {
      accelerometerSubscription && accelerometerSubscription.remove();
      gyroscopeSubscription && gyroscopeSubscription.remove();
      setIsSensorEnabled(false);
    };

    if (isDriving && !isSensorEnabled) {
      startSensors();
    } else if (!isDriving && isSensorEnabled) {
      stopSensors();
    }

    return () => {
      stopSensors();
    };
  }, [isDriving]);

  const startDriving = () => {
    setIsDriving(true);
  };

  const stopDriving = () => {
    setIsDriving(false);
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
