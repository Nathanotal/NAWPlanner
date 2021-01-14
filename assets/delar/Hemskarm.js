import React from "react";
import Skarm from "./Skarm";
import { Text, StyleSheet, Button } from "react-native";

function Hemskarm({ navigation }) {
  return (
    <Skarm navigation={navigation}>
      <Text style={styles.rubrik}>Hemskärm</Text>
    </Skarm>
  );
}

const styles = StyleSheet.create({
  rubrik: {
    fontSize: 40,
    fontWeight: "bold",
    alignSelf: "center",
    paddingTop: 150,
  },
});

export default Hemskarm;
