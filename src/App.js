import React from "react";

import Weather from "./Weather";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";

import "./App.css";
import "./Container.css";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        
        <div className="Weather">
          <Weather />
        </div>
        <div className="HourlyForecast">
          <HourlyForecast />
        </div>
        <div className="DailyForecast">
          <DailyForecast />
        </div>
      </div>
      <div className="Footer">
        <small><a href="https://github.com/MayaMontiel/my-weather-app-react" rel="noopener noreferrer" target="_blank">
          Open-source code</a>  by Maya Montiel</small>
      </div>
    </div>
  );
}



