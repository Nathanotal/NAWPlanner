import React from "react";
import Skarm from "./Skarm";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Profil({ navigation }) {
  return (
    <Skarm navigation={navigation}>
      <View style={styles.topScreen}>
        <TouchableOpacity
          style={styles.settings}
          onPress={() => navigation.navigate("Installningar")}
        >
          <Ionicons name="settings" size={40} />
        </TouchableOpacity>
        <View style={styles.bildBorder}>
          <Image
            style={styles.bild}
            source={{ uri: "https://picsum.photos/200/200" }}
          />
        </View>
        <View style={styles.bildTextContainer}>
          <Text style={styles.namnText}>Nathan</Text>
          <Text style={styles.titelText}>Titel</Text>
        </View>
      </View>
      <View style={styles.bottomScreen}>
        <TouchableOpacity style={styles.achievements}>
          <View style={styles.knapp}>
            <Ionicons name="trophy" size={40} style={styles.icon} />
            <Text style={styles.kategoriText}>Utmärkelser</Text>
            <Ionicons name="trophy" size={40} style={styles.icon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.achievements}>
          <View style={styles.knapp}>
            <Ionicons name="image" size={40} style={styles.icon} />
            <Text style={styles.kategoriText}>Ladda upp</Text>
            <Ionicons name="image" size={40} style={styles.icon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.achievements}>
          <View style={styles.knapp}>
            <Ionicons name="time" size={40} style={styles.icon} />
            <Text style={styles.kategoriText}>Historia</Text>
            <Ionicons name="time" size={40} style={styles.icon} />
          </View>
        </TouchableOpacity>
      </View>
    </Skarm>
  );
}

export default Profil;

const styles = StyleSheet.create({
  achievements: {
    width: "100%",
    height: 70,
    //backgroundColor: "gainsboro",
    justifyContent: "center",
    alignItems: "flex-end",
    marginTop: 15,
    flexDirection: "row",
  },
  knapp: {
    backgroundColor: "lightskyblue",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    flexDirection: "row",
  },
  icon: {
    marginHorizontal: 20,
    alignSelf: "center",
  },
  settings: {
    marginRight: 10,
    marginTop: 10,
    alignSelf: "flex-end",
  },
  bildBorder: {
    backgroundColor: "lightskyblue",
    width: 200,
    height: 200,
    borderRadius: 100,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 20,
    alignSelf: "center",
    marginTop: -15,
    marginBottom: 50,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row",
    //overflow: "hidden",
  },
  bild: {
    width: 180,
    height: 180,
    borderRadius: 90,
  },
  bildTextContainer: {
    width: "100%",
    //backgroundColor: "blue",
    alignItems: "center",
    marginTop: -40,
  },
  namnText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  kategoriText: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
  },
  titelText: {
    fontSize: 15,
    fontWeight: "200",
  },
  topScreen: {
    flex: 0.5,
    alignContent: "center",
    alignItems: "center",
    //backgroundColor: "grey",
  },
  bottomScreen: {
    marginTop: 20,
    flex: 0.5,
    alignContent: "center",
    alignItems: "center",
    //backgroundColor: "grey",
  },
});
