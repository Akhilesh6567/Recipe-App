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
    backgroundColor:
      "linear-gradient(140deg, rgba(236,236,236,1) 0%, rgba(221,221,221,1) 40%, rgba(91,91,91,1) 76%, rgba(0,0,0,1) 100%)",
    borderRadius: 28,
    overflow: "hidden",
    marginBottom: 50,
  },
  favorite: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "orange",
    borderRadius: 10,
    padding: 10,
    borderColor: "white",
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
