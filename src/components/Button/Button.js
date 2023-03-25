import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import stylesFn from "./styles";

const Button = ({ onPress, text }) => {
  const styles = stylesFn();
  return (
    <TouchableOpacity style={styles.btnBody} onPress={onPress}>
      <View>
        <Text style={styles.btnText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export { Button };
