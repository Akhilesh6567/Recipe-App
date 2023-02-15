import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 'auto',
        backgroundColor: 'whitesmoke',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
      },
    heading: {
        fontSize: 20,
        fontFamily: 'Poppins_400Regular',
        color: 'black',
        marginTop: 20,
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        marginHorizontal: 20,
    },
    label: {
        width: '30%',
        fontSize: 16,
        color: 'black',
        fontFamily: 'Poppins_400Regular',
    },
    labels: {
        width: '30%',
        fontSize: 16,
        color: 'black',
        fontFamily: 'Poppins_400Regular',
        marginLeft: 10,

    },
    inputField: {
        height: 35,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: 'black',
        width: '65%',
        borderRadius: 8,
        backgroundColor: 'white',
    },
    ingredientNo: {
        height: 35,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: 'black',
        width: '20%',
        borderRadius: 8,
        backgroundColor: 'white',
        float: 'left',
    },
    nameField: {
        height: 35,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: 'black',
        width: '45%',
        borderRadius: 8,
        backgroundColor: 'white',
        float: 'left',
    },
    quanField: {
        height: 35,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: 'black',
        width: '45%',
        borderRadius: 8,
        backgroundColor: 'white',
        float: 'left',
    },
    addDishButton: {
        backgroundColor: 'rgb(247, 124, 67)',
        padding: 8,
        borderRadius: 5,
        marginVertical: 10,
        width: 150,
        alignItems: 'center',
        marginRight:10
    
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Poppins_500Medium',
        marginTop:2
      },

});      

export default styles;