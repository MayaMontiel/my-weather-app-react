import React, {useState} from "react";
import HourlyForecastPreview from "./HourlyForecastPreview";

import axios from "axios";
import "./WeatherForecast.css";

export default function HourlyForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);


    function handleHForecast(response){

setForecast(response.data)
console.log(response.data)
setLoaded(true);
    }

    if (loaded && props.city === forecast.city.name){
        return (
          <div className="HourlyForecast row">
              
            <HourlyForecastPreview data={forecast.list[0]} />
            <HourlyForecastPreview data={forecast.list[1]} />
            <HourlyForecastPreview data={forecast.list[2]} />
            <HourlyForecastPreview data={forecast.list[3]} />
            <HourlyForecastPreview data={forecast.list[4]} />
            <HourlyForecastPreview data={forecast.list[5]} />
           
          </div>
        );
        
    }else{
        let apiKey = "41aceac11e2a0f0cd5ef824bcdca730e";
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(handleHForecast);
    }

  

  return null;
}
