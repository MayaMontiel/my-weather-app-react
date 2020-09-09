import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";


export default function WeatherInfo(props) {
    //console.log(props.data)
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-5">
          <ul>
            <li>
              <h1>{props.data.city}</h1>
            </li>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>

        <div className="col-3">
          <ul>
            <li>
              <h2>
                <WeatherIcon code={props.data.icon} />
                {props.data.currentTemperature}
              </h2>
              <small className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </small>
            </li>
            <div className="li-units">
              <li>
                <span>
                  {props.data.maxTemp}°C/{props.data.minTemp}°C
                </span>
              </li>
              <li>Real Feel {props.data.realFeel} C°</li>
            </div>
          </ul>
        </div>

        <div className="col-3">
          <ul className="wind">
            <li>Wind : {props.data.wind} km/h</li>
            <li>Humidity : {props.data.humidity}%</li>
            <li>Uv Index : {props.data.uvIndex}</li>
            <li>PoP : {props.data.pop}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
