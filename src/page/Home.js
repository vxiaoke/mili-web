import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div id="home-container">
        <Link to={{ pathname: '/About' }} className="home-link">
          点击跳转到路由参数search，state使用
        </Link>

      </div>
    );
  }
}

export default Home;