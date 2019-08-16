import React from 'react'
import CharityCollection from './CharityCollection'
import LoginPage from '../components/LoginPage'
import SignupPage from '../components/SignupPage'
import ProfilePage from '../components/ProfilePage'
// import HomePage from './HomePage'
import FourOhFourPage from '../components/FourOhFourPage'
import '../App.css';
import Filter from '../components/Filter'
import {Switch, Route} from 'react-router-dom'

class CharityIndex extends React.Component {
  state={
    charity: [],
    username : '',
    stateTerm: "All",
    categoryTerm: "All"
  }

  componentDidMount(){
    fetch('http://localhost:3000/charities')
    .then(res => res.json())
    .then(charityData => {
        // debugger
        this.setState({
          charity: charityData
        })
    }
  )


    if (localStorage.token){

      fetch('http://localhost:3000/profile', {
        headers: {
          Authorization: localStorage.token
        }
      })
      .then(res => res.json())
      .then(profileData => {
        this.setState({username: profileData.username})
      })
    }
  }

  updateUsername = username => {
    this.setState({
      username: username
    })
  }


  setStateTerm = (stateTerm) => {
    this.setState({
      stateTerm: stateTerm
    })
  }

  setCategoryTerm = (categoryTerm) => {
    this.setState({
      categoryTerm: categoryTerm
    })
  }

  filterCharityTerm=()=>{
    let copiedCharities = [...this.state.charity]
    if (this.state.stateTerm === 'All') {
      copiedCharities = [...this.state.charity]
    } else {
      copiedCharities= this.state.charity.filter(oneCharity => oneCharity.state === this.state.stateTerm)
    }

    // filter by category
    if (this.state.categoryTerm !== 'All') {
      copiedCharities = copiedCharities.filter(oneCharity => oneCharity.category === this.state.categoryTerm)
    }

    return copiedCharities
  }

  render(){
    console.log(this.state);
    return(
      <div>
      <Switch>
        // pass in props to this components
          <Route exact
          path='/profile'
          render={(routerProps) => <ProfilePage {...routerProps} username={this.state.username}/>}/>

          <Route path='/signup' render={routerProps => <SignupPage {...routerProps} updateUsername={this.updateUsername}/> }/>
          <Route path='/login' component={LoginPage}/>


        </Switch>


        <CharityCollection charity={this.filterCharityTerm()} />
        <Filter stateTerm={this.state.stateTerm} categoryTerm={this.state.categoryTerm} setStateTerm = {this.setStateTerm} setCategoryTerm={this.setCategoryTerm} />
      </div>

    )
  }

}
export default CharityIndex
