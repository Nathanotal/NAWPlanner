import React from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import Inp from "../Komponenter/StandardInput";
import Knapp from "../Komponenter/Knapp";
import { Formik } from "formik";
import * as Yup from "yup";
import * as firebase from "firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

// variable to keep track of if you should log in
var login = true;

const validate = Yup.object().shape({
  // Matches() (regex)
  //namn: Yup.string().required().label("Användarnamn"),
  email: Yup.string().required().email().label("Email"), // Fixa email eller användarnamn
  pass: Yup.string().required().label("Password"),
});

// Check if user is logged in, in that case go to homescreen

async function checkCredentials(n) {
  await AsyncStorage.multiGet(["email", "pass"]).then((result) => {
    const email = result[0][1];
    const pass = result[1][1];
    const c = { email, pass };
    if (email && pass) {
      n.navigate("LoggingIn", {
        cred: c,
      });
    }
  });
}

// This can be made much better with a useState Hook, but it works so I will focus on other things
function LoginSkarm({ navigation }) {
  checkCredentials(navigation);
  return (
    <SafeAreaView>
      <Text style={styles.rubrik}>Välkommen</Text>
      <Formik
        initialValues={{ email: "", pass: "" }}
        onSubmit={async (values) => {
          //console.log(values.email, values.pass);
          const auth = firebase.auth();
          const loginPromise = auth
            .signInWithEmailAndPassword(values.email, values.pass)
            .then(async () => {
              // Spara credentials
              try {
                await AsyncStorage.setItem("email", values.email);
                await AsyncStorage.setItem("pass", values.pass);
                console.log("Sparade email och pass");
              } catch {
                console.log("Kunde inte spara email och/eller pass");
              }
            })
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
            <View style={styles.registerBox}>
              <Text style={styles.infoText}>No Account?</Text>
              <Knapp
                namn="Register"
                onPress={() => navigation.navigate("Registrera")}
              ></Knapp>
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  infoRuta: {
    alignItems: "center",
    margin: 10,
    flexDirection: "column",
  },
  registerBox: {
    alignSelf: "flex-start",
    alignSelf: "center",
    marginTop: "70%",
  },
  infoText: {
    alignSelf: "center",
  },
  rubrik: {
    padding: 20,
    fontWeight: "bold",
    fontSize: 30,
    alignSelf: "center",
    paddingTop: 40,
    paddingBottom: 10,
  },
});

export default LoginSkarm;
