import React, { Component } from 'react';
import '../App.css';

class ResultItems extends Component {

  render() {

    var result = this.props.result

    return(
      <div>
        <p>{result.siteName}</p>
      </div>
    );

  }
}

export default ResultItems;
