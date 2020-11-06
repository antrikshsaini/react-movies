import React, { Component } from "react";
import "./cards.css"

class Cards extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card-main">
        <img
          className="card-image"
          src={`https://image.tmdb.org/t/p/w300` + `${this.props.info.imgUrl}`}
          alt="React movies project"
        />

        <div className="card-desc">
          <h3 className="card-name">{this.props.info.title}</h3>
  
          <p className="card-date-popularity">
            Release Date : {this.props.info.date} | Popularity : {this.props.info.popularity}
          </p>
          <p className="card-overview">{this.props.info.overview}</p>
        </div>
      </div>
      
    );
  }
}

export default Cards;
