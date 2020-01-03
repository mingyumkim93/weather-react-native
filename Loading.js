import React from "react";
import { StyleSheet, Text, View, StatusBar} from "react-native";

export default function Loading(){
    return <View style={styles.container}>
    <StatusBar barStyle="dark-content"/>
        <Text style={styles.text}>Getting the weather of your location</Text>
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#37c4bd"
    },
    text:{
        color: "black",
        fontSize: 30
    }
})