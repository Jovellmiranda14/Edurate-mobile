import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const EduRateLogo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/edurate-logo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>EduRate</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 45,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default EduRateLogo;
