import { TaskType } from "@/constants/initialTasks";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors, Spacings } from "@/constants/theme";

export default function Task({
  task,
  toggleTaskStatus,
  deleteTask,
}: {
  task: TaskType;
  toggleTaskStatus: (id: string) => void;
  deleteTask: (id: string) => void;
}) {
  return (
    <View style={styles.card}>
      <Pressable
        style={[styles.checkCircle, task.completed && styles.checkCircleDone]}
        onPress={() => toggleTaskStatus(task.id)}
      >
        {task.completed && (
          <AntDesign name="check" size={16} color={Colors.surface} />
        )}
      </Pressable>
      <Text style={[styles.taskText, task.completed && styles.taskTextDone]}>
        {task.title}
      </Text>
      <Pressable onPress={() => deleteTask(task.id)}>
        <AntDesign name="delete" size={24} color={Colors.error} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    paddingVertical: Spacings.extraLarge,
    paddingHorizontal: Spacings.extraLarge,
    flexDirection: "row",
    alignItems: "center",
    gap: Spacings.extraLarge,
  },
  checkCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: Colors.textSecondary,
    alignItems: "center",
    justifyContent: "center",
  },
  checkCircleDone: {
    backgroundColor: Colors.success,
    borderColor: Colors.success,
  },
  taskText: {
    flex: 1,
    fontSize: 20,
    color: Colors.text,
  },
  taskTextDone: {
    textDecorationLine: "line-through",
    color: Colors.textSecondary,
  },
});
