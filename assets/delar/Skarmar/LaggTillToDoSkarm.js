import React from "react";
import Knapp from "../Komponenter/Knapp";
import MyForm from "../Komponenter/MyForm";
import MyFormField from "../Komponenter/MyFormField";
import Skarm from "./Skarm";
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import * as Yup from "yup";
import MyFormButton from "../Komponenter/MyFormButton";
import Temp from "./Temp";
import TillbakaSkarm from "./TillbakaSkarm";
import { Ionicons, Feather } from "@expo/vector-icons";

const validate = Yup.object().shape({
  // Matches() (regex)
  name: Yup.string().required().label("name"),
});

function handleSubmit(values, onPress) {
  const { name } = values;
  console.log(name);
  Temp.push({
    name,
    color: "blue",
    todos: [],
  });
  onPress();
}

function LaggTillToDoSkarm({ onPress }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.back} onPress={onPress}>
        <Ionicons name="arrow-back" size={50} />
      </TouchableOpacity>

      <View style={styles.main}>
        <MyForm
          initialValues={{ name: "" }}
          onSubmit={(values) => handleSubmit(values, onPress)}
          validationSchema={validate}
        >
          <MyFormField name="name" placeholder="Name" textContentType="name" />

          <MyFormButton namn="Add"></MyFormButton>
        </MyForm>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 0.8,
    margin: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rubrik: {
    fontSize: 40,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 25,
    marginBottom: "5%",
  },
  back: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 32,
    left: 10,
    //backgroundColor: "lightgray",
    borderRadius: 20,
    width: 60,
    height: 60,
    margin: 2,
  },
});

export default LaggTillToDoSkarm;
