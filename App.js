import { useState } from "react";
import { Button, StyleSheet, TextInput, View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalVisiable, setModalVisiable] = useState(false);
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const startAddGoalHandler = () => {
    setModalVisiable(true);
  };

  const endAddGoalHandler = () => {
    setModalVisiable(false);
  };

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };
  const addGoalHandler = () => {
    setCourseGoals((currentCourseGoal) => [
      ...currentCourseGoal,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setEnteredGoalText("");
    endAddGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    const fliteredGoals = courseGoals.filter((goal) => goal.id !== id);
    setCourseGoals(fliteredGoals);
  };

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="rgba(0, 90, 90, 0.96)"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          modalVisiable={modalVisiable}
          endAddGoalHandler={endAddGoalHandler}
          addGoalHandler={addGoalHandler}
          goalInputHandler={goalInputHandler}
          enteredGoalText={enteredGoalText}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            alwaysBounceVertical={false}
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  id={itemData.item.id}
                  text={itemData.item.text}
                  deleteGoalHandler={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#ccc111",
  },

  goalsContainer: {
    flex: 5,
  },
});
