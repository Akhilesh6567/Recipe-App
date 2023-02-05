import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'whitesmoke',
        justifyContent: 'center',
        alignItems: 'center',

    },
    inputView: {
        backgroundColor: "white",
        borderRadius: 10,
        width: "80%",
        height: 45,
        marginBottom: 25,
        borderColor: 'rgb(247, 124, 67)',
        borderWidth: 1,
    },
    TextInput: {
        height: 50,
        flex: 1,
        marginLeft: 20,
        color: 'black',
        fontFamily: 'Poppins_400Regular',
        marginTop: 5,
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '70%',
    },
    loginBtn: {
        width: "40%",
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "rgb(247, 124, 67)",
    },
    loginText: {
        color: "white",
        fontFamily: 'Poppins_500Medium',
        paddingTop: 5,
    },
    headerView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    logoText: {
        fontSize: 26,
        color: 'rgb(247, 124, 67)',
        fontFamily: 'Poppins_500Medium',
    },

    loginheading: {
        fontSize: 22,
        color: 'black',
        marginBottom: 20,
        fontFamily: 'Poppins_500Medium',
    },
    logo: {
        width: 130,
        height: 130,
    },
    register: {
        marginTop: 20,
        flexDirection: 'row',
    },
    registerText: {
        color: 'black',
        fontFamily: 'Poppins_400Regular',
    },
    registerBtnText:{
        color: 'rgb(247, 124, 67)',
        fontFamily: 'Poppins_500Medium',
    },

});