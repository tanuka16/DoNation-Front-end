import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";


class Header extends Component {

  render() {
    return (
      <div> 
        <nav className="navbar">
        <h1 className="main-title">DoNation</h1>
          <Link className="active" to="/charity"><i className="fa fa-fw fa-home"></i> Home</Link>
          <Link to="/signup"><i className="search"></i> Signup</Link>
          <Link to="/login"><i className="login"></i> Login</Link>
          <Link style={{marginLeft: 15}} to="/" onClick={this.props.onLogout}>Logout</Link>
        </nav>


      <Carousel showThumbs={false} infiniteLoop={true} class='carousel'>
        <div style={{ height: "200px"}}><img src="pic1.jpg" style={{ height: "400px", width: "900px" }}/>this is slide 2
        </div>
        <div style={{ height: "200px" }}><img src="pic2.png" style={{ height: "400px", width: "900px" }}/>this is slide 3
        </div>
        <div>
          <img src="pic3.png" style={{ height: "400px", width: "900px" }}/>this is slide 3
        </div>
        <div>
          <img src="pic4.png" style={{ height: "400px", width: "900px" }} />
          <p className="legend">Legend 1</p>
        </div>
      </Carousel>




      </div>
    );
  }

}

export default Header;
// <a href="#"><i className="user"></i> Login</a>
// <header>
// <h1 className="text-center">DoNation</h1>
// </header>








// <div style={{ height: "400px" }}><img src="pic11.png" style={{ height: "400px", width: "900px" }}/>this is slide 1</div>
