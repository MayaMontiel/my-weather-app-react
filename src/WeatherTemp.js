import React, {useState} from "react";

export default function WeatherTemp(props) { 
    const [unit, setUnit] = useState("celsius");

    function showFar(event){
        event.preventDefault();
        setUnit("fahrenheit")
    }

function showCelsius(event){
  event.preventDefault();
  setUnit("celsius")
}

if (unit === "celsius"){
return (
  <div className="WeatherTemp">
    <h1> {Math.round(props.celsius)}</h1>
    <small className="units">
      
        °C
     {" "}
      | <a href="/" onClick ={showFar}>°F</a>
    </small>
  </div>
);
}else {
  let far = (props.celius * 9/5) + 32;
 return (
   <div className="WeatherTemp">
     <h1> {Math.round(far)}</h1>
     <small className="units">
       <a href="/" onClick={showCelsius}>
         °C
       </a>{" "}
       |{" "}
        °F
       
     </small>
   </div>
 );
}
  
}
