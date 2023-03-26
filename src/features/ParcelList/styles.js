import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    boxSizing: "border-box",
    color: "rgba(58, 53, 65, 0.87)",
    paddingTop: 48,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 30,
    marginBottom: 40,
    backgroundColor: "#fff",
    flex: 1,
  },
  title: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 24,
    lineHeight: 29,
    paddingBottom: 8,
    paddingLeft: 14,
  },
  overlay: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  modalOpenContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default styles;
