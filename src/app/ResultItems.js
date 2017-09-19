import React, { Component } from 'react';
import '../App.css';

class ResultItems extends Component {

  render() {

    // Grab the individual search result
    var result = this.props.result

    // Customize how we want to display the search result
    return(
      <div className="resultItems_container">
        <div className="container">
          <div className="result_items">
            <a target="_blank" href={"http://" + result.siteUrl}>{result.siteUrl}</a>
            <p>{result.description}</p>
          </div>
        </div>
      </div>

    );

  }
}

export default ResultItems;
