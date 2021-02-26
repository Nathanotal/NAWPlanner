import React from "react";
import {
  Text,
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

function ToDoCheckView({ list, closeModal }) {
  const { name, color, todos } = list;
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.back} onPress={closeModal}>
        <Ionicons name="arrow-back" size={50} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  back: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 32,
    left: 10,
    //backgroundColor: "lightgray",
    borderRadius: 20,
    width: 60,
    height: 60,
    margin: 2,
  },
});

export default ToDoCheckView;
