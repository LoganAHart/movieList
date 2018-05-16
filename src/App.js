import React, { Component} from "react";
import "./App.css";
import "./movieList.js";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="App">
        <h1>MovieList</h1>
        <p>{this.props.movies[0].title}</p>
      </div>
    );
  }
}

export default App;