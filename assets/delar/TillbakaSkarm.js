import React from "react";
import RensadSkarm from "./RensadSkarm";
import { Ionicons } from "@expo/vector-icons";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

function TillbakaSkarm({ navigation, text }) {
  return (
    <RensadSkarm navigation={navigation} style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Hem")}>
        <View style={styles.knapp1}>
          <Ionicons name="arrow-back" size={50} />
        </View>
      </TouchableOpacity>
      <Text style={styles.rubrik}>{text}</Text>
    </RensadSkarm>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    alignContent: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  rubrik: {
    fontSize: 40,
    fontWeight: "bold",
    alignSelf: "center",
    paddingTop: 150,
  },
  knapp1: {
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "lightgray",
    borderRadius: 20,
    width: 60,
    height: 60,
    margin: 2,
  },
});

export default TillbakaSkarm;
