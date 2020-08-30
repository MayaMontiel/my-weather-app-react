import React from "react";
import Hourly from "./Hourly";

export default function HourlyForecast() {
    return (
        <div className="HourlyForecast">
            <small>Hourly</small>
            <hr />
            <div className="hourly">
                <div className="row">
                    <Hourly />
                    <Hourly />
                    <Hourly />
                    <Hourly />
                    <Hourly />
                </div>
            </div>
        </div>
    );
}
