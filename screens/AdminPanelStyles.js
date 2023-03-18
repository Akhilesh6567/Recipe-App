import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 'auto',
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  welcomeText: {
    marginVertical: 10,
    color: 'rgb(247, 124, 67)',
    fontSize: 24,
    fontFamily: 'Poppins_600SemiBold',
  },
  logoutButton: {
    alignSelf: 'flex-end',
    backgroundColor: 'rgb(247, 124, 67)',
    padding: 8,
    borderRadius: 5,
    marginVertical: 10,
    width: 110,
    alignItems: 'center',
    marginRight: 10

  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins_500Medium',
    marginTop: 2
  },
  addDishBtn: {
    backgroundColor: 'rgb(247, 124, 67)',
    padding: 8,
    borderRadius: 5,
    marginVertical: 10,
    width: 300,
    alignItems: 'center',
    marginRight: 10
  },
  dishText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Poppins_400Regular',
    marginTop: 2
  },
  dishlistContainer: {
    backgroundColor: '#eaeaea',
    width: '95%',
    height: 'auto',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgb(247, 124, 67)',
    borderWidth: 1,
  },
  dishlistText: {
    color: 'rgb(247, 124, 67)',
    fontSize: 20,
    fontFamily: 'Poppins_500Medium',
    marginTop: 2
  },
  dishList: {
    width: '100%',
  },
  listHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(247, 124, 67)',
    paddingVertical: 5,
  },
  listHeadText: {
    width: '35%',
    color: '#333',
    fontSize: 16,
    fontFamily: 'Poppins_500Medium',
    marginTop: 2
  },
  dishHeadDeleteText: {
    color: '#333',
    fontSize: 16,
    fontFamily: 'Poppins_500Medium',
    marginTop: 2
  },
  listBody: {
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  dishBodyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
  },
  dishBodyNameText: {
    width: '35%',
    color: '#333',
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
    marginTop: 2,
  },
  dishBodyText: {
    width: '35%',
    color: '#333',
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    marginTop: 2,
  },

  trashIcon: {
    width: '30%',
    color: 'rgb(247,124,67)',
    fontSize: 18,
    marginTop: 3
  }

});

export default styles;