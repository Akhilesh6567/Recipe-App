import React, { useContext } from "react";
import { Alert, Pressable, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons/faRightFromBracket";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import DishContext from "../context/dishes/DishContext";
import styles from "./AdminPanelStyles";
import { ScrollView } from "react-native";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import uuid from "react-native-uuid";
import Container, { Toast } from "toastify-react-native";

const AdminPanel = ({ navigation }) => {
  const { dishes, deleteDish } = useContext(DishContext);

  const handleDishDelete = (id) => {
    deleteDish(id);
    Toast.success("Dish Deleted");
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Pressable
            style={({ pressed }) => [
              styles.logoutButton,
              pressed && { backgroundColor: "rgb(247, 124, 67)" },
            ]}
            onPress={() => {
              navigation.navigate("Login");
            }}
            TouchableHighlight
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.buttonText}>Logout</Text>
              <FontAwesomeIcon
                icon={faRightFromBracket}
                size={16}
                color="white"
                style={{ marginLeft: 10 }}
              />
            </View>
          </Pressable>

          <Text style={styles.welcomeText}>Welcome to Admin Panel 👋</Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ marginHorizontal: 10 }}>
              <Pressable
                style={({ pressed }) => [
                  styles.addDishBtn,
                  pressed && { backgroundColor: "rgb(247, 124, 67)" },
                ]}
                onPress={() => {
                  navigation.navigate("AddDish");
                }}
                TouchableHighlight
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={styles.dishText}>Add New Dish</Text>
                  <FontAwesomeIcon
                    icon={faSquarePlus}
                    size={22}
                    color="white"
                    style={{ marginLeft: 20 }}
                  />
                </View>
              </Pressable>
            </View>
          </View>

          <View style={styles.dishlistContainer}>
            <Text style={styles.dishlistText}>Dish List</Text>
            <View style={styles.dishList}>
              <View style={styles.listHead}>
                <Text style={styles.listHeadText}>Name</Text>
                <Text style={styles.listHeadText}>Category</Text>
                <Text style={styles.dishHeadDeleteText}>Manage</Text>
              </View>
              <View style={styles.listBody}>
                {dishes.map((dish) => (
                  <View key={uuid.v4()} style={styles.dishBodyRow}>
                    <Text style={styles.dishBodyNameText}
                      onPress={() => {
                        navigation.navigate("RecipeDetail", {
                          dishId: dish.id,
                          dishName: dish.name,
                          dishIngredients: dish.ingredients,
                          dishTime: dish.time,
                          dishImage: dish.image,
                          dishVideo: dish.video,
                          dishDescription: dish.description,
                          dishPreparationSteps: dish.preparationSteps
                        });
                      }}

                    >{dish.name}</Text>
                    <Text style={styles.dishBodyText}>{dish.category}</Text>

                    <Pressable onPress={() => handleDishDelete(dish.id)}>
                      <FontAwesomeIcon
                        icon={faTrash}
                        size={22}
                        color="rgb(247,124,67)"
                        style={styles.trashIcon}
                      />
                    </Pressable>

                    <Pressable
                      style={{ marginTop: 3 }}
                      onPress={() => {
                        navigation.navigate("UpdateDish", {
                          dishId: dish.id,
                        });
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faEdit}
                        size={22}
                        color="rgb(247,124,67)"
                        style={styles.editIcon}
                      />
                    </Pressable>

                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default AdminPanel;
