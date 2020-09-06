import React from "react";

export default function WeatherInfo(props){
    return (
      <div className="WeatherInfo">
        <div className="col-5">
          <ul>
            <li>
              <h1>{props.info.city}</h1>
            </li>
            <li>
              11:57
              <br />
              Sept. 06
            </li>
            <li className="text-capitalize">{props.info.description}</li>
          </ul>
        </div>

        <div className="col-3">
          <ul>
            <li>
              <h2>{props.info.currentTemperature}</h2>
              <small className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </small>
            </li>
            <div className="li-units">
              <li>
                <span>30 °C/20°C</span>
              </li>
              <li>Real Feel 20 C°</li>
            </div>
          </ul>
        </div>

        <div className="col-3">
          <ul className="wind">
            <li>Wind : {props.info.wind} km/h</li>
            <li>Humidity : {props.info.humidity}%</li>
            <li>Uv Index : {props.info.uvIndex}</li>
            <li>PoP : {props.info.pop}%</li>
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
}