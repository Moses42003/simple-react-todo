import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const AddBtn = () => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.addbtn}>
      <Text style={{ textAlign: "center", fontSize: 30, color: "#ffff" }}>
        +
      </Text>
    </TouchableOpacity>
  );
};

export default AddBtn;

const styles = StyleSheet.create({
  addbtn: {
    backgroundColor: "#1380fcff",
    width: 50,
    height: 50,
    borderRadius: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
