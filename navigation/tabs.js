import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import Favourite from "../screens/Favourite";
import { StyleSheet, View, Image, Text } from "react-native";

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          elevation: 0,
          backgroundColor: "#ffffff",
          height: 70,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/icons/home.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "rgb(247, 124, 67)" : "#748c94",
                }}
              />
              <Text
                style={{
                  color: focused ? "rgb(247, 124, 67)" : "#748c94",
                  fontSize: 12,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Favorite"
        component={Favourite}
        options={{
          headerStyle: {
            backgroundColor: "rgb(247, 124, 67)",
            shadowColor: "#ffffff",
            elevation: 0,
          },
          headerTintColor: "#ffffff",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/icons/bookmark.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "rgb(247, 124, 67)" : "#748c94",
                }}
              />
              <Text
                style={{
                  color: focused ? "rgb(247, 124, 67)" : "#748c94",
                  fontSize: 12,
                }}
              >
                Favorite
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerStyle: {
            backgroundColor: "rgb(247, 124, 67)",
            shadowColor: "#ffffff",
            elevation: 0,
          },
          headerTintColor: "#ffffff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/icons/icons8-user-settings-32.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "rgb(247, 124, 67)" : "#748c94",
                }}
              />
              <Text
                style={{
                  color: focused ? "rgb(247, 124, 67)" : "#748c94",
                  fontSize: 12,
                }}
              >
                Settings
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;
