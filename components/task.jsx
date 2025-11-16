import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Task = ({ task, otherStyles, completed, onPress, fontSize, remove }) => {
  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <Ionicons
          size={30}
          color={
            completed == true
              ? "green"
              : completed == false
              ? "gray"
              : "gray"
          }
          name={
            completed == true
              ? "checkmark-done-circle"
              : completed == false
              ? "checkmark-circle-outline"
              : "checkmark-circle-outline"
          }
        />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: fontSize,
          paddingHorizontal: 8,
          paddingVertical: 10,
          // width: "100%"
          flex: 1
        }}
      >
        {task}
      </Text>

      <TouchableOpacity activeOpacity={0.6} onPress={remove}>
        <Ionicons name="close-circle-outline" color={"red"} size={30}/>
      </TouchableOpacity>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
