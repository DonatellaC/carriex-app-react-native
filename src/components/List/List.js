import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const List = ({
  header,
  carriers,
  date,
  items,
  pickUpDate,
  hasBorderBottom,
  onPress,
}) => {
  return (
    <View style={[styles.wrapper, hasBorderBottom && styles.borderBottom]}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.header}>{header}</Text>
        <View style={styles.info}>
          <Text style={styles.infoText}>
            {carriers} carriers will pick up the parcel {pickUpDate}
          </Text>
          <Text style={styles.infoTextDate}>{date}</Text>
        </View>
        <View style={styles.info}>
          <Text>{items} items</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default List;
