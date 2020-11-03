import React, { Component } from "react";
import Cards from "../components/Cards";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { getMovies } from "../service/api";
import Loading from "../components/Loading"
import SearchForm from "../components/SearchForm"

class MoviesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: true,
      value: "now_playing",
      searchName: '',
      searchType: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    // this.fetchResults = this.fetchResults(this);
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
  handleInputChange = searchName => {
    this.setState({
      searchName: searchName
    })
    
  }
  handleSelectChange = searchType => {
    this.setState({
      searchType: searchType
    })
    
  }
  fetchResults = () => {
    
    alert("select Results tab first")

  }

  render() {
    const { items } = this.state;

    return (
      <main className="movies-main">
        <SearchForm
            onInputChange={this.handleInputChange}
            onSubmit={this.fetchResults}
            onSelectChange={this.handleSelectChange}
          />
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
              <MenuItem value="now_playing">Now Playing</MenuItem>
              <MenuItem value="popular">Popular</MenuItem>
              <MenuItem value="top_rated">Top Rated</MenuItem>
              <MenuItem value="upcoming">Upcoming</MenuItem>
            </Select>
          </FormControl>
          {this.state.isLoaded ? <Loading /> 
          :
           <div className="movies-cards">
            {items.map((item) => (
              <Cards
                key={item.id}
                info={{
                  title: `${item.title}`,
                  date: `${item.release_date}`,
                  popularity: `${item.popularity}`,
                  overview: `${item.overview}`,
                  imgUrl: `${item.poster_path}`,
                  id: `${item.id}`,
                }}
              />
            ))}
          </div>}
          
        </div>
      </main>
    );
  }
}
export default MoviesContainer;
