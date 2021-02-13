import React from "react";
import TillbakaSkarm from "./TillbakaSkarm";
import { Text, View, StyleSheet } from "react-native";
import Inp from "./Komponenter/StandardInput";
import Knapp from "./Komponenter/Knapp";
import { Formik } from "formik";
import * as Yup from "yup";

const validate = Yup.object().shape({
  // Matches() (regex)
  namn: Yup.string().required().label("Användarnamn"),
  email: Yup.string().required().email().label("Email"),
  pass: Yup.string().required().min(3).label("Password"),
});

function KalenderSkarm({ navigation }) {
  return (
    <TillbakaSkarm navigation={navigation} text="Kalender">
      <Formik
        initialValues={{ namn: "", email: "", pass: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validate}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <View style={styles.infoRuta}>
            {touched.namn && errors.namn && (
              <Text style={styles.feltext}>{errors.namn}</Text>
            )}
            <Inp
              placeholder="Användarnamn"
              autoCapitalize="none"
              onChangeText={handleChange("namn")}
              onBlur={() => setFieldTouched("namn")}
            />
            {touched.email && errors.email && (
              <Text style={styles.feltext}>{errors.email}</Text>
            )}
            <Inp
              placeholder="Email"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              onChangeText={handleChange("email")}
              onBlur={() => setFieldTouched("email")}
            />
            {touched.pass && errors.pass && (
              <Text style={styles.feltext}>{errors.pass}</Text>
            )}
            <Inp
              placeholder="Lösenord"
              autoCorrect={false}
              textContentType="password"
              secureTextEntry={true}
              onChangeText={handleChange("pass")}
              onBlur={() => setFieldTouched("pass")}
            />
            <Knapp namn="Registrera" onPress={handleSubmit}></Knapp>
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

export default KalenderSkarm;
