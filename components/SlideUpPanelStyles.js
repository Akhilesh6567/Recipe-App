import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 20,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10
    },
    newNoteView: {
        flexDirection: 'row',
        width: '100%',
        marginVertical: 10
    },
    newNoteText: {
        fontSize: 16,
        fontFamily: 'Poppins_500Medium',
    },
    plusIcon: {
        marginLeft: 10
    },
    noteFieldView: {
        width: '100%',
        height: 150,
        flexDirection: 'column',
        alignItems: 'flex-end',
        borderRadius: 10,
        marginBottom: 15,
    },
    noteInput: {
        width: '100%',
        height: 100,
        textAlignVertical: 'top',
        fontFamily: 'Poppins_400Regular',
        color: '#333',
        backgroundColor: 'white',
        borderRadius: 6,
        fontSize: 14,
        padding: 10,
        borderWidth: 1,
        borderColor: 'rgb(247, 124, 67)'
    },

    buttonsGroup: {
        width: '20%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    trashIcon: {
        borderRadius: 5,
        backgroundColor: '#fff',
        marginBottom: 6,
        padding: 8,
    },

    saveButton: {
        backgroundColor: 'rgb(247, 124, 67)',
        borderRadius: 5,
        marginTop: 6,
        paddingHorizontal: 18,
        paddingVertical: 6,
    },

    saveButtonText: {
        color: '#fff',
        fontSize: 14,
        fontFamily: 'Poppins_500Medium',
    },
    savedNoteView: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        borderRadius: 10,
        marginVertical: 10,
    },
    savedNote: {
        width: '80%',
        textAlignVertical: 'top',
        fontFamily: 'Poppins_400Regular',
        color: '#333',
        backgroundColor: 'white',
        borderRadius: 6,
        fontSize: 14,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc'
    },
    savedNoteButtonView: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    deleteSavedNote: {
        borderRadius: 5,
        padding: 8,
        backgroundColor: 'white',

    },
    noNotesText: {
        color: '#555',
        fontSize: 14,
        fontFamily: 'Poppins_400Regular',
        textAlign: 'center',
        marginTop: 10
    }

});

export default styles;
