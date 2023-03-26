import React from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import List from "../../components/List/List";
import styles from "./styles";
import Icons from "../../components/Icons/Icons";

const ParcelDetails = () => {
  const { params } = useRoute();
  const list = params?.list || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{list?.header}</Text>
      <Text style={styles.items}>{list?.items} items to be picked up</Text>
      {list?.carriers.list.map((carrier, index) => (
        <List
          key={carrier.id}
          deliveryStatus={carrier.status}
          carrierId={`${carrier.id}  Parcel List`}
          carrierName={carrier.name}
          numbersOfItems={`${carrier.items.length} items to be picked up`}
          hasBorderBottom={index !== list?.carriers.list.length - 1}
          icon
        />
      ))}
    </View>
  );
};

export default ParcelDetails;
