import React from "react";
import Knapp from "../Komponenter/Knapp";
import MyForm from "../Komponenter/MyForm";
import MyFormField from "../Komponenter/MyFormField";
import Skarm from "./Skarm";
import { Text, StyleSheet } from "react-native";
import * as Yup from "yup";
import MyFormButton from "../Komponenter/MyFormButton";
import Temp from "./Temp";
import TillbakaSkarm from "./TillbakaSkarm";

const validate = Yup.object().shape({
  // Matches() (regex)
  name: Yup.string().required().label("name"),
});

function handleSubmit(values, navigation) {
  const { name } = values;
  console.log(name);
  Temp.push({
    name,
    color: "blue",
    todos: [],
  });
  navigation.navigate("Ansvar");
}

function LaggTillToDoSkarm({ navigation }) {
  return (
    <TillbakaSkarm
      text="New Item"
      plats={"Ansvar"}
      navigation={navigation}
      style={styles.container}
    >
      <MyForm
        initialValues={{ name: "" }}
        onSubmit={(values) => handleSubmit(values, navigation)}
        validationSchema={validate}
      >
        <MyFormField name="name" placeholder="Name" textContentType="name" />

        <MyFormButton namn="Add"></MyFormButton>
      </MyForm>
    </TillbakaSkarm>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  rubrik: {
    fontSize: 40,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 25,
    marginBottom: "5%",
  },
});

export default LaggTillToDoSkarm;
