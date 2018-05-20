import React, {Component} from "react";
import "./App.css";
import {MovieListEntry} from "./MovieListEntry.js";

export class MovieList extends Component {

  render() {
    return (
      <div className="movie-list">
      {this.props.movies.map((movie, i) => <MovieListEntry movie={movie} key={i}/>)}
      </div>
    )
  }
}
// {this.props.movies.map((movie, i) => <MovieListEntry movie={movie} key={i}/>)}