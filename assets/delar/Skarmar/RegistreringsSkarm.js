import React from "react";
import TillbakaSkarm from "./TillbakaSkarm";
import { Text, View, StyleSheet } from "react-native";
import Inp from "../Komponenter/StandardInput";
import Knapp from "../Komponenter/Knapp";
import { Formik } from "formik";
import * as Yup from "yup";
import * as firebase from "firebase";

const validate = Yup.object().shape({
  // Matches() (regex)
  namn: Yup.string().required().label("Användarnamn"),
  email: Yup.string().required().email().label("Email"),
  pass: Yup.string().required().min(3).label("Password"),
});

// Fixa detta när du kan mer React
function createUser() {}

function RegistreringsSkarm({ navigation }) {
  return (
    <TillbakaSkarm navigation={navigation} text="Register" plats="Login">
      <Formik
        initialValues={{ namn: "", email: "", pass: "" }}
        onSubmit={(values) => {
          // console.log(values);
          var n = values.namn;
          const auth = firebase.auth();
          const registerPromise = auth
            .createUserWithEmailAndPassword(values.email, values.pass)
            .then(function (result) {
              // Detta verkar inte funka så bra
              return result.user.updateProfile({ displayName: n });
            })
            .then(() => {
              console.log("Användare skapad");
              navigation.navigate("Hem");
            });
          registerPromise.catch((e) => {
            console.log(e.message);
          });
        }}
        validationSchema={validate}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <View style={styles.infoRuta}>
            <Inp
              placeholder="Username"
              autoCapitalize="none"
              onChangeText={handleChange("namn")}
              onBlur={() => setFieldTouched("namn")}
            />
            {touched.namn && errors.namn && (
              <Text style={styles.feltext}>{errors.namn}</Text>
            )}
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
              placeholder="Password"
              autoCorrect={false}
              textContentType="password"
              secureTextEntry={true}
              onChangeText={handleChange("pass")}
              onBlur={() => setFieldTouched("pass")}
            />
            {touched.pass && errors.pass && (
              <Text style={styles.feltext}>{errors.pass}</Text>
            )}
            <Knapp namn="Register" onPress={handleSubmit}></Knapp>
          </View>
        )}
      </Formik>
    </TillbakaSkarm>
  );
}

const styles = StyleSheet.create({
  infoRuta: {
    // backgroundColor: "gray",
    padding: 10,
  },
  feltext: {
    color: "red",
    fontWeight: "600",
  },
});

export default RegistreringsSkarm;
