import React from 'react';
// import logo from './logo.svg';
import CharityIndex from './containers/CharityIndex'
import Header from './components/Header'
import {StripeProvider} from 'react-stripe-elements'
import './App.css';


const App = () => (
  <StripeProvider apiKey="pk_test_iQ2PvhCJKOw4BbMGWD6VF3jA00z3yFKwxs">
  <div className='App'>
    <Header/>
    <CharityIndex/>
  </div>

    </StripeProvider>
)


export default App;
