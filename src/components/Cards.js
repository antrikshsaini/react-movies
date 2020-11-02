import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import "./cards.css"

class Cards extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      // <div className="card">
      //   <img
      //     className="card-image"
      //     src={`https://image.tmdb.org/t/p/w300` + `${this.props.info.imgUrl}`}
      //     alt="React movies project"
      //   />

      //   <h3 className="card-name">{this.props.info.title}</h3>

      //   <p className="card-date">
      //     Release Date : {this.props.info.date}
      //   </p>

      //   <p className="card-popularity">
      //     Popularity : {this.props.info.popularity}
      //   </p>

      //   <p className="card-overview">{this.props.info.overview}</p>
      // </div>
      <Card className="card-main" key={this.props.info.id}>
        <CardMedia
          className="card-media"
          image={
            `https://image.tmdb.org/t/p/w300` + `${this.props.info.imgUrl}`
          }
          title={this.props.info.title}
          
        />
        <CardHeader className="card-header" title={this.props.info.title} />
        <CardContent className="card-content">
          {/* <Typography className={classes.title} variant="h5" component="h2">
            {this.props.info.title}
          </Typography> */}

          <Typography variant="body2" color="textSecondary" component="p">
            Release Date : {this.props.info.date} | Popularity : {this.props.info.popularity}
         
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {this.props.info.overview}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default Cards;
