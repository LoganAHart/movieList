import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import exampleMovieData from "../src/data/exampleMovieData.js";

ReactDOM.render(<App movies={exampleMovieData}/>, document.getElementById("root"));