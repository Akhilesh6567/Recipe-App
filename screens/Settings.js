import React, { useContext } from "react";
import UserContext from "../context/auth/UserContext";
import { Text, View, Image, StyleSheet } from "react-native";
import ImagePicker from "../components/ImagePicker";
import SettingsItem from "../components/settingsItem";
import LogoutButton from "../components/logoutButton";
import Hr from "../components/Hr";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faNoteSticky } from "@fortawesome/free-solid-svg-icons/faNoteSticky";

const Settings = ({ navigation }) => {

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
          <FontAwesomeIcon icon={faUser} size={30} style={{ marginLeft: 15 }} />
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
              width: 30,
              height: 30,
              marginLeft: 15,
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
          <FontAwesomeIcon icon={faNoteSticky} size={30} style={{ marginLeft: 15 }} />
        }
        helpingText="Take note of what matters with ease."
        whereToNavigate={() => {
          navigation.navigate("Notes");
        }}
      />
      <Hr />
      <LogoutButton />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  userName: {
    textAlign: "center",
    marginVertical: 20,
    fontSize: 20,
    fontFamily: "Poppins_500Medium"
  },
});

export default Settings;
