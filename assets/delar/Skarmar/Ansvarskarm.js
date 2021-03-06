import React from "react";
import Skarm from "./Skarm";
import { Text, StyleSheet, FlatList, View, Modal } from "react-native";
import colors from "../../colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import Temp from "./Temp";
import ListEntry from "../Komponenter/ListEntry";
import LaggTillToDoSkarm from "./LaggTillToDoSkarm";
import { useState } from "react";

const addEntry = (list) => {};

function Ansvarskarm({ navigation }) {
  const tData = Temp;
  const [showAdd, toggleAdd] = useState(false);
  return (
    <Skarm navigation={navigation}>
      <View style={styles.container}>
        <Modal
          animationType="slide"
          visible={showAdd}
          onRequestClose={() => toggleAdd(false)}
        >
          <LaggTillToDoSkarm
            onPress={() => toggleAdd(false)}
          ></LaggTillToDoSkarm>
        </Modal>
        <Text style={styles.rubrik}>To-Do</Text>
        <View style={styles.half}>
          <TouchableOpacity
            style={styles.add}
            onPress={() => toggleAdd(!showAdd)}
          >
            <Feather name="plus" size={15} color={colors.secondary} />
          </TouchableOpacity>

          <Text style={styles.buttonText}></Text>
        </View>
        <View style={styles.half}>
          <FlatList
            style={{ flexGrow: 1 }}
            data={tData}
            keyExtractor={(item) => item.name}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <ListEntry item={item}></ListEntry>}
          />
        </View>
      </View>
    </Skarm>
  );
}

const styles = StyleSheet.create({
  rubrik: {
    fontSize: 40,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 250,
    marginBottom: "5%",
  },
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  add: {
    //marginTop: "30%",
    borderWidth: 6,
    borderColor: colors.secondary,
    borderRadius: 4,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: colors.secondary,
    fontWeight: "700",
    fontSize: 14,
    marginTop: 8,
  },
  half: {
    flexDirection: "row",
  },
});

export default Ansvarskarm;
