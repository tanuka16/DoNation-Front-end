import React from 'react'
import CharityCollection from './CharityCollection'
import LoginPage from '../components/LoginPage'
import SignupPage from '../components/SignupPage'
import ProfilePage from '../components/ProfilePage'
import Header from '../components/Header'
import FourOhFourPage from '../components/FourOhFourPage'
import '../App.css';
import Filter from '../components/Filter'
import {Switch, Route} from 'react-router-dom'

class CharityIndex extends React.Component {
  //  assigns state charity component
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
//updating the term by state ; the component takes in a value and assigns it to the stateTerm
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
// filterCharityTerm is a function passed on
  filterCharityTerm=()=>{
    // assigning copiedCharities all charity housed in this.state.charity.
    let copiedCharities = [...this.state.charity]
    if (this.state.stateTerm === 'All') {
      copiedCharities = [...this.state.charity]
    } else {
      copiedCharities= this.state.charity.filter(oneCharity => oneCharity.city === this.state.stateTerm)
    }
    // The filter method iterates over the array,
    // All elements that pass the expression will be displayed in the array the filter method constructs.
    // filter by category
    if (this.state.categoryTerm !== 'All') {
      copiedCharities = copiedCharities.filter(oneCharity => oneCharity.country === this.state.categoryTerm)
    }

    return copiedCharities
  }

  // logOutChange=()=>{
  //   this.setState({
  //
  //   })
  // }
  onLogout = () => {
    localStorage.clear()
    this.setState({
      username:''
    })
    // this.props.history.push('/login')
  }

  render(){
    // <Route path='/someplace' render={(routerProps) => <Component {...routerProps} moreProps={this.moreProps} /> } />

    return(
      <div>
      <Header onLogout={this.onLogout}/>

      <Switch>
        {/* pass in props to this components*/}
          <Route exact
          path='/profile'
          render={(routerProps) => <ProfilePage {...routerProps} username={this.state.username}/>}/>

          <Route path='/signup' render={routerProps => <SignupPage {...routerProps} updateUsername={this.updateUsername}/> }/>
          <Route path='/login' render={routerProps => <LoginPage {...routerProps} updateUsername={this.updateUsername}/> }/>
      </Switch>


        <Filter stateTerm={this.state.stateTerm} categoryTerm={this.state.categoryTerm} setStateTerm = {this.setStateTerm} setCategoryTerm={this.setCategoryTerm} />
       {/*filterCharityTerm is passed in as the charity prop for the CharityCollection*/}
        <CharityCollection charity={this.filterCharityTerm()} currentUser= {this.state.username}  />
      </div>

    )
  }

}
export default CharityIndex
