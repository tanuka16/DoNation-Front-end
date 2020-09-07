import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";



class Header extends Component {

  render() {
    return (
      <div>
      <div>
        <nav className="navbar">
        <h1 className="main-title">DoNation</h1>
          <Link className="active" to="/charity"><i className="fa fa-fw fa-home"></i> Home</Link>
          <Link to="/signup"><i className="search"></i> Signup</Link>
          <Link to="/login"><i className="login"></i> Login</Link>
          <Link style={{marginLeft: 15}} to="/" onClick={this.props.onLogout}>Logout</Link>
        </nav>
      </div>

        <Carousel showThumbs={false} infiniteLoop={true} class='carousel'>
          <div style={{ height: "200px"}}><img src="pic1.jpg" alt='' style={{ height: "400px", width: "900px" }}/>this is slide 2
          </div>
          <div style={{ height: "200px" }}><img src="pic2.png" alt='' style={{ height: "400px", width: "900px" }}/>this is slide 3
          </div>
          <div>
            <img src="pic3.png" alt='' style={{ height: "400px", width: "900px" }}/>this is slide 3
          </div>
          <div>
            <img src="pic4.png" alt='' style={{ height: "400px", width: "900px" }} />
            <p className="legend">Legend 1</p>
          </div>
        </Carousel>

        </div>

    );
  }

}

export default Header;
