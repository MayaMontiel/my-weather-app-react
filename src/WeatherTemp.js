import React from "react";

export default function WeatherTemp(props) {
  

  function showFar(event) {
    event.preventDefault();
    props.setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  function maxTemp() {
    return (props.maxTemperature * 9) / 5 + 32;
  }

  function minTemp() {
    return (props.minTemperature * 9) / 5 + 32;
  }

  function realFeel() {
    return (props.realFeelTemp * 9) / 5 + 32;
  }

  if (props.unit === "celsius") {
    return (
      <div className="WeatherTemp">
        <h1> {Math.round(props.celsius)}</h1>
        <span className="units">
          °C | {" "}
          <a href="/" onClick={showFar}>
            °F{" "}
          </a>
        </span>
        <div className="maxMin">
          <span>
            {props.maxTemperature}°C / {props.minTemperature}°C
          </span>
        </div>
        <div className="realFeel">Real Feel {props.realFeelTemp}°C</div>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemp">
        <h1> {Math.round(fahrenheit())}</h1>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            °C{" "}
          </a>{" "}
          | °F{" "}
        </span>
        <div className="maxMin">
          <span>
            {Math.round(maxTemp())}°F / {Math.round(minTemp())}°F
          </span>
        </div>
        <div className="realFeel">Real Feel {Math.round(realFeel())}°F</div>
      </div>
    );
  }
}
