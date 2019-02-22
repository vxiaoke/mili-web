import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
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

export default About;