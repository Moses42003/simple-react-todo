import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Input = ({value, onChangeText}) => {
  return (
    <View>
      <TextInput
        
        style={{
          fontSize: 20,
          paddingHorizontal: 8,
          borderColor: "#ccc",
          borderWidth: 1,
          borderRadius: 10,
        }}
        placeholder="Add a new task"
        value={value}
        onChangeText={onChangeText}
      />
      
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  
});
