import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;

const stylesFn = () => {
  return StyleSheet.create({
    btnBody: {
      backgroundColor: "#DF0000",
      padding: 0,
      width: width / 1.3,
      borderRadius: 5,
      height: 46,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "rgba(58, 53, 65, 0.42)",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 1,
      shadowRadius: 2,
      elevation: 2,
      border: "none",
    },
    btnText: {
      color: "#FFFFFF",
      fontSize: 14,
      textAlign: "center",
      fontFamily: "Inter",
      fontWeight: 500,
      lineHeight: 24,
      letterSpacing: 0.4,
      textTransform: "uppercase",
    },
  });
};

export default stylesFn;
