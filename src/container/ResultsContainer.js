import React, { Component } from "react";
import Cards from "../components/Cards";
import { getResults } from "../service/api";
import SearchForm from "../components/SearchForm";

class ResultsContainer extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    searchName: null,
    isLoaded: true,
    searchType: "",
    items: [],
    err: "",
  };

  fetchResults = (e) => {
    const { searchName, searchType } = this.state;
    e.preventDefault();
    getResults(searchType, searchName).then(
      (res) => {
        this.setState({
          items: res,
          isLoaded: false,
        });
        if (res.length === 0) {
          this.setState({
            isLoaded: true,
          });
          document.getElementById(
            "result-change"
          ).innerHTML = `Sorry There were no Results`;
        }
      },
      (error) => {
        alert("Error", `Something went wrong! ${error}`);
        this.setState({
          err: error,
        });
        document.getElementById("result-change").innerHTML = `${error}`;
      }
    );
  };
  handleInputChange = (searchName) => {
    this.setState({
      searchName: searchName,
      isLoaded: true,
    });
    document.getElementById("result-change").innerHTML =
      "Please initiate a search";
  };
  handleSelectChange = (searchType) => {
    this.setState({
      searchType: searchType,
    });
  };

  render() {
    const { items, isLoaded, searchType } = this.state;

    if (isLoaded === true) {
      return (
        <main className="results-main">
          <SearchForm
            onInputChange={this.handleInputChange}
            onSubmit={this.fetchResults}
            onSelectChange={this.handleSelectChange}
          />
          <div id="result-change" className="results-text">
            Please Enter a Search
          </div>
        </main>
      );
    } else if (isLoaded === false && searchType === "tv") {
      return (
        <main className="results-main">
          <SearchForm
            onInputChange={this.handleInputChange}
            onSubmit={this.fetchResults}
            onSelectChange={this.handleSelectChange}
          />
          
          <div className="result-cards">
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
          <div id="result-change" className="results-text">
            
          </div>
        </main>
      );}
    else if (isLoaded === false ) {
      return (
        <main className="results-main">
          <SearchForm
            onInputChange={this.handleInputChange}
            onSubmit={this.fetchResults}
            onSelectChange={this.handleSelectChange}
          />
          <div className="result-cards">
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
          </div>
          <div id="result-change" className="results-text">
            
          </div>
        </main>
      );
    }
  }
}
export default ResultsContainer;
