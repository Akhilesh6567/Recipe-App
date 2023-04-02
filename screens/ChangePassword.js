import React, { useState, useContext } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native'
import UserContext from '../context/auth/UserContext'
import { resetPassword } from '../middlewares/resetPassword'
import isPasswordValid from '../utils/isPasswordValid'
import { Toast } from 'toastify-react-native'
const ChangePassword = ({ navigation }) => {

    const userContext = useContext(UserContext);
    const { user } = userContext;

    const [Credential, setCredential] = useState({
        password: '',
        confirmPassword: '',
    })

    const handleResetPassword = async () => {

        try {
            if (Credential.password === '' || Credential.confirmPassword === '') {
                alert('Please fill in all fields')
            }
            else if (!isPasswordValid(Credential.password)) {
                Toast.error('Password must be AlphaNumeric')
            }
            else if (Credential.password !== Credential.confirmPassword) {
                alert('New password and confirm password do not match')
            }
            else {
                const resetPasswordStatus = await resetPassword({ id: user.id, password: Credential.password })
                if (resetPasswordStatus) {
                    navigation.navigate('Profile')
                    Toast.success('Password reset successful')
                }
            }

        } catch (error) {
            alert(error);
        }
    }


    return (
        <View style={styles.container}>

            <View style={styles.inputContainer}>

                <View style={styles.inputView}>
                    <Text> New Password </Text>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="New Password"
                        placeholderTextColor="grey"
                        secureTextEntry={true}
                        onChangeText={(password) => setCredential({ ...Credential, password })}
                    />
                </View>

                <View style={styles.inputView}>
                    <Text> Confirm Password </Text>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Confirm Password"
                        placeholderTextColor="grey"
                        secureTextEntry={true}
                        onChangeText={(confirmPassword) => setCredential({ ...Credential, confirmPassword })}
                    />
                </View>

                <Pressable
                    style={({ pressed }) => [styles.passButton, pressed && { backgroundColor: 'rgb(247, 124, 67)' }]}
                    onPress={handleResetPassword}
                    TouchableHighlight
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.buttonText}>Reset Password </Text>
                        {/* <FontAwesomeIcon icon={faRightFromBracket} size={16} color="white" style={{marginLeft: 10}}/> */}
                    </View>
                </Pressable>


            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: 'whitesmoke',
        alignItems: 'center',
    },
    inputContainer: {
        width: '100%',
        height: 'auto',
        marginTop: 60,
        alignItems: 'center',
    },

    inputView: {
        width: "90%",
        height: 'auto',
    },

    TextInput: {
        width: "100%",
        height: 45,
        padding: 10,
        color: 'black',
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: 'rgb(247, 124, 67)',
        borderRadius: 10,
        marginBottom: 20,
        marginTop: 5,
        fontFamily: 'Poppins_400Regular',
    },

    buttonText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Poppins_500Medium',
        marginTop: 2
    },
    passButton: {
        width: '90%',
        height: 45,
        backgroundColor: 'rgb(247, 124, 67)',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10,
    },

})


export default ChangePassword
