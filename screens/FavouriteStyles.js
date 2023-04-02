import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    scrollableView: {
        alignItems: "center",
        width: "100%",
        height: "auto",
        paddingTop: 30,
        paddingBottom: 50,
    },
    noFav: {
        width: "100%",
        height: Dimensions.get("window").height - 200,
        alignItems: "center",
        justifyContent: "center",
    },
    noFavText: {
        fontSize: 18,
        foontFamily: "Poppins_500Medium",
        color: "#000",
    },

});

export default styles;
