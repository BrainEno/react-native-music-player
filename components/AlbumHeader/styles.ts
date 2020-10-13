import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 24,
    color: "white",
  },
  creatorContainer: {
    flexDirection: "row",
    margin: 10,
  },
  creator: {
    color: "#cfd0d3",
    margin: 5,
    fontSize: 15,
  },
  likes: {
    color: "white",
    margin: 5,
    fontSize: 15,
  },
  button: {
    backgroundColor: "#1cd05d",
    height: 50,
    width: 160,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
