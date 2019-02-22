import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default class Header extends Component {
  render() {
    return (
      <div style={styles.headBox}>
        <Link to={{ pathname: '/Home' }}>
          <img src={logo} style={styles.headLogo} />
        </Link>
        <div style={styles.menuBox}>
          <NavLink style={styles.menuText} activeStyle={styles.activeMenu} to="/Home">首页</NavLink>
          <NavLink style={styles.menuText} activeStyle={styles.activeMenu} to="/About">关于我们</NavLink>
        </div>
      </div>
    );
  }
}

const styles = {
  headBox: {
    background: '#fff',
    width: '100%',
    padding: '18px 160px',
    display: 'flex',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 999,
  },
  headLogo: {
    width: '194px',
    height: '44px',
  },
  menuText: {
    lineHeight: '44px',
    textDecoration: 'none',
    fontFamily: 'PingFangSC-Regular',
    fontSize: '16px',
    color: '#333',
    marginLeft: '60px',
  },
  activeMenu: {
    color: '#FC4277'
  }
}