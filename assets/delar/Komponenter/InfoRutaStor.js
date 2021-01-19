import React from "react";
import { View, StyleSheet } from "react-native";

function InfoRutaStor(props) {
  return <View style={styles.ruta}></View>;
}

const styles = StyleSheet.create({
  ruta: {
    backgroundColor: "black",
    width: 404,
    height: 404,
    borderRadius: 40,
    margin: 2,
    marginHorizontal: 2,
  },
});

export default InfoRutaStor;
