import React, { Component } from "react";
import MovieCard from "../components/MovieCard";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { getMovies } from "../service/api";

class MoviesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      value: "now_playing",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    getMovies(this.state.value).then(
      (res) => {
        this.setState({
          items: res,
          isLoaded: false,
        });
      },
      (error) => {
        alert("Error", `Something went wrong! ${error}`);
      }
    );
  }

  handleChange = (event) => {
    event.preventDefault();
    let value = event.target.value;
    this.setState({
      value: value,
    });
    getMovies(value).then(
      (res) => {
        this.setState({
          items: res,
          isLoaded: false,
        });
      },
      (error) => {
        alert("Error", `Something went wrong! ${error}`);
      }
    );
  };

  render() {
    const { items } = this.state;

    return (
      <main className="movies-main">
        <div>
          <FormControl variant="outlined" className="movies-select">
            <InputLabel id="demo-simple-select-outlined-label">
              Category
            </InputLabel>
            <Select
              value={this.state.value}
              onChange={this.handleChange}
              label="Category"
            >
              <MenuItem value="now_playing">Now Playing</MenuItem>
              <MenuItem value="popular">Popular</MenuItem>
              <MenuItem value="top_rated">Top Rated</MenuItem>
              <MenuItem value="upcoming">Upcoming</MenuItem>
            </Select>
          </FormControl>
          <div className="movies-cards">
            {items.map((item) => (
              <MovieCard
                key={item.id}
                movie={{
                  title: `${item.title}`,
                  date: `${item.release_date}`,
                  popularity: `${item.popularity}`,
                  overview: `${item.overview}`,
                  imgUrl: `${item.poster_path}`,
                  movieId: `${item.id}`,
                }}
              />
            ))}
          </div>
        </div>
      </main>
    );
  }
}
export default MoviesContainer;
