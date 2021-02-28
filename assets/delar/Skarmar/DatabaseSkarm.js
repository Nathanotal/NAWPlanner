import React from "react";
import TillbakaSkarm from "./TillbakaSkarm";
import * as firebase from "firebase";

// ALPHA
function databaseConn() {
  // Create reference
  const dbRefObj = firebase.database().ref().child("object");

  // Sync, might not really work with app
  dbRefObj.on("value", (snap) => console.log(snap.val()));
}

function DatabaseSkarm({ navigation }) {
  databaseConn();
  return (
    <TillbakaSkarm
      navigation={navigation}
      text="Database"
      plats="Hem"
    ></TillbakaSkarm>
  );
}

export default DatabaseSkarm;
