import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Barcelona" />

        <footer>
          This project was coded by{""}
          <a 
          href="https:/elletamcdaniel.com" 
          target="_blank">
            Elleta McDaniel
          </a>{""}
          and is{" "}
          <a
            href="https://github.com/emcdanie"
            target="_blank"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="/"
            target="_blank"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
