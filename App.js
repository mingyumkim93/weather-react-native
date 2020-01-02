import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import axios from "axios";
import * as Location from "expo-location";
import { Alert, Text, View } from "react-native";
import Weather from "./Weather";

const API_KEY = "da9be3528f95dead20885ef8ece6e94d";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [temp, setTemp] = useState(0);
  const [condition, setCondition] = useState("Undefined");

  async function getWeather(latitude, longitude){
    const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);
    setTemp(data.main.temp.toFixed(1));
    setCondition(data.weather.main)
  }

  useEffect(() => {
    async function getLocation() {
      try {
        await Location.requestPermissionsAsync();
        const {coords:{latitude,longitude}} = await Location.getCurrentPositionAsync();
        console.log(latitude, longitude);
        getWeather(latitude, longitude);
        setIsLoading(false);
      } catch (error) {
        Alert.alert(
          "Couldn't get your location",
          "Please allow us to get your location to see weather"
        );
      }
    };
    getLocation();
  });

  if(isLoading) return <Loading/>
  else return <Weather temp={temp} condition={condition}/>
}
