import React from "react";
import TillbakaSkarm from "./TillbakaSkarm";
import { Text, TouchableOpacity } from "react-native";
import Knapp from "../Komponenter/Knapp";
import * as firebase from "firebase";

function LogOutSkarm({ navigation }) {
  return (
    <TillbakaSkarm navigation={navigation} text="Logout" plats="Profil">
      <Knapp
        namn="Logout"
        onPress={() => {
          firebase.auth().signOut().then(navigation.navigate("Login"));
        }}
      ></Knapp>
    </TillbakaSkarm>
  );
}

export default LogOutSkarm;
