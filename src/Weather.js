import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";


import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showData(response) {
    //console.log(response)
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      currentTemperature: Math.round(response.data.main.temp),
      maxTemp: Math.round(response.data.main.temp_max),
      minTemp: Math.round(response.data.main.temp_min),
      realFeel: Math.round(response.data.main.feels_like),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });
  }

  function search() {
    const apiKey = "76b59f3cd1fd0ab6cfc079bd8f47745a";
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
    let apiKey = "76b59f3cd1fd0ab6cfc079bd8f47745a";

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
            <div className="col-6">
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

       
      </div>
    );
  } else {
    search();
    return "Loading....";
  }
}
