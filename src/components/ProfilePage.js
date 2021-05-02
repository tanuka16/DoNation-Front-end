import React, {Component} from 'react';
import '../App.css';
import {Link} from 'react-router-dom'

class ProfilePage extends Component{
  componentDidMount(){
    if (!localStorage.token) {
      // let react router takecare of all url switching
      this.props.history.push('/login')
    }

  }
  render(){
  return(
      <div className='welcome'>
      { //conditional logic
        this.props.username ?
        (`Welcome, ${this.props.username}!`):
      null
      }

      </div>
    )
  }
}

export default ProfilePage;
