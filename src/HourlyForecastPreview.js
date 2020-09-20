import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function HourlyForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    if (hours > 12) {
      hours = hours - 12;
      if (hours === 0) {
        hours = "12";
      }
    }
    if (hours < 10) {
      hours = `0${hours}`;
    }

    return `${hours}:00`;
  }

  if (props.unit === "celsius") {
    return (
      <div className="HourlyForecastPreview col">
        {hours()}
        <WeatherIcon code={props.data.weather[0].icon} />
        {Math.round(props.data.main.temp)}°C
      </div>
    );
  } else {
    return (
      <div className="HourlyForecastPreview col">
        {hours()}
        <WeatherIcon code={props.data.weather[0].icon} />
        {Math.round((props.data.main.temp * 9) / 5 + 32)}°F
      </div>
    );
  }
}
