import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    height: "auto",
  },
  card: {
    height: 350,
    width: "85%",
    borderRadius: 28,
    overflow: "hidden",
    marginBottom: 50,
    backgroundColor: "white",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.58,
    shadowRadius: 10.00,

    elevation: 12,
  },
  iconsGroup: {
    position: "absolute",
    top: 20,
    right: 20,
    flexDirection: "column",
  },

  favorite: {
    backgroundColor: "orange",
    borderRadius: 10,
    padding: 10,
    borderColor: "white",
  },
  delete: {
    backgroundColor: "#eee",
    borderRadius: 10,
    padding: 10,
  },
  note: {
    marginTop: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    padding: 7,
  },
  noteIcon: {
    width: 26,
    height: 26,
  },

  deleteIcon: {
    color: "rgb(252, 132, 30)",
    backgroundColor: "#eee",
  },

  favoriteIcon: {
    color: "white",
    backgroundColor: "orange",
  },
  recipeDetails: {
    position: "absolute",
    bottom: 20,
    left: 20,
  },
  recipeName: {
    color: "white",
    fontSize: 26,
    fontFamily: "Poppins_700Bold",
  },
  recipeDesc: {
    color: "whitesmoke",
    fontSize: 15,
    fontFamily: "Poppins_400Regular",
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 800,
  },
});

export default styles;
