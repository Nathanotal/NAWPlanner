import React from "react";
import TillbakaSkarm from "./TillbakaSkarm";

function NotifikationsSkarm({ navigation }) {
  return (
    <TillbakaSkarm
      navigation={navigation}
      text="Notifikationer"
      plats="Hem"
    ></TillbakaSkarm>
  );
}

export default NotifikationsSkarm;
