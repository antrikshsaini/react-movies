import React, { Component } from "react";
import { Link } from "react-router-dom";

class MovieCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    
    return (
      <div className="movie-card">
        <img
          className="movie-card-image"
          src={`https://image.tmdb.org/t/p/w500` + `${this.props.movie.imgUrl}`}
          alt="movie"
        />

        <h3 className="movie-card-name">{this.props.movie.title}</h3>

        <p className="movie-card-date">
          Release Date : {this.props.movie.date}
        </p>

        <p className="movie-card-popularity">
          Popularity : {this.props.movie.popularity}
        </p>

        <p className="movie-card-overview">{this.props.movie.overview}</p>
      </div>
    );
  }
}

export default MovieCard;
