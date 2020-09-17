import React, {useState} from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit]= useState("celsius");

  function showFar(event){
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event){
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius"){
    return (
      <div className="WeatherTemp">
        <h1> {Math.round(props.celsius)}</h1>
        <span className="units">
          °C  |<a href="/" onClick = {showFar}>°F </a>
        </span>
      </div>
    );
  }else {
    let far = (props.celsius * 9)/5 + 32;
    return (
      <div className="WeatherTemp">
        <h1> {Math.round(far)}</h1>
        <span className="units">
          <a href="/" onClick = {showCelsius}>°C </a> |
         
            °F{" "}
          
        </span>
      </div>
    );
  }
}
