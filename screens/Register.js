import React, { useState } from "react";
import {
  Alert,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styles from "./RegisterStyles";
import isAlphabetic from "../utils/isAlphabetic";
import isEmail from "../utils/isEmail";
import isPasswordValid from "../utils/isPasswordValid";
import { registerAuth } from "../middlewares/registerAuth";
import { Toast } from "toastify-react-native";
const Register = ({ navigation }) => {
  const [registerCred, setRegisterCred] = useState({
    email: "",
    username: "",
    password: "",
  });
  const resetForm = () => {
    setRegisterCred({
      email: "",
      username: "",
      password: "",
    });
  };
  const { email, username, password } = registerCred;
  const register = async () => {
    try {
      if (email == "" || username == "" || password == "") {
        Alert.alert("Please Enter email, username and Password");
      } else if (!isAlphabetic(username)) {
        Toast.warn("Username should be alphabetical");
      } else if (!isEmail(email)) {
        Toast.warn("Email is not valid");
      } else if (!isPasswordValid(password)) {
        Toast.warn("password should be alphanumeric");
      } else {
        const isRegisterSuccess = await registerAuth(registerCred);
        // When register is successfull, navigate to login page
        isRegisterSuccess ? navigation.navigate("Login") : null;
        resetForm();
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <Text style={styles.logoText}>Welcome to Recipeo</Text>
      </View>

      <Text style={styles.registerheading}> Register </Text>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="grey"
          value={username}
          onChangeText={(username) =>
            setRegisterCred({ ...registerCred, username: username })
          }
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="grey"
          value={email}
          onChangeText={(email) =>
            setRegisterCred({ ...registerCred, email: email })
          }
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="grey"
          value={password}
          secureTextEntry={true}
          onChangeText={(password) =>
            setRegisterCred({ ...registerCred, password: password })
          }
        />
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.registerBtn} onPress={register}>
          <Text style={styles.registerText}>Signup</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.login}>
        <Text style={styles.loginText}>Already have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            resetForm();
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.loginBtnText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
