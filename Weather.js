import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
    Thunderstorm:{
        iconName:"ios-thunderstorm",
        gradient: ["#94999c","#282829"],
        title:"Thunderstorm",
        subtitle:"Stay inside"
    },
    Drizzle:{
        iconName:"md-rainy",
        gradient: ["#6d90ab","#0c3352"],
        title:"Drizzle",
        subtitle:"Awful weather"
    },
    Rain:{
        iconName:"ios-rainy",
        gradient: ["#7abecc","#21afcc"],
        title:"Rain",
        subtitle:"Take you umbrella"
    },
    Snow:{
        iconName:"ios-snow",
        gradient: ["#8e97d1","#1934e0"],
        title:"Snow",
        subtitle:"Snowwwwwwwww"
    },
    Clear:{
        iconName:"ios-sunny",
        gradient: ["#ebe9a0","#cc2735"],
        title:"Clear",
        subtitle:"Nice clear weather"
    },
    Clouds:{
        iconName:"ios-cloudy",
        gradient: ["#5d92b0","#1f506b"],
        title:"Clouds",
        subtitle:"Clouds . . ."
    },
}

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
    <StatusBar barStyle="light-content"/>
    <View style={styles.halfContainer}>
      <Text style={styles.temp}>{temp}°C</Text>
      <Ionicons name={weatherOptions[condition].iconName} size={150} color="white"/>
    </View>
    <View style={{...styles.halfContainer, ...styles.textContainer}}>
      <Text style={styles.Title}>{weatherOptions[condition].title}</Text>
      <Text style={styles.Subtitle}>{weatherOptions[condition].subtitle}</Text>
    </View>
    <View><Text style={styles.copyright}>Created by Mingyum Kim(Migu)</Text></View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp:{
      fontSize:50,
      color:"white"
  },
  halfContainer:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
  },
  textContainer:{
    paddingHorizontal: 20,
    alignItems:"flex-start"
  },
  Title:{
    fontSize: 50,
    fontWeight:"600",
    color:"white"
  },
  Subtitle:{
    fontSize: 30,
    fontWeight:"300",
    color:"white"
  },
  copyright:{
    textAlign:"left",
    textDecorationLine:"underline"
  }
});
