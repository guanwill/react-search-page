import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
