import React, {Component} from "react";
import "./App.css";

export class MovieListEntry extends Component {

  render() {
    return (
      <div className="movie-list-entry">{this.props.movie.title}</div>
    )
  }
}

//