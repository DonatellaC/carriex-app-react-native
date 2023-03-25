import { StyleSheet } from "react-native";

const stylesFn = () =>
  StyleSheet.create({
    wrapper: {
      display: "flex",
      flexDirection: "column",
    },
    header: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 8,
    },
    info: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 8,
    },
    infoText: {
      fontSize: 16,
    },
  });

export default stylesFn;
