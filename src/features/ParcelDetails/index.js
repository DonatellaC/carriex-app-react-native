import React from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import styles from "./styles";

const ParcelDetails = ({ hasBorderBottom }) => {
  const { params } = useRoute();
  const list = params?.list || {};

  return (
    <View style={[styles.container, hasBorderBottom && styles.borderBottom]}>
      <Text style={styles.title}>{list?.header}</Text>
      <Text style={styles.items}>{list?.items} items to be picked up</Text>
      {list?.carriers.list.map((carrier) => (
        <View key={carrier.id} style={styles.carrierWrapper}>
          <Text>{carrier.id} Parcel List</Text>
          <Text>{carrier.name}</Text>
          <Text>{carrier.status}</Text>
          <Text>{carrier.items.length} items to be picked up</Text>
        </View>
      ))}
    </View>
  );
};

export default ParcelDetails;
