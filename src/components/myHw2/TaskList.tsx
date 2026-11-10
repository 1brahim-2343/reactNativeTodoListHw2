import { TaskType } from "@/constants/initialTasks";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import Task from "./Task";
import { Colors, Spacings } from "@/constants/theme";

export default function TaskList({
  tasks,
  toggleTaskStatus,
  deleteTask,
}: {
  tasks: TaskType[];
  toggleTaskStatus: (id: string) => void;
  deleteTask: (id: string) => void;
}) {
  let completionRate =
    Math.round((tasks.filter((task) => task.completed == true).length / tasks.length) *
    100);
  const { width, height } = useWindowDimensions();
  const isPortrait = height > width;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My tasks</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{tasks.length} tasks</Text>
        </View>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(task) => task.id}
        contentContainerStyle={{ gap: Spacings.large }}
        renderItem={({ item }) => (
          <Task
            task={item}
            toggleTaskStatus={toggleTaskStatus}
            deleteTask={deleteTask}
          />
        )}
        ListHeaderComponent={
          <View style={styles.completionContainer}>
            <View style={styles.completionRow}>
              <Text style={styles.completionLabel}>Completion rate</Text>
              <Text style={styles.completionValue}>{completionRate}%</Text>
            </View>
            <View style={styles.progressTrack}>
              <View
                style={[styles.progressFill, { width: `${completionRate}%` }]}
              ></View>
            </View>
            <Text style={styles.hint}>Check off tasks or delete them.</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Spacings.extraLarge,
    paddingTop: Spacings.xLarge,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    gap: Spacings.extraLarge,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 28,
    fontWeight: 800,
    color: Colors.text,
  },
  badge: {
    backgroundColor: Colors.primaryLight,
    borderRadius: 16,
    paddingHorizontal: Spacings.extraLarge,
    paddingVertical: Spacings.mediumLarge,
  },
  badgeText: {
    fontSize: 16,
    fontWeight: 600,
    color: Colors.primaryDark,
  },
  completionContainer: {
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    paddingTop: Spacings.extraLarge,
    gap: Spacings.large,
  },
  completionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  completionLabel: {
    fontSize: 18,
    color: Colors.text,
  },
  completionValue: {
    fontSize: 22,
    fontWeight: 800,
    color: Colors.text,
  },
  progressTrack: {
    height: 14,
    borderRadius: 7,
    backgroundColor: Colors.border,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    borderRadius: 7,
    backgroundColor: Colors.primary,
  },
  hint: {
    textAlign: "center",
    fontSize: 16,
    color: Colors.textSecondary,
  },
});
