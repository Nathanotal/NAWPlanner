import React from "react";
import Skarm from "./Skarm";
import { Text, StyleSheet, View } from "react-native";
import InfoRuta from "../Komponenter/InfoRuta";
import InfoRutaBred from "../Komponenter/InfoRutaBred";
import InfoRutaStor from "../Komponenter/InfoRutaStor";
import { TouchableOpacity } from "react-native-gesture-handler";

function Hemskarm({ navigation }) {
  return (
    <Skarm style={styles.container} navigation={navigation}>
      <Text style={styles.rubrik}>Hem</Text>
      <View style={styles.litenContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Database")}>
          <InfoRuta></InfoRuta>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Notifikationer")}>
          <InfoRuta></InfoRuta>
        </TouchableOpacity>
      </View>
      <View style={styles.litenContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("PoangJakt")}>
          <InfoRutaBred></InfoRutaBred>
        </TouchableOpacity>
      </View>
      <View style={styles.litenContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Deltagare")}>
          <InfoRutaStor></InfoRutaStor>
        </TouchableOpacity>
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
