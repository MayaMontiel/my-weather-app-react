import React from "react";

export default function WeatherTemp(props) {
  return (
    <div className="WeatherTemp">
          <h1> {Math.round(props.celsius)}</h1>
      <small className="units">
        <a href="/">°C</a> | <a href="/">°F</a>
      </small>
    </div>
  );
}
