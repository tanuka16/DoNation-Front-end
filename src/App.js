import React from 'react';
// import logo from './logo.svg';
import CharityIndex from './containers/CharityIndex'
import {StripeProvider} from 'react-stripe-elements'
import Chat from './containers/Chat'
// import './App.css';


const App = () => (
  <StripeProvider apiKey="pk_test_iQ2PvhCJKOw4BbMGWD6VF3jA00z3yFKwxs">
    <div className='App'>

      <CharityIndex/>
      <Chat/>
    </div>

    </StripeProvider>
)


export default App;
// <Header/>
// used react-stripe-elements, it wrap the checkout in a special higher order component called StripeProvider

// import Header from './components/Header'
