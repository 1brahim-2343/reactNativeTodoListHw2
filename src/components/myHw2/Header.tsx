import React from "react";
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors, FontSizes, Spacings } from "@/constants/theme";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Header() {
  return (
    <View style={styles.headerMainContainer}>
      <View style={styles.headerTitleContainer}>
        <MaterialDesignIcons
          name="calendar-multiple-check"
          color={Colors.primary}
          size={32}
        />
        <View>
          <Text style={styles.headerText}>Your day</Text>
          <Text style={styles.headerSubText}>Manage your daily tasks</Text>
        </View>
      </View>

      <MaterialDesignIcons name="check-all" color={Colors.primary} size={32} />
    </View>
  );
}
const styles = StyleSheet.create({
  headerMainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  headerText: {
    fontSize: FontSizes.xLarge,
    fontWeight: "bold",
    color: Colors.text,
    letterSpacing: 0.1,
  },
  headerSubText: {
    fontSize: FontSizes.medium,
    fontWeight: 600,
    color: Colors.textSecondary,
    letterSpacing: 0.1,
  },

  headerAction: {},
});
