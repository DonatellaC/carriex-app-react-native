import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button/Button";
import List from "../../components/List/List";
import { lists } from "../../utilities/lists";
import styles from "./styles";

export default function ParcelList() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Parcel Lists</Text>
      {lists.map((list, index) => (
        <List
          key={index}
          header={list.header}
          numbersOfCarriers={`${list.carriers.count} carriers will pick up the parcel ${list.pickUpDate}`}
          date={list.date}
          itemsText={`${list.items} items`}
          hasBorderBottom={index !== lists.length - 1}
          onPress={() => {
            navigation.navigate("Parcel Details", { list: list });
          }}
        />
      ))}
      <Button shape="round" text="+" />
    </View>
  );
}
