import React, { useEffect, useState } from "react";
import { weatherDataAtom } from "../atoms/weatherAtom";
import { useRecoilValue } from "recoil";
import { useLocation, useNavigate } from "react-router-dom";
import { getRandomColorClass } from "../utils/colorUtil";

const WeatherCardDetails = () => {

  const WeatherData = useRecoilValue(weatherDataAtom);
  const location = useLocation();
  const navigate = useNavigate();

  const [city, setCity] = useState(null);
  const randomColorClass = getRandomColorClass();

  useEffect(() => {
    const path = location.pathname;

    const pathSegments = path.split("/");

    const cityId = pathSegments[pathSegments.length - 1];

    const filteredCity = WeatherData.find(
      (weatherCity) => weatherCity.id.toString() === cityId
    );

    if (filteredCity) {
      setCity(filteredCity);
    } 
    
    else {
      navigate("/");
    }

  }, [location, WeatherData]);

  if (!city) {

    return <div>Error</div>;
  }

  return (

    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card-container-details">
          <div className={`card-header-d card-header ${randomColorClass}`}>

            <img
              src={"/img/back.png"}
              alt="back"
              className="img-fluid back-img mt-2 ms-2"
              onClick={() => navigate(-1)}
            />

            <div className="card-city-details">
              <h2>{city.name}</h2>
              <p>{new Date(city.dt * 1000).toLocaleString()}</p>

              <div className="climate-details">
                <div className="card-weather-details">
                  <div className="card-description">

                    <img
                      src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
                      alt={city.weather[0].description}
                      className="img-fluid"
                    />
                    <p>{city.weather[0].description}</p>
                    
                  </div>

                  <div className="card-temperature-details">

                    <h3 className="temp-details mb-3">{city.main.temp} °C</h3>
                    <p className="range-details m-auto">
                      Temp Min: {city.main.temp_min} °C
                    </p>

                    <p className="range-details">
                      Temp Max: {city.main.temp_max} °C
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

          <div className="card-footer-details">
            <div className="inner-card-details">
              <div className="weather-data-details">

                <p>
                  <span className="bold">Pressure:</span> {city.main.pressure}{" "}
                  hPa
                </p>

                <p>
                  <span className="bold">Humidity:</span> {city.main.humidity}%
                </p>

                <p>
                  <span className="bold">Visibility:</span> {city.visibility}m
                </p>

              </div>

              <div className="wind-details">

                <img src="/img/wind.png" alt="Wind" />
                <p>
                  {city.wind.speed}m/s {city.wind.deg} Degree
                </p>

              </div>

              <div className="weather-right-data-details">

                <p>
                  <span className="bold">Sunrise:</span>{" "}
                  {new Date(city.sys.sunrise * 1000).toLocaleTimeString()}
                </p>

                <p>
                  <span className="bold">Sunset:</span>{" "}
                  {new Date(city.sys.sunset * 1000).toLocaleTimeString()}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
    
  );

};

export default WeatherCardDetails;
