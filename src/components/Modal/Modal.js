import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Button } from "../Button/Button";
import styles from "./styles";

const Modal = ({ title, primaryLabel, secondaryLabel, textButton, onAdd }) => {
  const [primaryInputValue, setPrimaryInputValue] = useState("");
  const [secondaryInputValue, setSecondaryInputValue] = useState("");

  const handlePrimaryInputChange = (value) => {
    setPrimaryInputValue(value);
  };

  const handleSecondaryInputChange = (value) => {
    setSecondaryInputValue(value);
  };

  const handleSubmit = () => {
    if (primaryInputValue && secondaryInputValue) {
      onAdd({
        [primaryLabel]: primaryInputValue,
        [secondaryLabel]: secondaryInputValue,
      });
      setPrimaryInputValue("");
      setSecondaryInputValue("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={primaryInputValue}
          onChangeText={handlePrimaryInputChange}
          placeholder={`${primaryLabel}`}
        />
        <TextInput
          style={styles.input}
          value={secondaryInputValue}
          onChangeText={handleSecondaryInputChange}
          placeholder={`${secondaryLabel}`}
        />
      </View>
      <TouchableOpacity>
        <Button text={textButton} onPress={handleSubmit} />
      </TouchableOpacity>
    </View>
  );
};

export default Modal;
