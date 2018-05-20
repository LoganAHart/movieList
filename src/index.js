import React from "react";
import ReactDOM from "react-dom";
import exampleMovieData from "../src/data/exampleMovieData.js";
import App from "./App.js";

ReactDOM.render(<App movies={exampleMovieData}/>, document.getElementById("root"));