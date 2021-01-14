import React from "react";
import Skarm from "./Skarm";
import { Text, StyleSheet } from "react-native";

function Ansvarskarm({ navigation }) {
  return (
    <Skarm navigation={navigation}>
      <Text style={styles.rubrik}>Ansvar</Text>
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

export default Ansvarskarm;
