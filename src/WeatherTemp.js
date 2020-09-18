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

  function fahrenheit(){
 return (props.celsius * 9) / 5 + 32;
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
    
    return (
      <div className="WeatherTemp">
        <h1> {Math.round(fahrenheit())}</h1>
        <span className="units">
          <a href="/" onClick = {showCelsius}>°C </a> |
         
            °F{" "}
          
        </span>
      </div>
    );
  }
}
