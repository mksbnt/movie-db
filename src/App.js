import React from "react";
import "./App.css";
import {moviesData} from "./moviesData";
import MovieItem from "./components/MovieItem";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            movies: moviesData,
            moviesWillWatch: []
        };
    }

    removeMovie = movie => {
        const updateMovies = this.state.movies.filter(function (item) {
            return item.id !== movie.id;
        });
        this.setState({
            movies: updateMovies
        });
    };

    addMovieToWillWatch = movie => {
        const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];
        this.setState({
            moviesWillWatch: updateMoviesWillWatch
        });
    };

    render() {
        return (
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-three-quarters">
                            <div className="columns">
                                {this.state.movies.map(movie => {
                                    return (
                                        <MovieItem
                                            key={movie.id}
                                            movie={movie}
                                            removeMovie={this.removeMovie}
                                            addMovieToWillWatch={this.addMovieToWillWatch}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                        <div className="column is-one-quarter">
                            Will watch: {this.state.moviesWillWatch.length}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default App;
