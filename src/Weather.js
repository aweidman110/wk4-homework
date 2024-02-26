import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./index.css";
import "./App.css";

const Weather = () => {
  let [city, setCity] = useState("");
  let [weatherData, setWeatherData] = useState(null);

  const getWeather = async () => {
    let apiKey = "8161b4309ee03faae957729ba7104797";
    let response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
    );
    setWeatherData(response.data);
  };

  return (
    <div>
      <h1>React Weather Search App</h1>
      <input
        type="text"
        placeholder="Enter a city..."
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />
      <button onClick={getWeather}>Search</button>

      {weatherData && <WeatherInfo weatherData={weatherData} />}
    </div>
  );
};

export default Weather;
