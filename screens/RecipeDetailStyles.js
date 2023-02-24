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
        backgroundColor: '#fff',
        marginTop: 30,
        marginBottom: 30,
        padding: 20,
        borderRadius: 0,
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
    }

});

export default styles;