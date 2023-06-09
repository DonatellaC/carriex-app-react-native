import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;

const stylesFn = ({ shape }) => {
  const borderRadius = shape === "round" ? 24 : 5;
  const buttonWidth = shape === "round" ? 48 : "100%";
  const buttonHeight = shape === "round" ? 48 : 46;
  const buttonFontSize = shape === "round" ? 24 : 14;

  return StyleSheet.create({
    btnBody: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#DF0000",
      padding: 0,
      width: buttonWidth,
      borderRadius: borderRadius,
      height: buttonHeight,
      shadowColor: "rgba(58, 53, 65, 0.42)",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 1,
      shadowRadius: 2,
      elevation: 2,
      borderWidth: 0,
      position: "fixed",
      bottom: 0,
      elevation: 8,
      marginBottom: 20,
    },
    btnText: {
      color: "#FFFFFF",
      fontSize: buttonFontSize,
      textAlign: "center",
      // fontFamily: "Inter",
      fontWeight: 500,
      lineHeight: 24,
      letterSpacing: 0.4,
      textTransform: "uppercase",
      alignItems: "center",
    },
  });
};

export default stylesFn;
