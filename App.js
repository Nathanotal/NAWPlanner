import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Hemskarm from "./assets/delar/Hemskarm";
import Ansvarskarm from "./assets/delar/Ansvarskarm";
import Profil from "./assets/delar/Profil";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
