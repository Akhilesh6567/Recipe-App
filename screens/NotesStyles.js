import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    noteView: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 10,
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,

    },

    noteDeleteView: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    noteRecipeName: {
        width: '100%',
        fontFamily: 'Poppins_500Medium',
        color: 'rgb(247, 124, 67)',
        fontSize: 16,
        marginBottom: 5,
    },

    noteText: {
        width: '100%',
        fontFamily: 'Poppins_400Regular',
        color: '#333',
        fontSize: 14,
        paddingHorizontal: 5,
    },
    noNoteText: {
        width: '100%',
        textAlign: 'center',
        marginTop: 30,
        fontFamily: 'Poppins_400Regular',
        color: '#333',
        fontSize: 14,
    }

});

export default styles;