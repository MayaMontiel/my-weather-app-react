import React from "react";
//import "./Hourly.css";

export default function Hourly() {
    return (
        <div className="Hourly">
            <div className="col-2">
                <span>10:00</span>
                <i className="fas fa-sun"></i>
                <div id="hourly-forecast-temp">
                    <span>26°C</span>
                </div>
            </div>
        </div>
    );
}
