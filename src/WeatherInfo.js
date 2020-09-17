import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

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
            
            <li>
              <WeatherIcon code={props.data.icon} /> 
            </li>
          </ul>
        </div>

        <div className="col-3">
          <ul>
            <li>     
              <WeatherTemp celsius={props.data.currentTemperature} />
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
