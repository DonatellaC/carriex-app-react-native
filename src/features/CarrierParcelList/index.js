import { View, Text, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import List from "../../components/List/List";
import { Button } from "../../components/Button/Button";
import styles from "./styles";

export default function CarrierParcelList() {
  const { params } = useRoute();
  const { carrierId, items } = params;

  const weightInKilos = (weight) => {
    const weightInGrams = parseFloat(weight);
    if (weightInGrams < 1000) {
      return `${Math.round(weightInGrams)} g`;
    } else {
      const weightInKilos = (weightInGrams / 1000).toFixed(1);
      return `${weightInKilos.replace(/\.0$/, "")} kg`;
    }
  };

  const handleSubmit = () => {
    console.log("Open Delivery information Modal");
  };

  return (
    <View style={styles.container}>
      <Text> {carrierId} Parcel List</Text>
      {items.map((item, index) => (
        <>
          <TouchableOpacity>
            <List
              key={index}
              carrierId={
                <Text style={styles.parcelItemId}>{item.id.$oid}</Text>
              }
              carrierName={
                item.weight && <Text>{weightInKilos(item.weight)}</Text>
              }
              hasBorderBottom={index !== items?.length - 1}
            />
          </TouchableOpacity>
        </>
      ))}
      <TouchableOpacity>
        <View style={styles.button}>
          <Button text="Delivery" onPress={handleSubmit} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
