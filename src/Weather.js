import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
const [city, setCity] = useState(props.defaultCity);

  function showData(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,      
      date: new Date(response.data.dt*1000),
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
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

  function search(){
    const apiKey = "41aceac11e2a0f0cd5ef824bcdca730e";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showData);
  }

  function handleSubmit(event){
    event.preventDefault();
  search();
  }

  function updatedCity(event){
  event.preventDefault();
  setCity(event.target.value);
}
  if (weatherData.ready) {
    return (
      <div className="search">
        <form onSubmit = {handleSubmit} >
      <div className="row">
        <div className="col-9">
          
            
              <input
                type="search"
                className="form-control"
                placeholder="Enter City"
                autoFocus="on"
                onChange = {updatedCity}
              />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-sm mb-2 ml-2"
              >
                <i className="fas fa-search"></i>
              </button>

              <button className="btn btn-primary btn-sm mb-2 ml-2">
                <i className="fas fa-map-marked-alt"></i>
              </button>
            
            
        </div>
</form>
<WeatherInfo data = {weatherData} />
           

        <div className="hourlyForecast">
          <small>Hourly</small>
          <hr />

          <div className="hourly">
            <div className="row">
              <div className="col-2">
                <ul>
                  <li>
                    <span>10:00</span>
                  </li>
                  <li>
                    <i className="fas fa-sun"></i>
                  </li>
                  <li>
                    <span>26°C</span>
                  </li>
                </ul>
              </div>

              <div className="col-2">
                <ul>
                  <li>
                    <span>10:00</span>
                  </li>
                  <li>
                    <i className="fas fa-sun"></i>
                  </li>
                  <li>
                    <span>26°C</span>
                  </li>
                </ul>
              </div>

              <div className="col-2">
                <ul>
                  <li>
                    <span>10:00</span>
                  </li>
                  <li>
                    <i className="fas fa-sun"></i>
                  </li>
                  <li>
                    <span>26°C</span>
                  </li>
                </ul>
              </div>

              <div className="col-2">
                <ul>
                  <li>
                    <span>10:00</span>
                  </li>
                  <li>
                    <i className="fas fa-sun"></i>
                  </li>
                  <li>
                    <span>26°C</span>
                  </li>
                </ul>
              </div>

              <div className="col-2">
                <ul>
                  <li>
                    <span>10:00</span>
                  </li>
                  <li>
                    <i className="fas fa-sun"></i>
                  </li>
                  <li>
                    <span>26°C</span>
                  </li>
                </ul>
              </div>

              <div className="col-2">
                <ul>
                  <li>
                    <span>10:00</span>
                  </li>
                  <li>
                    <i className="fas fa-sun"></i>
                  </li>
                  <li>
                    <span>26°C</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="dailyForecast">
          <small>Daily</small>
          <hr />
          <div className="daily">
            <div className="row">
              <div className="col-2">
                <ul>
                  <li>Sun</li>
                  <li>
                    <i className="fas fa-sun" />
                  </li>
                  <li className="unit">26°C/26°C</li>
                </ul>
              </div>

              <div className="col-2">
                <ul>
                  <li>Mon</li>
                  <li>
                    <i className="fas fa-sun" />
                  </li>
                  <li className="unit">26°C/26°C</li>
                </ul>
              </div>

              <div className="col-2">
                <ul>
                  <li>Tues</li>
                  <li>
                    <i className="fas fa-sun" />
                  </li>
                  <li className="unit">26°C/26°C</li>
                </ul>
              </div>

              <div className="col-2">
                <ul>
                  <li>Wed</li>
                  <li>
                    <i className="fas fa-sun" />
                  </li>
                  <li className="unit">26°C/26°C</li>
                </ul>
              </div>

              <div className="col-2">
                <ul>
                  <li>Thu</li>
                  <li>
                    <i className="fas fa-sun" />
                  </li>
                  <li className="unit">26°C/26°C</li>
                </ul>
              </div>

              <div className="col-2">
                <ul>
                  <li>Fri</li>
                  <li>
                    <i className="fas fa-sun" />
                  </li>
                  <li className="unit">26°C/26°C</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
      
    );
  } else {
    
search();
    return "Loading....";
  }
}
