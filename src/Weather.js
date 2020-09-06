import React, { useState } from "react";
import axios from "axios";
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
          </div>
        </div>

        <div className="col-5">
          <ul>
            <li>
              <h1>{weatherData.city}</h1>
            </li>
            <li>
              11:57
              <br />
              Sept. 06
            </li>
            <li className = "text-capitalize">{weatherData.description}</li>
          </ul>
        </div>

        <div className="col-3">
          <ul>
            <li>
              <h2>{weatherData.currentTemperature}</h2>
              <small className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </small>
            </li>
            <div className="li-units">
              <li>
                <span>
                  30 °C/20°C
                </span>
              </li>
              <li>Real Feel 20 C°</li>
            </div>
          </ul>
        </div>

        <div className="col-3">
          <ul className="wind">
            <li>Wind : {weatherData.wind} km/h</li>
            <li>Humidity : {weatherData.humidity}%</li>
            <li>Uv Index : {weatherData.uvIndex}</li>
            <li>PoP : {weatherData.pop}%</li>
          </ul>
        </div>

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
  }else{
    const apiKey = "41aceac11e2a0f0cd5ef824bcdca730e";
let city = "Toronto";
let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showData);
  
  return "Loding....";
}

}