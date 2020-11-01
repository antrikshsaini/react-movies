import React, { Component } from "react";

class MoviesContainer extends Component {
constructor(props){
    super(props);
    this.state = {
        items: {},
        isLoaded:false
    }
}
    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=6e3f3cfd44f7f7ad40670eaf11d9c1cc&language=en-US&page=1')
            .then(res => res.json())
            .then(json => {
                // console.log(json)
                this.setState({
                    isLoaded: true,
                    items: json.results[0],
                })
            })
    }




  render() {
      const {items} = this.state
    console.log(items.title)
    // console.log(items[0].results.title)
    return (
        <main className = "movies-main">
            <div>
                Movies
            </div>
        </main>
    );
  }
}
export default MoviesContainer;
