import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StyleSheet, Text, View } from 'react-native';
import React, { useState,useEffect,useCallback } from 'react';
import Register from './screens/Register';
import Profile from './screens/Profile';
import Login from './screens/Login';
import * as SplashScreen from 'expo-splash-screen';
import UserState from './context/auth/UserState';
import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();


export default function App() {


  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });


  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  
  if(!fontsLoaded){
    return null;
  }

  return (
   
    <>

        <UserState>
          <View style={styles.container}>
            <NavigationContainer
              onReady={onLayoutRootView}
              >
            <Stack.Navigator
              screenOptions={{
                headerStyle: { backgroundColor: 'rgb(247, 124, 67)' },
                headerTintColor: 'white',
                contentStyle: { backgroundColor: '#eee' },
                headerTitleAlign: 'center',
                headerTitleStyle:{
                  fontWeight: 'bold',
                  fontSize: 20,
                }    
              }} 
            >
              <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false,}}
              />
              
              <Stack.Screen
                name="Register"
                component={Register}
                options={{headerShown: false,}}
              />
                <Stack.Screen
                name="Profile"
                component={Profile}
                options={() => ({
                  title: "Profile",
                })} 
              />
 


              </Stack.Navigator>


            </NavigationContainer>


          </View>

          </UserState>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
});
