import { StyleSheet } from "react-native";

const stylesFn = () =>
  StyleSheet.create({
    container: {
      boxSizing: "border-box",
      color: "rgba(58, 53, 65, 0.87)",
      paddingTop: 48,
      paddingLeft: 20,
      paddingRight: 20,
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
  });

export default stylesFn;
