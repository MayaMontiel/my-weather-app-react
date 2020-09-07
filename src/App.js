import React from "react";
import Weather from "./Weather";



import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="Weather">
          <Weather  />
        </div>
      </div>
      <div className="Footer">
        <small>
          Coded by Maya Montiel and is
          {" "}
          <a
            href="https://github.com/MayaMontiel/my-weather-app-react"
            rel="noopener noreferrer"
            target="_blank"
          >
            Open-source code on GitHub.
          </a>{" "}
        </small>
      </div>
    </div>
  );
}
