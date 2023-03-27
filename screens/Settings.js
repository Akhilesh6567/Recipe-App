import React, { useContext } from "react";
import UserContext from "../context/auth/UserContext";
import { Text, View, Image, StyleSheet } from "react-native";
import ImagePicker from "../components/ImagePicker";
import SettingsItem from "../components/settingsItem";
import LogoutButton from "../components/logoutButton";
import Hr from "../components/Hr";
const Settings = ({ navigation }) => {
  // alert(JSON.stringify(navigation));

  const userContext = useContext(UserContext);
  const { user, setUser } = userContext;
  return (
    <View style={styles.container}>
      <View>
        <ImagePicker isProfileImage={true} />
      </View>
      <Text style={styles.userName}> {user.username}</Text>
      <Hr />
      <SettingsItem
        heading="User Profile"
        settingIcon={
          <Image
            source={require("../assets/icons/profile.png")}
            resizeMode="contain"
            style={{
              width: 50,
              height: 30,
            }}
          />
        }
        helpingText="Welcome to your user profile!"
        whereToNavigate={() => {
          navigation.navigate("Profile");
        }}
      />
      <Hr />
      <SettingsItem
        heading="About App"
        settingIcon={
          <Image
            source={require("../assets/icons/icons8-about-50.png")}
            resizeMode="contain"
            style={{
              width: 50,
              height: 30,
            }}
          />
        }
        helpingText="Streamline your life with our app."
        whereToNavigate={() => {
          navigation.navigate("About");
        }}
      />
      <Hr />
      <SettingsItem
        heading="Notes"
        settingIcon={
          <Image
            source={require("../assets/icons/icons8-notepad-50.png")}
            resizeMode="contain"
            style={{
              width: 50,
              height: 30,
            }}
          />
        }
        helpingText="Take note of what matters with ease."
        whereToNavigate={() => {
          navigation.navigate("Notes");
        }}
      />
      <LogoutButton />
      {/* <Hr />
      <SettingsItem />
      <Hr />
      <SettingsItem /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  userName: {
    fontWeight: "900",
    textAlign: "center",
    marginVertical: 20,
    fontSize: 20,
  },
});

export default Settings;
