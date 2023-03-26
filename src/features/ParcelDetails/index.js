import React from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import styles from "./styles";
import CargoTruck from "../../utilities/cargoTruck";
import Rectangle from "../../utilities/reactangle";

const ParcelDetails = () => {
  const { params } = useRoute();
  const list = params?.list || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{list?.header}</Text>
      <Text style={styles.items}>{list?.items} items to be picked up</Text>
      {list?.carriers.list.map((carrier) => (
        <View key={carrier.id} style={styles.carrierWrapper}>
          <View style={styles.iconsWrapper}>
            <View style={styles.iconWrapper}>
              <Rectangle style={styles.iconRectangle} />
            </View>
            <View style={styles.iconWrapper}>
              <CargoTruck style={styles.iconCargo} />
            </View>
          </View>
          <View style={styles.containerIdName}>
            <Text>{carrier.id} Parcel List</Text>
            <Text>{carrier.name}</Text>
          </View>
          <Text>{carrier.status}</Text>
          <Text>{carrier.items.length} items to be picked up</Text>
        </View>
      ))}
    </View>
  );
};

export default ParcelDetails;
