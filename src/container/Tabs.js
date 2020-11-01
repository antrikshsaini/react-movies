import React, { Component } from "react";
import {Link} from "react-router-dom"

class Tabs extends Component {
  render() {
    return (
      <nav className="tabs-main">
        <ul>
          <li>
            <Link className="tabOne" to="/movies">
              MOVIES
            </Link>
          </li>
          <li>
            <Link className="tabTwo" to="/results">
              SEARCH RESULTS
            </Link>
          </li>
          <li>
            <Link className="tabThree" to="/tvshows">
              TV SHOWS
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Tabs;
