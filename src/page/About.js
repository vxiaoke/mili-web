import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class About extends Component {
  render() {
    return (
      <div id="home-container">
        <Link to={{ pathname: '/Message/3',}}>
          About
        </Link>

      </div>
    );
  }
}

