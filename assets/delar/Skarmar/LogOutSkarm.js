import React from "react";
import TillbakaSkarm from "./TillbakaSkarm";
import { Text, View, StyleSheet } from "react-native";
import Knapp from "../Komponenter/Knapp";
import * as firebase from "firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

function LogOutSkarm({ navigation }) {
  return (
    <TillbakaSkarm navigation={navigation} text="Logout" plats="Profil">
      <View style={styles.fin}>
        <Knapp
          namn="Logout"
          onPress={() => {
            firebase
              .auth()
              .signOut()
              .then(async () => {
                // Radera credentials
                try {
                  await AsyncStorage.removeItem("email");
                  console.log("Tog bort email");
                } catch (exception) {
                  console.log("Kunde inte ta bort email", exception);
                }
                try {
                  await AsyncStorage.removeItem("pass");
                  console.log("Tog bort lösenord");
                } catch {
                  console.log("Kunde inte ta bort lösenord");
                }
              })
              .then(navigation.navigate("Login"));
          }}
        ></Knapp>
      </View>
    </TillbakaSkarm>
  );
}

const styles = StyleSheet.create({
  fin: {
    margin: 10,
    paddingTop: "90%",
  },
});

export default LogOutSkarm;
