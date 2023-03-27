import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import List from "../../components/List/List";
import styles from "./styles";

const ParcelDetails = () => {
  const { params } = useRoute();
  const list = params?.list || {};
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{list?.header}</Text>
      <Text style={styles.items}>{list?.items} items to be picked up</Text>
      {list?.carriers.list.map((carrier, index) => (
        <>
          <TouchableOpacity>
            <List
              key={index}
              deliveryStatus={carrier.status}
              carrierId={`${carrier.id}  Parcel List`}
              carrierName={carrier.name}
              numbersOfItems={`${carrier.items.length} items to be picked up`}
              hasBorderBottom={index !== list?.carriers.list.length - 1}
              icon
              onPress={() =>
                navigation.navigate("Carrier Parcel List", {
                  carrierId: carrier.id,
                  items: carrier.items,
                })
              }
            />
          </TouchableOpacity>
        </>
      ))}
    </View>
  );
};

export default ParcelDetails;
