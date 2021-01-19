import React from "react";
import { View, StyleSheet } from "react-native";

function InfoRuta(props) {
  return <View style={styles.ruta}></View>;
}

const styles = StyleSheet.create({
  ruta: {
    backgroundColor: "black",
    width: 200,
    height: 200,
    borderRadius: 40,
    margin: 2,
    marginHorizontal: 2,
  },
});

export default InfoRuta;
