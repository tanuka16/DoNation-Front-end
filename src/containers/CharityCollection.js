import React, {Component}  from 'react'
import Charity from '../components/Charity.js'
// import { Card } from 'semantic-ui-react'

class CharityCollection extends Component{
  render() {
    return (
      <div >
        <h1 className="main-title">DoNation</h1>
        {
          this.props.charity.map((oneCharity) => <Charity key={oneCharity.id} {...oneCharity}/>)
        }
      </div> 
    )
  }
}

export default CharityCollection
