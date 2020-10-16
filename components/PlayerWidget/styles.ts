import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 48,
    backgroundColor: Colors.dark.background,
    borderWidth: 0,
    borderColor: Colors.dark.background,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    width: "100%",
  },
  progress: {
    height: 3,
    backgroundColor: "#bcbcbc",
  },
  row: {
    flexDirection: "row",
  },
  image: {
    width: 75,
    height: 75,
  },
  rightContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  nameContainer: {
    justifyContent: "space-around",
    marginLeft: 15,
    padding: 5,
    width: 160,
  },
  iconsContainer: {
    marginRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 80,
  },
  title: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  artist: {
    color: "lightgray",
    fontSize: 12,
  },
});
