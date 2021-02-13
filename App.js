import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Hemskarm from "./assets/delar/Hemskarm";
import Ansvarskarm from "./assets/delar/Ansvarskarm";
import Profil from "./assets/delar/Profil";
import KalenderSkarm from "./assets/delar/KalenderSkarm";
import NotifikationsSkarm from "./assets/delar/NotifikationsSkarm";
import PoangJaktsSkarm from "./assets/delar/PoangJaktsSkarm";
import DeltagarSkarm from "./assets/delar/DeltagarSkarm";
import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyApPuZOjMprV6tZrNG3-RAttwoMcx7fzuM",
  authDomain: "nawplanner.firebaseapp.com",
  projectId: "nawplanner",
  storageBucket: "nawplanner.appspot.com",
  messagingSenderId: "173700469558",
  appId: "1:173700469558:web:86df6adff8ac442a67d997",
  measurementId: "G-QLF28SMECC",
};

firebase.initializeApp(config);

const Stack = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Hem"
        screenOptions={{ tabBarVisible: false }}
      >
        <Stack.Screen name="Hem" component={Hemskarm} />
        <Stack.Screen name="Ansvar" component={Ansvarskarm} />
        <Stack.Screen name="Profil" component={Profil} />
        <Stack.Screen name="Kalender" component={KalenderSkarm} />
        <Stack.Screen name="Notifikationer" component={NotifikationsSkarm} />
        <Stack.Screen name="PoangJakt" component={PoangJaktsSkarm} />
        <Stack.Screen name="Deltagare" component={DeltagarSkarm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
