import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import stylesFn from "./styles";

const Button = ({ onPress, text, shape }) => {
  const styles = stylesFn({ shape });
  return (
    <TouchableOpacity style={styles.btnBody} onPress={onPress}>
      <View>
        <Text style={styles.btnText} shape={shape}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export { Button };
