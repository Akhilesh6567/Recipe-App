import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        maxWidth: '100%',
        marginHorizontal: 30,
        marginTop: 20,
    },
    searchBox: {
        height: 50,
        width: '100%',
        color: 'black',
        backgroundColor: 'white',
        borderRadius: 8,
        fontSize: 16,
        paddingTop: 14,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily: 'Poppins_400Regular',
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: .5,
        shadowRadius: 10,
        elevation: 10,
    },
    contentContainer: {
        marginHorizontal: 30,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    tag: {
        backgroundColor: '#fff',
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 8,
        marginRight: 30,
    },
    activeTag: {
        backgroundColor: '#D45317',
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 8,
        marginRight: 30,
        borderWidth: 1,
        borderColor: '#222',
    },
    tagText: {
        color: '#666',
        fontSize: 14,
        fontFamily: 'Poppins_400Regular',
        paddingTop: 3,
    },
    activeTagText: {
        color: '#fff',
        fontSize: 14,
        fontFamily: 'Poppins_500Medium',
        paddingTop: 3,
    },

})
export default styles;