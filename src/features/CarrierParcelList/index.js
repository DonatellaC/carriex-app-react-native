import { View, Text, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
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
    <View>
      <Text> {carrierId} Parcel List</Text>
      {items.map((item, index) => (
        <Text key={item.id.$oid}>
          <Text>{item.type}</Text>
          <Text style={styles.itemId}>{item.id.$oid}</Text>
          {item.weight && <Text>Weight: {weightInKilos(item.weight)}</Text>}
        </Text>
      ))}
      <TouchableOpacity>
        <View>
          <Button text="Delivery" onPress={handleSubmit} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
