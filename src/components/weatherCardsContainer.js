import React, { useEffect } from "react";
import APIHelper from "../utils/APIHelper";
import WeatherCard from "./WeatherCard";
import { useRecoilState } from "recoil";
import { weatherDataAtom } from "../atoms/weatherAtom";
import { getRandomColorClass } from "../utils/colorUtil";

export default function WeatherCardsContainer() {

  const [weatherData, setWeatherData] = useRecoilState(weatherDataAtom);
  const CACHE_DURATION = 300 * 1000;

  useEffect(() => {

    async function fetchData() {
      try {
        const data = await APIHelper.fetchWeatherData();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }

    }

    fetchData();
    const timer = setInterval(() => {}, CACHE_DURATION);
    return () => clearInterval(timer);
  }, []);


  if (!weatherData) {

    return <div>Loading...</div>;
  }

  return (

    <div id="weather-container" className="mb-5">

      {weatherData.map((city) => {
        return (

          <WeatherCard
            city={city}
            randomColorClass={getRandomColorClass()}
            key={city.id}
          />

        );

      })}

    </div>
    
  );

}
