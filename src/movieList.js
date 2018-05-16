import React, { Component} from "react";
import "./App.css";
import "./movieListEntry.js";

class MovieList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="movie-list">
        {this.props.movies.map((movie, i) => <MovieListEntry movie={movie} key={i}/>)}
      </div>
    )
  }
}

export default MovieList;