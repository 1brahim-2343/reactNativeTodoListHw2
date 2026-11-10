import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors, Spacings } from "@/constants/theme";
import { BlurView } from "expo-blur";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { TaskType, TASK_STATS } from "@/constants/initialTasks";
export default function SubHeader({
  tasks,
  addNewTask,
}: {
  tasks: TaskType[];
  addNewTask: (taskName: string) => void;
}) {
  const [taskName, setTaskName] = useState<string>("");
  return (
    <View>
      <View style={styles.statCardsContainer}>
        <View style={styles.statCards}>
          <BlurView
            intensity={40}
            tint="light"
            style={[
              styles.blurContainer,
              { backgroundColor: `${Colors.primary}20` },
            ]}
          >
            <AntDesign name="align-left" size={24} color={Colors.primary} />
          </BlurView>
          <View style={styles.textContainer}>
            <Text style={styles.statCardsTitle}>All tasks</Text>
            <Text style={styles.statsText}>{tasks.length}</Text>
          </View>
        </View>
        <View style={styles.statCards}>
          <BlurView
            intensity={40}
            tint="light"
            style={[
              styles.blurContainer,
              { backgroundColor: `${Colors.success}25` },
            ]}
          >
            <FontAwesome name="check-circle" size={32} color={Colors.success} />
          </BlurView>
          <View style={styles.textContainer}>
            <Text style={styles.statCardsTitle}>Completed</Text>
            <Text style={[styles.statsText, { color: Colors.success }]}>
              {tasks.filter((tasks) => tasks.completed).length}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Add New Task</Text>
        <View style={styles.inputRow}>
          <TextInput
            value={taskName}
            style={styles.input}
            placeholder="Enter your task..."
            placeholderTextColor={Colors.textPlaceholder}
            onChangeText={setTaskName}
            onSubmitEditing={() => {
              setTaskName("");
              addNewTask(taskName);
            }}
          />
          <Pressable
            style={({ pressed }) => [
              styles.addButton,
              pressed && styles.addButtonPressed,
            ]}
            onPress={() => {
              setTaskName("");
              addNewTask(taskName);
            }}
          >
            <AntDesign name="plus" size={20} color={Colors.surface} />
            <Text style={styles.addButtonText}>Add</Text>
          </Pressable>
        </View>
        {!taskName && (
          <View style={styles.errorContainer}>
            <FontAwesome
              name="exclamation-circle"
              size={20}
              color={Colors.error}
            />
            <Text style={styles.errorText}>Please enter a task!</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  statCardsContainer: {
    flexDirection: "row",
    width: "100%",
    gap: Spacings.large,
    marginTop: Spacings.xLarge,
  },
  statCards: {
    flex: 1,
    backgroundColor: "#e2e2e2a0",
    padding: Spacings.large,
    borderRadius: 14,
    flexDirection: "row",
    gap: Spacings.large,
  },
  blurContainer: {
    borderRadius: 8,
    padding: Spacings.small,
    overflow: "hidden",
    width: 40,
    height: 40,
    alignItems: "center",
  },
  statCardsTitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    fontWeight: 700,
  },
  textContainer: {
    flexDirection: "column",
  },
  statsText: {
    fontWeight: 800,
    fontSize: 28,
  },
  inputContainer: {
    backgroundColor: Colors.surface,
    borderRadius: 24,
    paddingHorizontal: Spacings.extraLarge,
    marginTop: Spacings.large,
    gap: Spacings.large,
  },
  inputTitle: {
    fontSize: 20,
    fontWeight: 800,
    color: Colors.text,
  },
  inputRow: {
    flexDirection: "row",
    gap: Spacings.large,
  },
  input: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: Colors.border,
    borderRadius: 16,
    paddingHorizontal: Spacings.extraLarge,
    fontSize: 16,
    color: Colors.text,
  },
  addButton: {
    backgroundColor: Colors.primary,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: Spacings.mediumLarge,
    paddingHorizontal: Spacings.xLarge,
    paddingVertical: Spacings.large,
  },
  addButtonText: {
    color: Colors.surface,
    fontSize: 18,
    fontWeight: 600,
  },
  errorContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacings.large,
  },
  errorText: {
    color: Colors.error,
    fontSize: 16,
    fontWeight: 500,
  },
  addButtonPressed: {
    backgroundColor: Colors.primaryDark,
    transform: [{ scale: 0.96 }],
  },
});
