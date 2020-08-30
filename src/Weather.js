import React from "react";
import "./Weather.css";

export default function Weather() {
    let weatherData = {
        city: "Toronto",
        time: "9:30 PM",
        date: "Sat.,Aug 15",
        description: "Sunny",
        currentTemperature: "26",
        maxTemp: 30,
        minTemp: 25,
        realFeel: 30,
        wind: 10,
        humidity: 40,
        uvIndex: 2,
        pop: 2
    };
    return (
        <div className="row">
            <div className="col-5">
                <ul>
                    <li>
                        <h1>{weatherData.city}</h1>
                    </li>
                    <li>
                        {weatherData.time}
                        <br />
                        {weatherData.date}
                    </li>
                    <li>{weatherData.description}</li>
                </ul>
            </div>

            <div className="col-3">
                <ul>
                    <li>
                        <h2>{weatherData.currentTemperature}</h2>
                        <small className="units">
                            <a href="/">°C</a> | <a href="/">°F</a>
                        </small>
                    </li>
                    <div className="li-units">
                        <li>
                            <span>
                                {weatherData.maxTemp} °/{weatherData.minTemp}°
              </span>
                        </li>
                        <li>Real Feel {weatherData.realFeel}°</li>
                    </div>
                </ul>
            </div>

            <div className="col-3">
                <ul className="wind">
                    <li>Wind : {weatherData.wind} km/h</li>
                    <li>Humidity : {weatherData.humidity}%</li>
                    <li>Uv Index : {weatherData.uvIndex}</li>
                    <li>PoP : {weatherData.pop}%</li>
                </ul>
            </div>
        </div>
    );
}
