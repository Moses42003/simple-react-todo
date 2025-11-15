import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Task = ({ task, otherStyles, completed, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.taskContainer}>
      <Ionicons
        size={30}
        color={
          completed == true ? "#1380fcff" : completed == false ? "gray" : "gray"
        }
        name={
          completed == true
            ? "checkmark-done-circle"
            : completed == false
            ? "checkmark-circle-outline"
            : "checkmark-circle-outline"
        }
      />
      <Text style={{ fontSize: 22, paddingHorizontal: 8, paddingVertical: 10 }}>
        {task}
      </Text>
    </TouchableOpacity>
  );
};

export default Task;

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
