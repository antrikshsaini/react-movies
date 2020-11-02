import React, { Component } from "react";
import Cards from "../components/Cards"

class ResultsContainer extends Component {
  constructor(props){
    super(props)
  }
  render() {

    if(this.props.results == undefined){
      return(
        <div>
          fill search input and submit
        </div>
      )
    }
    else if(this.props.results !== undefined){
      return (
        <main className = "results-main">
            
            <div className="result-cards">

          
            {this.props.results.map((item) => (
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
        </main>
    );
    }
    
  }
}
export default ResultsContainer;
