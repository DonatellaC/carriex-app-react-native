import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;

const stylesFn = ({ shape }) => {
  const borderRadius = shape === "round" ? 24 : 5;
  const buttonWidth = shape === "round" ? 48 : width / 1.3;
  const buttonHeight = shape === "round" ? 48 : 46;

  return StyleSheet.create({
    btnBody: {
      backgroundColor: "#DF0000",
      padding: 0,
      width: buttonWidth,
      borderRadius: borderRadius,
      height: buttonHeight,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "rgba(58, 53, 65, 0.42)",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 1,
      shadowRadius: 2,
      elevation: 2,
      borderWidth: 0,
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
