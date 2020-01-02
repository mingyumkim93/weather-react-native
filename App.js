import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import axios from "axios";
import * as Location from "expo-location";
import { Alert, Text } from "react-native";

const API_KEY = "da9be3528f95dead20885ef8ece6e94d";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  async function getWeather(latitude, longitude){
    const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`);
    console.log(data); 
  }

  useEffect(() => {
    async function getLocation() {
      try {
        await Location.requestPermissionsAsync();
        const {coords:{latitude,longitude}} = await Location.getCurrentPositionAsync();
        console.log(latitude, longitude);
        setIsLoading(false);
        getWeather(latitude, longitude);
      } catch (error) {
        Alert.alert(
          "Couldn't get your location",
          "Please allow us to get your location to see weather"
        );
      }
    };
    getLocation();
  });

  if(isLoading) {console.log(isLoading);return <Loading/>}
  else return <Text>Loaded</Text>
}
