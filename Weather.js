import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Weather({ temp }) {
  return (
    <View style={styles.container}>
    <View style={styles.halfContainer}>
    <MaterialCommunityIcons name="weather-lightning-rainy" size={150}/>
      <Text style={styles.temp}>{temp}°C</Text>
    </View>
    <View style={styles.halfContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp:{
      fontSize:50
  },
  halfContainer:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
  }
});
