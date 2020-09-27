import React, { useState } from "react";
import HourlyForecastPreview from "./HourlyForecastPreview";

import axios from "axios";
//import "./Weather.css";

export default function HourlyForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleHForecast(response) {
    setForecast(response.data);
    //console.log(response.data)
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="HourlyForecast row">
        <HourlyForecastPreview data={forecast.list[0]} unit={props.unit} />
        <HourlyForecastPreview data={forecast.list[1]} unit={props.unit} />
        <HourlyForecastPreview data={forecast.list[2]} unit={props.unit} />
        <HourlyForecastPreview data={forecast.list[3]} unit={props.unit} />
        <HourlyForecastPreview data={forecast.list[4]} unit={props.unit} />
        <HourlyForecastPreview data={forecast.list[5]} unit={props.unit} />
      </div>
    );
  } else {
    let apiKey = "76b59f3cd1fd0ab6cfc079bd8f47745a";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleHForecast);
  }

  return null;
}
