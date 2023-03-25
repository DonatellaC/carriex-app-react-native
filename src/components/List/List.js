import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import stylesFn from "./styles";

const List = ({ header, carriers, date, items, pickUpDate }) => {
  const styles = stylesFn();
  const { navigate } = useNavigation();

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={() => navigate("Parcel Details")}>
        <Text style={styles.header}>{header}</Text>
        <View style={styles.info}>
          <Text>
            {carriers} carriers will pick up the parcel {pickUpDate}
          </Text>
          <Text>{date}</Text>
        </View>
        <View style={styles.info}>
          <Text>{items} items</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default List;
