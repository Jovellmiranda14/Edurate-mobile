import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const LoginForm = () => {
  const [studentNumber, setStudentNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ studentNumber: "", password: "" });
  const navigation = useNavigation();

  const handleLogin = () => {
    const newErrors = {};
    if (!studentNumber.trim())
      newErrors.studentNumber = "Student Number is required.";
    if (!password.trim()) newErrors.password = "Password is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
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
          {errors.studentNumber ? (
            <Text style={styles.errorText}>{errors.studentNumber}</Text>
          ) : null}
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
          />
          {errors.password ? (
            <Text style={styles.errorText}>{errors.password}</Text>
          ) : null}
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
    marginBottom: 10,
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
  errorText: {
    color: "red",
    marginTop: 4,
    fontSize: 13,
  },
});

export default LoginForm;
