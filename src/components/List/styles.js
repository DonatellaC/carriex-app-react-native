import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    fontFamily: "Inter",
    borderBottomWidth: 0,
    paddingBottom: 10,
    paddingLeft: 14,
    paddingRight: 14,
    fontFamily: "Inter",
    fontStyle: "normal",
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(58, 53, 65, 0.12)",
  },
  header: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19,
    marginBottom: 1,
    color: "rgba(58, 53, 65, 0.87)",
    paddingTop: 16,
  },
  infoRight: {
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
  items: {
    fontSize: 10,
  },
  idNameWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  idText: {
    fontSize: 12,
    lineHeight: 15,
    color: "rgba(58, 53, 65, 0.87)",
    marginRight: 4,
  },
  carrierId: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 17,
  },
  deliveryStatus: {
    display: "flex",
    color: "rgb(223, 0, 0)",
    fontSize: 10,
    fontWeight: "500",
    lineHeight: 12,
    textTransform: "uppercase",
    textAlign: "right",
  },
  currierNameStatusWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  carrierName: {
    display: "flex",
    fontWeight: "400",
    marginRight: 4,
    flex: 1,
    fontweight: 400,
    fontSize: 10,
    lineHeight: 12,
  },
  detailsContainer: {
    display: "flex",
    flexDirection: "row",
  },
  icons: {
    display: "flex",
    marginRight: 13,
    width: 50,
  },
  numbersOfItems: {
    fontweight: 400,
    fontSize: 10,
    lineHeight: 12,
  },
});

export default styles;
