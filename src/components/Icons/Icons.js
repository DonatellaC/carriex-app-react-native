import React from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "./styles";

const Icons = ({ firstIcon, secondIcon }) => {
  return (
    <View>
      <TouchableOpacity>
        <View style={styles.container}>
          <View style={styles.iconsWrapper}>
            <View style={styles.firstIcon}>{firstIcon}</View>
            <View style={styles.secondIcon}>{secondIcon}</View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Icons;
