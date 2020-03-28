import React from 'react';
import './App.css';
import {moviesData} from './moviesData'

class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData
    };
  }

  render() {
    return (
      <div>
        {this.state.movies.map((movie) => <p>{movie.title}</p>)}
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <MovieItem/>
    </div>
  );
}

export default App;
