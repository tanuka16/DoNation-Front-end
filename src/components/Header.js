import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {

  render() {
    return (
      <div className="navbar">
          <h1 className='logo'>DoNation</h1>
          <Link className="active" to="/charity"><i className="fa fa-fw fa-home"></i> Home</Link>
          <Link to="/signup"><i className="search"></i> Signup</Link>
          <Link to="/login"><i className="login"></i> Login</Link>
      </div>
    );
  }

}

export default Header;
// <a href="#"><i className="user"></i> Login</a>
// <header>
// <h1 className="text-center">DoNation</h1>
// </header>
