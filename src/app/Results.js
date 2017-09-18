import React, { Component } from 'react';
import '../App.css';
import ResultItems from './ResultItems'

class Results extends Component {

  render() {

    const resultItems = this.props.results.map(function(result){
      return (
        <ResultItems key={result.id} result={result}  />
      );
    });


    return(
      <div>
        {resultItems}
      </div>
    );


  }
}

export default Results;
