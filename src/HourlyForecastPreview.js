import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function HourlyForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    if (hours > 12){
hours = hours-12;
if (hours === 0){
  hours = "12";
}
    }
    if (hours < 10){
      hours = `0${hours}`
    }
    
    return `${hours}:00`;
  }

  function temperature() {
    if (props.unit === "celsius") {
      let temperature = Math.round(props.data.main.temp);
      return `${temperature}C`;
    } else {
      let temperature = Math.round((props.data.main.temperature * 9) / 5 + 32);
      return `${temperature}F`;
    }
  }
  return (
    <div className="HourlyForecastPreview col">
      {hours()}
      <WeatherIcon code={props.data.weather[0].icon} />
      {temperature()}
    </div>
  );
}
