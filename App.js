import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Hemskarm from "./assets/delar/Skarmar/Hemskarm";
import Ansvarskarm from "./assets/delar/Skarmar/Ansvarskarm";
import Profil from "./assets/delar/Skarmar/Profil";
import KalenderSkarm from "./assets/delar/Skarmar/KalenderSkarm";
import NotifikationsSkarm from "./assets/delar/Skarmar/NotifikationsSkarm";
import PoangJaktsSkarm from "./assets/delar/Skarmar/PoangJaktsSkarm";
import DeltagarSkarm from "./assets/delar/Skarmar/DeltagarSkarm";
import RegistreringsSkarm from "./assets/delar/Skarmar/RegistreringsSkarm";
import LoginSkarm from "./assets/delar/Skarmar/LoginSkarm";
import InstallningarSkarm from "./assets/delar/Skarmar/InstallningarSkarm";
import * as firebase from "firebase";
import LogginIn from "./assets/delar/Skarmar/LogginIn";
import Database from "./assets/delar/Skarmar/DatabaseSkarm";

const config = {
  apiKey: "AIzaSyApPuZOjMprV6tZrNG3-RAttwoMcx7fzuM",
  authDomain: "nawplanner.firebaseapp.com",
  projectId: "nawplanner",
  storageBucket: "nawplanner.appspot.com",
  messagingSenderId: "173700469558",
  appId: "1:173700469558:web:86df6adff8ac442a67d997",
  measurementId: "G-QLF28SMECC",
};

// Kolla om firebase är initad https://stackoverflow.com/questions/43331011/firebase-app-named-default-already-exists-app-duplicate-app
if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app();
}

const Stack = createBottomTabNavigator();

// Lyssnare för inloggning
firebase.auth().onAuthStateChanged((firebaseUser) => {
  if (firebaseUser) {
    console.log(firebaseUser.email, firebaseUser.displayName);
  } else {
    console.log("Ej inloggad");
  }
});

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Login"}
        screenOptions={{ tabBarVisible: false }}
      >
        <Stack.Screen name="Hem" component={Hemskarm} />
        <Stack.Screen name="Ansvar" component={Ansvarskarm} />
        <Stack.Screen name="Profil" component={Profil} />
        <Stack.Screen name="Kalender" component={KalenderSkarm} />
        <Stack.Screen name="Notifikationer" component={NotifikationsSkarm} />
        <Stack.Screen name="PoangJakt" component={PoangJaktsSkarm} />
        <Stack.Screen name="Deltagare" component={DeltagarSkarm} />
        <Stack.Screen name="Registrera" component={RegistreringsSkarm} />
        <Stack.Screen name="Login" component={LoginSkarm} />
        <Stack.Screen name="Installningar" component={InstallningarSkarm} />
        <Stack.Screen name="LoggingIn" component={LogginIn} />
        <Stack.Screen name="Database" component={Database} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
