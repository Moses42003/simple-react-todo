import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../components/input";
import Task from "../components/task";
import AddBtn from "../components/button";

const Home = () => {
  const [task, setTask] = useState([
    {
      id: 1,
      name: "First Task added",
      isComplete: false,
    },
    {
      id: 2,
      name: "Second Task added",
      isComplete: false,
    },
    {
      id: 3,
      name: "Third Task added",
      isComplete: false,
    },
  ]);

  const handlePressCheck = ({ id }) => {
    setTask((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  };

  const renderTodo = ({ item }) => {
    return (
      <View>
        <Task onPress={() => handlePressCheck({id: item.id})} completed={item.isComplete} task={item.name} />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.headContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 8,
          }}
        >
          <Text style={{ fontSize: 40, fontWeight: 700 }}>TO-DO</Text>
          <AddBtn />
        </View>
        <Input />
      </View>

      <FlatList
        style={{ paddingHorizontal: 20, paddingTop: 15 }}
        data={task}
        keyExtractor={(item) => item.id}
        renderItem={renderTodo}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  headContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});
