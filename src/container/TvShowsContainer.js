import React, { Component } from "react";
import Cards from "../components/Cards";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { getTVshows } from "../service/api";
import Loading from "../components/Loading"

class MoviesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: true,
      value: "airing_today",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    getTVshows(this.state.value).then(
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
    getTVshows(value).then(
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
      <main className="tv-main">
        <div>
          <FormControl variant="outlined" className="form-select">
            <InputLabel id="demo-simple-select-outlined-label">
              Category
            </InputLabel>
            <Select
              value={this.state.value}
              onChange={this.handleChange}
              label="Category"
            >
              <MenuItem value="airing_today">Airing Today</MenuItem>
              <MenuItem value="on_the_air">On The Air</MenuItem>
              <MenuItem value="popular">Popular</MenuItem>
              <MenuItem value="top_rated">Top Rated</MenuItem>
            </Select>
          </FormControl>
          {this.state.isLoaded ? <Loading /> 
          :
          <div className="tv-cards">
            {items.map((item) => (
              <Cards
                key={item.id}
                info={{
                  title: `${item.name}`,
                  date: `${item.first_air_date}`,
                  popularity: `${item.popularity}`,
                  overview: `${item.overview}`,
                  imgUrl: `${item.poster_path}`,
                  id: `${item.id}`,
                }}
              />
            ))}
          </div>
          }
          
        </div>
      </main>
    );
  }
}
export default MoviesContainer;
