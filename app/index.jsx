import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../components/input";
import Task from "../components/task";
import AddBtn from "../components/button";
import { Ionicons } from "@expo/vector-icons";

const Home = () => {
  // states
  const [task, setTask] = useState([
    // {
    //   id: 1,
    //   name: "First Task added",
    //   isComplete: false,
    //   completedAt: null,
    // },
    // {
    //   id: 2,
    //   name: "Second Task added",
    //   isComplete: false,
    //   completedAt: null,
    // },
    // {
    //   id: 3,
    //   name: "Third Task added",
    //   isComplete: false,
    //   completedAt: null,
    // },
  ]);
  // const pendingTasks = task.filter((t) => !t.isComplete);
  // const completedTasks = task.filter((t) => t.isComplete);

  const todos = task.filter((item) => !item.isComplete);
  const completed = task.filter((item) => item.isComplete);

  const [text, setText] = useState("");
  const handleAddTask = () => {
    if (text.trim() === "") return;

    const newTask = {
      id: Date.now(),
      name: text,
      isComplete: false,
      completedAt: null,
    };

    setTask((prev) => [newTask, ...prev]);
    setText("");
  };
  const handlePressCheck = ({ id }) => {
    setTask((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              isComplete: !task.isComplete,
              completedAt: !task.isComplete ? Date.now() : null,
            }
          : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTask((prev) => prev.filter((task) => task.id !== id));
  };

  // for flatlists
  // const renderTodo = ({ item }) => {
  //   return (
  //     <View>
  //       <Task
  //         onPress={() => handlePressCheck({ id: item.id })}
  //         completed={item.isComplete}
  //         task={item.name}
  //         fontSize={18}
  //       />
  //     </View>
  //   );
  // };

  return (
    <SafeAreaView style={{ paddingBottom: 20 }}>
      <View style={styles.headContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 8,
            marginBottom: 15,
          }}
        >
          <Text style={{ fontSize: 40, fontWeight: 700 }}>TO-DO</Text>

          <AddBtn
            onPress={handleAddTask}
            name={"+"}
            color={"#fff"}
            bgcolor={"#1380fcff"}
          />
        </View>
        <Input value={text} onChangeText={setText} />
      </View>

      {/* <FlatList
        style={{ paddingHorizontal: 20, paddingTop: 15 }}
        data={task}
        keyExtractor={(item) => item.id}
        renderItem={renderTodo}
      /> */}

      <View style={{ height: "35%" }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 700,
            marginBottom: 10,
            paddingHorizontal: 15,
          }}
        >
          To Do
        </Text>

        {/* uncompleted lists */}
        <ScrollView
          style={{
            paddingHorizontal: 20,
            paddingBottom: 25,
            // backgroundColor: "green",
            // flex: 1,
            height: "100%",
            // width: "50%",
          }}
        >
          {todos.map((item) => (
            <Task
              onPress={() => handlePressCheck({ id: item.id })}
              completed={item.isComplete}
              task={item.name}
              key={item.id}
              fontSize={18}
              remove={() => handleDeleteTask(item.id)}
            />
          ))}
        </ScrollView>
      </View>

      {/* completed list */}
      <View style={{ height: "40%" }}>
        <Text
          style={{
            paddingHorizontal: 15,
            fontSize: 30,
            fontWeight: 700,
            marginBottom: 10,
          }}
        >
          Completed
        </Text>
        <ScrollView
          style={{
            paddingHorizontal: 20,
            paddingBottom: 25,
            // backgroundColor: "blue",
            height: "100%",
            // flex: 1
            // width: "100%",
          }}
        >
          {completed.map((item) => (
            <Task
              onPress={() => handlePressCheck({ id: item.id })}
              completed={item.isComplete}
              task={item.name}
              key={item.id}
              fontSize={18}
              remove={() => handleDeleteTask(item.id)}
            />
          ))}
        </ScrollView>
      </View>

      {task.length == 0 && (
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            height: "50%",
          }}
        >
          <Ionicons
            name="notifications-off-outline"
            size={100}
            color={"#1380fcff"}
          />
        </View>
      )}

      {/* {completedTasks.length > 0} */}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  headContainer: {
    paddingVertical: 20,
    marginBottom: 20,
    paddingHorizontal: 15,
  },
});
