import React from "react";
import "../assets/WeatherApp.css";
import { useNavigate } from "react-router-dom";

const WeatherCard = ({ city, randomColorClass }) => {
  const navigate = useNavigate();
  const currentDate = new Date(city.dt * 1000).toLocaleString();
  const currentSunrise = new Date(city.sys.sunrise * 1000).toLocaleTimeString();
  const currentSunset = new Date(city.sys.sunset * 1000).toLocaleTimeString();

  if (!city) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="card"
      key={city.id}
      onClick={() => navigate(`/city/${city.id}`)}
    >
      <div className={`card-h card-header ${randomColorClass}`}>
        <div className="card-city">
          <h3>{city.name}</h3>
          <p>{currentDate}</p>

          <div className="card-weather">
            <img
              src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
              alt={city.weather[0].description}
              className="align-self"
            />
            <p>{city.weather[0].description}</p>
          </div>
        </div>
        <div className="card-temperature">
          <h3 className="temp">{city.main.temp} °C</h3>
          <p className="range">Temp Min: {city.main.temp_min} °C</p>
          <p className="range">Temp Max: {city.main.temp_max} °C</p>
        </div>
      </div>
      <div className="card-footer">
        <div className="card-details">
          <div className="weather-data">
            <p>
              <span className="bold">Pressure:</span> {city.main.pressure}
              hPa
            </p>
            <p>
              <span className="bold">Humidity:</span> {city.main.humidity}%
            </p>
            <p>
              <span className="bold">Visibility:</span> {city.visibility}m
            </p>
          </div>
          <div className="wind">
            <img src="/img/wind.png" alt="Wind" />

            <p>{city.wind.speed}m/s 120 Degree</p>
          </div>
          <div className="weather-right-data">
            <p>
              <span className="bold">Sunrise:</span> {currentSunrise}
            </p>
            <p>
              <span className="bold">Sunset:</span> {currentSunset}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
