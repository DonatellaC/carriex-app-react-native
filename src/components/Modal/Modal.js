import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Button } from "../Button/Button";
import styles from "./styles";

const Modal = ({
  title,
  primaryLabel,
  secondaryLabel,
  textButton,
  onAdd,
  onClose,
}) => {
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
      onClose();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>{primaryLabel}</Text>
        <TextInput
          style={styles.input}
          value={primaryInputValue}
          onChangeText={handlePrimaryInputChange}
          placeholder={`Please type an ${primaryLabel}`}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>{secondaryLabel}</Text>
        <TextInput
          style={styles.input}
          value={secondaryInputValue}
          onChangeText={handleSecondaryInputChange}
          placeholder={`Please type a ${secondaryLabel}`}
        />
      </View>
      <TouchableOpacity>
        <View style={styles.button}>
          <Button text={textButton} onPress={handleSubmit} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Modal;
