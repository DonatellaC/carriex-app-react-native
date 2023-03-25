import { StyleSheet } from "react-native";

const stylesFn = () =>
  StyleSheet.create({
    wrapper: {
      display: "flex",
      flexDirection: "column",
      fontFamily: "Inter",
      borderBottomWidth: 1,
      borderBottomColor: "rgba(58, 53, 65, 0.12)",
      paddingBottom: 10,
      paddingLeft: 14,
      paddingRight: 14,
    },
    header: {
      fontSize: 16,
      fontWeight: "500",
      lineHeight: 19,
      marginBottom: 1,
      color: "rgba(58, 53, 65, 0.87)",
      paddingTop: 16,
    },
    info: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 4,
    },
    infoText: {
      fontSize: 10,
      fontWeight: "400",
      lineHeight: 12,
      color: "rgba(58, 53, 65, 0.87)",
    },
    infoTextDate: {
      color: "rgb(223, 0, 0)",
      fontSize: 10,
      fontWeight: "500",
      lineHeight: 12,
      textAlign: "right",
    },
  });

export default stylesFn;
