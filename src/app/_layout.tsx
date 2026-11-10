import * as SplashScreen from "expo-splash-screen";
import { Alert, Platform, StatusBar, Text, useColorScheme } from "react-native";
import Header from "@/components/myHw2/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { Spacings } from "@/constants/theme";
import SubHeader from "@/components/myHw2/SubHeader";
import { useState } from "react";
import { INITIAL_TASKS, TaskType } from "@/constants/initialTasks";
import TaskList from "@/components/myHw2/TaskList";

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [tasks, setTasks] = useState<TaskType[]>(INITIAL_TASKS);
  const handleNewTask = (taskName: string) => {
    if (taskName.length == 0) {
      Alert.alert("ERROR", "Task name can not be empty");
      return;
    }
    let newTask: TaskType = {
      id: `t${tasks.length + 1}`,
      title: taskName,
      completed: false,
    };
    setTasks([...tasks, newTask]);

    Alert.alert("Cart summary", `Task ${taskName} was added`);
  };
  const toggleTaskStatus = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };
  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginHorizontal: Spacings.large,
      }}
    >
      <Header></Header>
      <SubHeader tasks={tasks} addNewTask={handleNewTask} />
      <TaskList
        tasks={tasks}
        toggleTaskStatus={toggleTaskStatus}
        deleteTask={deleteTask}
      />
    </SafeAreaView>
  );
}
