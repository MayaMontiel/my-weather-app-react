import React from "react";
import Search from "./Search";
import Weather from "./Weather";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";

import "./App.css";
import "./Container.css";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="Search">
          <Search />
        </div>
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
        <small>Open-source code by Maya Montiel</small>
      </div>
    </div>
  );
}



