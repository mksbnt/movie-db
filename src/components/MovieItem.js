import React from "react";

const MovieItem = props => {
    const {movie, removeMovie, addMovieToWillWatch} = props;
    return (
        <div className="column">
            <div key={movie.id} className="card">
                <figure className="image is-4by3">
                    <img className="card-image"
                         src="https://bulma.io/images/placeholders/1280x960.png" />
                </figure>
                <div className="card-content">
                    <p className="title">{movie.title}</p>
                    <p className="subtitle">@johnsmith</p>
                </div>
                <footer className="card-footer">
                    <a className="card-footer-item"
                       onClick={addMovieToWillWatch.bind(this, movie)}
                    >Will watch</a>
                    <a className="card-footer-item"
                       onClick={removeMovie.bind(this, movie)}
                    >Delete</a>
                </footer>
            </div>
        </div>

    );
};

export default MovieItem;
