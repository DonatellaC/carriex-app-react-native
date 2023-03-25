import { View, Text } from "react-native";
import { Button } from "../../components/Button/Button";
import List from "../../components/List/List";
import { lists } from "../../utilities/lists";
import stylesFn from "./styles";

export default function ParcelList() {
  const styles = stylesFn();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Parcel Lists</Text>
      {lists.map((list, index) => (
        <List
          key={index}
          header={list.header}
          carriers={list.carriers}
          date={list.date}
          items={list.items}
          pickUpDate={list.pickUpDate}
        />
      ))}
      <Button shape="round" text="+" />
    </View>
  );
}
