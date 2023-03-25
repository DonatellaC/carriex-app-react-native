import React from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import styles from "./styles";

const ParcelDetails = () => {
  const { params } = useRoute();
  const list = params?.list || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{list?.header}</Text>
      <Text style={styles.text}>Carriers: {list?.carriers}</Text>
      <Text style={styles.text}>Pickup Date: {list?.pickUpDate}</Text>
      <Text style={styles.text}>Date: {list?.date}</Text>
      <Text style={styles.text}>Items: {list?.items}</Text>
    </View>
  );
};

export default ParcelDetails;
