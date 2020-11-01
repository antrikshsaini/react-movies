import React, { Component } from 'react'
import SearchForm from '../components/SearchForm'
// import Form from '../components/Form'
// import Loading from '../components/Loading'
// import Recipes from '../components/Recipes'
// import { getRecipes } from '../services/api'

class SearchTop extends Component {
  state = {
    searchName: '',
    // recipes: [],
    isLoading: false
  }

  fetchResults = e => {
    const { searchName } = this.state
    e.preventDefault()
    alert("button clicked")
    // this.setState({
    //   isLoading: true
    // })

    // getRecipes(recipeName).then(
    //   recipes => {
    //     this.setState({
    //       recipes,
    //       isLoading: false
    //     })
    //   },
    //   error => {
    //     alert('Error', `Something went wrong! ${error}`)
    //   }
    // )
  }

  handleInputChange = searchName => {
    this.setState({
      searchName: searchName
    })
    // console.log(searchName)
  }

  render() {
    const { isLoading} = this.state
    return (
      <div>
        <SearchForm
          onInputChange={this.handleInputChange}
          onSubmit={this.fetchResults}
        />
        {/* {isLoading ? <Loading /> : <Recipes recipes={recipes} />} */}
      </div>
    )
  }
}

export default SearchTop
