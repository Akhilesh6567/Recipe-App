import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    searchSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: 'white',
        borderRadius: 8,
        fontSize: 16,
        padding: 10,
    },
    searchBox: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        fontFamily: 'Poppins_400Regular',
        marginTop: 3,
        
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