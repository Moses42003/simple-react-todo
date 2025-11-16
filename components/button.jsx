import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const AddBtn = ({ onPress, name, color, bgcolor }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{
        backgroundColor: bgcolor,
        height: 50,
        width: 50,
        borderRadius: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          // backgroundColor: bgcolor,
          fontSize: 30,
          color: color,
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default AddBtn;

const styles = StyleSheet.create({
});
