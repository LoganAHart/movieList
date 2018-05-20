import React, {Component} from "react";
import "./App.css";
import {MovieList} from "./MovieList.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: this.props.movies,
    }
  }

  render(){
    return(
      <div className="App">
        <h1 className="app-title">MovieList</h1>
        <MovieList className="movie-list" movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;