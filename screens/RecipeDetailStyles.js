import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    videoContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 270,
        padding: 25,
    },

    image: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },


    description: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#f3f3f3',
        marginTop: 15,
        marginBottom: 20,
        paddingVertical: 20,
        paddingHorizontal: 25,
        borderRadius: 15,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
    },
    descHeading: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 20, color: '#000',
        lineHeight: 32,
    },
    descText: {
        fontSize: 16,
        color: '#000',
        textAlign: 'justify',
        fontFamily: 'Poppins_300Light',
    },

    ingredientCards: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 'auto',
        paddingHorizontal: 25,
    },
    heading: {
        fontSize: 18,
        color: '#333',
        paddingHorizontal: 25,
        marginTop: 5,
        marginBottom: 25,
        fontFamily: 'Poppins_500Medium',
    },
    timeHeading: {
        fontSize: 16,
        fontFamily: 'Poppins_400Regular',
        color: '#333',
        paddingHorizontal: 25,
        marginTop: 7,
        marginBottom: 25,
    },
    cardsHeader: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    prepStepsText: {
        fontFamily: "Poppins_500Medium",
        color: "whitesmoke",
        fontSize: 17,
        textAlign: "center",
    }

});

export default styles;