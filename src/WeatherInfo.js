import React, {useState} from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";
import HourlyForecast from "./HourlyForecast";

export default function WeatherInfo(props) {

  const [unit, setUnit] = useState("celsius");
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
          <WeatherTemp
            celsius={props.data.currentTemperature}
            maxTemperature={props.data.maxTemp}
            minTemperature={props.data.minTemp}
            realFeelTemp={props.data.realFeel}
            unit = {unit}
            setUnit = {setUnit}
           
          />
        </div>

        <div className="col-3">
          <ul className="wind">
            <li>Wind : {props.data.wind} km/h</li>
            <li>Humidity : {props.data.humidity}%</li>
            
          </ul>
        </div>
      </div>
      <small>Hourly</small>
      <HourlyForecast city={props.data.city} unit={unit} />
    </div>

  
        


    
  );
}
