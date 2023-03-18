import { StyleSheet } from "react-native";

export default StyleSheet.create({
    prepCard: {
        backgroundColor: "#fff",
        marginHorizontal: 15,
        marginVertical: 10,
        padding: 15,

        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 0,
        fontFamily: 'Poppins_500Medium'
    },
    cardContent: {
        fontSize: 16,
        marginVertical: 10,
        color: '#333',
        fontFamily: 'Poppins_400Regular'
    },


});
