import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: 375,
    height: 354,
    left: 0,
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    top: 410,
    zIndex: 1,
  },
  title: {
    paddingTop: 29,
    paddingLeft: 46,
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 24,
    color: "rgba(58, 53, 65, 0.87)",
    // fontFamily: "Inter",
    fontStyle: "normal",
    marginBottom: 30,
  },
  input: {
    marginBottom: 15,
    color: "rgba(58, 53, 65, 0.87)",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 24,
    borderRadius: 5,
    marginLeft: 22,
    marginRight: 22,
  },
  label: {
    backgroundColor: "#FFFFFF",
    position: "absolute",
    color: "rgba(58, 53, 65, 0.87)",
    top: -12,
    left: 35,
    padding: 5,
    fontSize: 12,
    zIndex: 1,
  },
  button: {
    paddingLeft: 20,
    paddingRight: 21,
    marginTop: 40,
  },
});

export default styles;
