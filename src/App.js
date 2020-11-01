import logo from "./logo.svg";
import "./App.css";
import SearchTop from "./container/SearchTop";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./container/Home";
import MoviesContainer from "./container/MoviesContainer";
import ResultsContainer from "./container/ResultsContainer";
import TvShowsContainer from "./container/TvShowsContainer";
import Tabs from "./container/Tabs";

function App() {
  return (
    <Router>
      {/* <ScrollToTop /> */}
      <div className="App">
        <header className="App-header">
          <h1>React Movies App</h1>
        </header>
        <SearchTop />
        <Tabs />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" exact component={MoviesContainer} />
          <Route path="/results" component={ResultsContainer} />
          <Route path="/tvshows" component={TvShowsContainer} />
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
