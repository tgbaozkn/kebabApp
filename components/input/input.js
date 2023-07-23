import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./input.style";

const Input = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}:</Text>
      <View style={styles.input_container}>
        <TextInput
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
          inputMode={props.inputMode}
          keyboardType={props.keyboardType}
        />
      </View>
    </View>
  );
};
export default Input;
