import React from "react";
import Skarm from "./Skarm";
import { Text, StyleSheet, View } from "react-native";
import InfoRuta from "./Komponenter/InfoRuta";
import InfoRutaBred from "./Komponenter/InfoRutaBred";
import InfoRutaStor from "./Komponenter/InfoRutaStor";

function Hemskarm({ navigation }) {
  return (
    <Skarm navigation={navigation} style={styles.container}>
      <Text style={styles.rubrik}>Hem</Text>
      <View style={styles.litenContainer}>
        <InfoRuta></InfoRuta>
        <InfoRuta></InfoRuta>
      </View>
      <View style={styles.litenContainer}>
        <InfoRutaBred></InfoRutaBred>
      </View>
      <View style={styles.litenContainer}>
        <InfoRutaStor></InfoRutaStor>
      </View>
    </Skarm>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  litenContainer: {
    alignContent: "flex-start",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  rubrik: {
    fontSize: 40,
    fontWeight: "bold",
    alignSelf: "center",
    paddingTop: 10,
  },
});

export default Hemskarm;
