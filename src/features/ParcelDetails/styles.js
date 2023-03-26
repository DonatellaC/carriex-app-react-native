import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  items: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 12,
    color: "rgba(58, 53, 65, 0.87)",
  },
  carrierWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0,
    paddingBottom: 10,
    paddingLeft: 14,
    paddingRight: 14,
  },
  iconsWrapper: {
    display: "flex",
    justifyContent: "center",
    marginRight: 8,
  },
  iconWrapper: {
    position: "absolute",
  },
  iconRectangle: {
    display: "flex",
  },
  iconCargo: {
    display: "flex",
  },
  containerIdName: {
    display: "flex",
  },
});
export default styles;
