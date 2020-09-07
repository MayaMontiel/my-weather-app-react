import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
        < div className = "Weather" >
            <div className="row">
                <div className="col-5">
                    <ul>
                        <li>
                            <h1>{props.data.city}</h1>
                        </li>
                        <li>
                            <FormattedDate date={props.data.date} />
                        </li>
                        <li className="text-capitalize">{props.data.description}</li>
                    </ul>
                </div>

                <div className="col-3">
                    <ul>
                        <li>
                            <h2>{props.data.currentTemperature}</h2>
                            <small className="units">
                                <a href="/">°C</a> | <a href="/">°F</a>
                            </small>
                        </li>
                        <div className="li-units">
                            <li>
                                <span>30 °C/20°C</span>
                            </li>
                            <li>Real Feel 20 C°</li>
                        </div>
                    </ul>
                </div>

                <div className="col-3">
                    <ul className="wind">
                        <li>Wind : {props.data.wind} km/h</li>
                        <li>Humidity : {props.data.humidity}%</li>
                        <li>Uv Index : </li>
                        <li>PoP : %</li>
                    </ul>
                </div>
            </div>
        </div >       );
}
