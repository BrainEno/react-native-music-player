import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    margin: 10,
  },
  image: {
    width: 75,
    height: 75,
  },
  rightContainer: {
    justifyContent: "space-around",
    marginLeft: 10,
  },
  title: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  artist: {
    color: "lightgray",
    fontSize: 10,
  },
});
