import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "rgb(245,245,240)",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 20,
    shadowColor: "rgb(247, 124, 67)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.46,
    elevation: 5,
    borderWidth: 1,
    borderColor: "rgb(247, 124, 67)",
    overflow: "hidden",
  },
  name: {
    width: "65%",
    fontSize: 16,
    color: "#555",
    fontFamily: "Poppins_500Medium",
    marginTop: 2,
  },
  quantity: {
    width: "30%",
    textAlign: "right",
    fontSize: 14,
    color: "#777",
    fontFamily: "Poppins_400Regular",
    marginTop: 3,
  },
});
export default styles;
