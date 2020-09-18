import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";
import HourlyForecast from "./HourlyForecast";

import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showData(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      currentTemperature: Math.round(response.data.main.temp),
      maxTemp: 30,
      minTemp: 25,
      realFeel: 30,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      uvIndex: 2,
      pop: 2,
    });
  }

  function search() {
    const apiKey = "41aceac11e2a0f0cd5ef824bcdca730e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updatedCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function handleCurrentLocation(position) {
    let apiKey = "41aceac11e2a0f0cd5ef824bcdca730e";

    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    axios.get(apiUrl).then(showData);
  }

  function getCurrentPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(handleCurrentLocation);
  }

  if (weatherData.ready) {
    return (
      <div className="search">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                className="form-control"
                placeholder="Enter City"
                autoFocus="on"
                onChange={updatedCity}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-sm mb-2 ml-2">
              <i className="fas fa-search"></i>
            </button>

            <button
              onClick={getCurrentPosition}
              className="btn btn-primary btn-sm mb-2 ml-2"
            >
              <i className="fas fa-map-marked-alt"></i>
            </button>
          </div>
        </form>
        <WeatherInfo data={weatherData} />

        <small>Hourly</small>
        <br />
        <HourlyForecast city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return "Loading....";
  }
}
