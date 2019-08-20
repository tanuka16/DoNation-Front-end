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
// <h1 className="main-title">DoNation</h1>
