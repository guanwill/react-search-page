import React, { Component } from 'react';
import '../App.css';
import ResultItems from './ResultItems'

class Results extends Component {

  render() {

    // Loop through all the relevant search results and print them out one by one via ResultItems component
    const resultItems = this.props.results.map(function(result){
      return (
        <ResultItems key={result.id} result={result}  />
      );
    });


    return(
      <div>
        {resultItems}

        <div className="noResultsContainer">
          <div className="noResultsContainer_inner">
            <p>We currently don’t have any results for your search, try another.</p>
          </div>
        </div>
      </div>
    );


  }
}

export default Results;
