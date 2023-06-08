import React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
const GoalItem = ({ id, text, deleteGoalHandler }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={() => deleteGoalHandler(id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: "teal",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 10,
    fontSize: 16,
    color: "#fff",
  },
});
