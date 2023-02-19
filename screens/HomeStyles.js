import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: 'auto',
    },

    headerContainer: {
        height: 'auto',
        paddingVertical: 25,
        backgroundColor: 'rgb(247, 124, 67)',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderColor: 'red',
    },

    dishesContainer: {
        height: 600,
        marginVertical: 10,
    },

    heading: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        marginTop: 40,
        marginBottom: 10,
        marginLeft: 30,
        lineHeight: 32,
    }
})

export default styles;