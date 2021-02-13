import React from "react";
import TillbakaSkarm from "./TillbakaSkarm";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import Inp from "../Komponenter/StandardInput";
import Knapp from "../Komponenter/Knapp";
import { Formik } from "formik";
import * as Yup from "yup";
import * as firebase from "firebase";

const validate = Yup.object().shape({
  // Matches() (regex)
  //namn: Yup.string().required().label("Användarnamn"),
  email: Yup.string().required().email().label("Email"), // Fixa email eller användarnamn
  pass: Yup.string().required().label("Password"),
});

// Check if user is logged in, in that case go to homescreen

// Fixa formulär som registrering, fixa utlogg, fixa routing
function LoginSkarm({ navigation }) {
  return (
    <SafeAreaView>
      <Text style={styles.infoText}>Login</Text>
      <Formik
        initialValues={{ email: "", pass: "" }}
        onSubmit={(values) => {
          console.log(values.email, values.pass);
          const auth = firebase.auth();
          const loginPromise = auth
            .signInWithEmailAndPassword(values.email, values.pass)
            .then(() => {
              console.log("Inloggad");
              navigation.navigate("Hem");
            });
          loginPromise.catch((e) => {
            console.log(e.message);
          });
        }}
        validationSchema={validate}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <View style={styles.infoRuta}>
            <Inp
              placeholder="Email"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              onChangeText={handleChange("email")}
              onBlur={() => setFieldTouched("email")}
            />
            {touched.email && errors.email && (
              <Text style={styles.feltext}>{errors.email}</Text>
            )}
            <Inp
              placeholder="Lösenord"
              autoCorrect={false}
              textContentType="password"
              secureTextEntry={true}
              onChangeText={handleChange("pass")}
              onBlur={() => setFieldTouched("pass")}
            />
            {touched.pass && errors.pass && (
              <Text style={styles.feltext}>{errors.pass}</Text>
            )}
            <Knapp namn="Login" onPress={handleSubmit}></Knapp>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  infoText: {
    alignSelf: "center",
    padding: 20,
    fontWeight: "600",
    fontSize: 20,
  },
  infoRuta: {},
});

export default LoginSkarm;
