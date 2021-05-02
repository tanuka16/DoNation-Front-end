import React, {Component}  from 'react'
import Charity from '../components/Charity.js'
// import { Card } from 'semantic-ui-react'

class CharityCollection extends Component{
  render() {
    return (
      <div >
        {
          this.props.charity.map((oneCharity) => <Charity key={oneCharity.id} {...oneCharity} currentUser={this.props.currentUser}/>)
        }
      </div>
    )
  }
}

export default CharityCollection

// charity is passed down using props; on which i use  map method to create a new array
 // The map() method creates a new array with the results of calling a function for every array element.
