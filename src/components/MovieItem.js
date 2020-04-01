import React from "react";
import {moviesData} from "../moviesData";

class MovieItem extends React.Component {
    constructor() {
        super();

        this.state = {
            willWatch: false
        };
    }

    render() {
        const {movie, removeMovie, addMovieToWillWatch, removeMovieFromWillWatch} = this.props;
        return (
            <div className="column">
                <div key={movie.id} className="card">

                    <figure className="image is-4by3">
                        <img className="card-image"
                             src="https://bulma.io/images/placeholders/1280x960.png"
                             alt="Poster"/>
                    </figure>

                    <div className="card-content">
                        <p className="title">{movie.title}</p>
                        <p className="subtitle">@johnsmith</p>
                    </div>

                    <footer className="card-footer">

                        {this.state.willWatch ? (
                            <a className="card-footer-item"
                               onClick={() => {
                                   this.setState({
                                       willWatch: false
                                   });
                                   removeMovieFromWillWatch(movie)
                               }}
                            >Remove will watch</a>
                        ) : (
                            <a className="card-footer-item"
                               onClick={() => {
                                   this.setState({
                                       willWatch: true
                                   });
                                   addMovieToWillWatch(movie)
                               }
                               }
                            >Add will watch</a>
                        )}

                        <a className="card-footer-item"
                           onClick={removeMovie.bind(null, movie)}
                        >Delete</a>

                    </footer>
                </div>
            </div>
        );
    }
}

export default MovieItem;
