import React from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import Knapp from "../Komponenter/Knapp";
import * as firebase from "firebase";

async function logga(navig, cred) {
  const auth = firebase.auth();
  const loginPromise = auth
    .signInWithEmailAndPassword(cred.email, cred.pass)
    .then(() => {
      console.log("Inloggad");
      navigation.navigate("Hem");
    });
  loginPromise.catch((e) => {
    console.log(e.message);
  });
}

function LogginIn({ navig, cred }) {
  let a = true;
  if (!navig || !cred) {
    console.log("Undefined credentials:", cred);
    a = false;
  }
  return (
    <SafeAreaView>
      <Text style={styles.rubrik}>Loggar in...</Text>
      {a && <Knapp namn="Loggar in..." onPress={logga(navig, cred)}></Knapp>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rubrik: {
    padding: 20,
    fontWeight: "bold",
    fontSize: 30,
    alignSelf: "center",
    paddingTop: 40,
    paddingBottom: 10,
  },
});

export default LogginIn;
