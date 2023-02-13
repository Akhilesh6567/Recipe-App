import React, { useContext } from 'react'
import { Alert, Pressable, Text, View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons/faRightFromBracket'
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import DishContext from '../context/dishes/DishContext'
import styles from './AdminPanelStyles'
import { ScrollView } from 'react-native'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const AdminPanel = ({ navigation }) => {

  const { dishes, deleteDish } = useContext(DishContext);


  const handleDishDelete = (id) => {

    deleteDish(id);
    Alert.alert("Dish deleted");

  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Pressable
          style={({ pressed }) => [styles.logoutButton, pressed && { backgroundColor: 'rgb(247, 124, 67)' }]}
          onPress={() => { navigation.navigate('Login') }}
          TouchableHighlight
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.buttonText}>Logout
            </Text>
            <FontAwesomeIcon icon={faRightFromBracket} size={16} color="white" style={{ marginLeft: 10 }} />
          </View>
        </Pressable>

        <Text style={styles.welcomeText} >Welcome to Admin Panel 👋</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

          <View style={{ marginHorizontal: 10 }}>
            {/* Turn this disabled to false and add input fields to add new dish */}
            <Pressable
              disabled={true}
              style={({ pressed }) => [styles.addDishBtn, pressed && { backgroundColor: 'rgb(247, 124, 67)' }]}
              onPress={() => { navigation.navigate('AddDish') }}
              TouchableHighlight
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.dishText}>Add New Dish</Text>
                <FontAwesomeIcon icon={faSquarePlus} size={22} color="white" style={{ marginLeft: 20 }} />
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
              <Text style={styles.dishHeadDeleteText}>Delete</Text>
            </View>
            <View style={styles.listBody}>
              {dishes.map((dish) => (
                <View key={dish.id} style={styles.dishBodyRow} >
                  <Text style={styles.dishBodyText}>{dish.name}</Text>
                  <Text style={styles.dishBodyText}>{dish.category}</Text>

                  <Pressable
                    disabled={true}
                    onPress={() => handleDishDelete(dish.id)}
                  >
                    <FontAwesomeIcon
                      icon={faTrash}
                      size={22}
                      color="rgb(247,124,67)"
                      style={styles.trashIcon}
                    />
                  </Pressable>

                </View>
              ))}
            </View>
          </View>

        </View>

      </View>
    </ScrollView>
  )
}

export default AdminPanel;
