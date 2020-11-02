import Tabs from './Tabs'
import React, { Component } from 'react'
import SearchForm from '../components/SearchForm'
import { getResults } from '../service/api'
import MoviesContainer from './MoviesContainer'
import ResultsContainer from './ResultsContainer'



class SearchTop extends Component {
  state = {
    searchName: '',
    // recipes: [],
    isLoaded: true,
    searchType: '',
    items: [],
  }

  fetchResults = e => {
    const { searchName, searchType } = this.state
    e.preventDefault()
    // alert("button clicked")
    
    getResults(searchType, searchName).then(
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

  render() {
    
    const { items, isLoaded,searchName} = this.state
    if(isLoaded == true){
      return (
        <div>
          <SearchForm
            onInputChange={this.handleInputChange}
            onSubmit={this.fetchResults}
            onSelectChange={this.handleSelectChange}
          />
          
        </div>
      )
    }
    else if(isLoaded == false){
      return (
        <div>
          <SearchForm
            onInputChange={this.handleInputChange}
            onSubmit={this.fetchResults}
            onSelectChange={this.handleSelectChange}
          />
          <Tabs />
          <ResultsContainer results={items} />
        </div>
      )
    }
    
  }
}

export default SearchTop
