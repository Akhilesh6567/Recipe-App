import React, { useState } from 'react'
import {Alert,Image, Text, View,TextInput, TouchableOpacity } from 'react-native'
import UserContext from "../context/auth/UserContext";
import { useContext } from "react";
import styles from './LoginStyles';
import {loginAuth} from '../middlewares/loginAuth'


const Login = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const userContext = useContext(UserContext);
    const { user, setUser } = userContext;
    const login = async() => {
        try{
            if(email == "" || password == ""){
                Alert.alert("Please Enter Username and Password");
            }
            else{
              const isLoginSucces= await loginAuth({email, password});
              if (isLoginSucces) {
                setUser(
                    ()=>{
                        return {...isLoginSucces}
                    }
                )
                // go to profile page after login
                // navigation.navigate("Profile")                
              }

            }
        }
        catch(error){
            alert(error);
        }

    }

    return (
        <View style={styles.container}>
        
        <View style={styles.headerView}>
            <Image source={require('../assets/logo.png')} style={styles.logo}/>
            <Text style={styles.logoText}>Welcome to Recipeo</Text>
        </View>
        
        <Text style={styles.loginheading}> Login </Text>
        <View style={styles.inputView}>
            <TextInput
                style={styles.TextInput}
                placeholder="Email"
                placeholderTextColor="grey"
                onChangeText={(email) => setEmail(email)}
            />
        </View>
 
        <View style={styles.inputView}>
            <TextInput
                style={styles.TextInput}
                placeholder="Password"
                placeholderTextColor="grey"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
            />
        </View>

        <View style={styles.buttonView}>
            <TouchableOpacity style={styles.loginBtn} 
                onPress={login}
            >
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
        
        <View style={styles.register}>
            <Text style={styles.registerText}>Don't have an account? </Text>
            <TouchableOpacity style={styles.registerBtn} onPress={() => navigation.navigate("Register")}>
                <Text style={styles.registerBtnText}>Register</Text>
            </TouchableOpacity>
        </View>    

      </View>
    )
}

export default Login;