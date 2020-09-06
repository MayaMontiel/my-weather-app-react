import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function showData(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      time: "9:30 PM",
      date: "Sat.,Aug 15",
      description: response.data.weather[0].description,
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

  if (weatherData.ready) {
    return (
      <div className="row">
        <div className="col-12">
          <div className="search">
            <form className="form-inline">
              <input
                type="search"
                className="form-control form-control-sm mb-2 mr-2 col-9"
                placeholder="Enter City"
                autoFocus="on"
              />
              <button
                type="submit"
                className="btn btn-primary btn-sm mb-2 ml-2"
              >
                <i className="fas fa-search"></i>
              </button>

              <button className="btn btn-primary btn-sm mb-2 ml-2">
                <i className="fas fa-map-marked-alt"></i>
              </button>
            </form>
            <WeatherInfo info={weatherData} />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "41aceac11e2a0f0cd5ef824bcdca730e";

    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultcity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showData);

    return "Loding....";
  }
}
