import React from "react";
import { View, StyleSheet } from "react-native";
import LoginForm from "../components/LoginForm";
import EduRateLogo from "../components/EduRateLogo";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <EduRateLogo />
      <LoginForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e2749",
    paddingTop: 100,
  },
});

export default LoginScreen;
