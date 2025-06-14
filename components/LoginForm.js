import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const LoginForm = () => {
  const [studentNumber, setStudentNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handlePasswordChange = (text) => {
    if (text.length < password.length) {
      setPassword(password.slice(0, -1));
    } else {
      const newChar = text.charAt(text.length - 1);
      setPassword(password + newChar);
    }
  };

  const handleLogin = () => {
    console.log("Logging in with:", studentNumber, password);
    navigation.navigate("Home");
  };

  return (
    <LinearGradient
      colors={["#E4D9FF", "#91A8FF"]}
      style={styles.formContainer}
    >
      <View style={styles.innerContent}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Student Number</Text>
          <TextInput
            style={styles.input}
            value={studentNumber}
            onChangeText={(text) =>
              setStudentNumber(text.replace(/[^0-9]/g, ""))
            }
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            value={"*".repeat(password.length)}
            onChangeText={handlePasswordChange}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    padding: 25,
    borderRadius: 10,
    width: "100%",
    height: 525,
    justifyContent: "center",
  },
  innerContent: {
    paddingTop: 40,
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-start",
    width: "100%",
  },
  inputGroup: {
    width: 300,
  },
  label: {
    fontSize: 14,
    color: "#4B526D",
    marginBottom: 5,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#ffffffaa",
    borderRadius: 6,
    marginBottom: 5,
    padding: 12,
    fontSize: 16,
    color: "#000",
  },
  forgotText: {
    textAlign: "right",
    width: 300,
    color: "#555",
    fontStyle: "italic",
    marginBottom: 35,
  },
  loginButton: {
    backgroundColor: "#1f2754",
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: "center",
    width: 300,
  },
  loginButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default LoginForm;
