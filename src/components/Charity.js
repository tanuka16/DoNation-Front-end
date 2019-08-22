import React from 'react';
import { Elements } from 'react-stripe-elements';
import Checkout from '../components/Checkout.js';
// import { Card, Icon, Image } from 'semantic-ui-react';

const Charity = (props) =>{
  console.log(props.name);
  return (
  <div id='myDiv'>

<h5 className="card-title">{props.name}</h5>

    <img src={props.logo_url} alt="" id='img' align="left" />

      <p className="card-text" >
      {
        `${props.mission}`
      }
      </p>
      <p className='donation-box'>
      {
        props.currentUser ?
        <Elements >
          <Checkout/>
        </Elements>
        : <a>Kindly signup or login to make donations</a>
      }
      </p>

  </div>

)}
export default Charity
// `Category: ${props.category} -- Mission: ${props.description}`
  // <Card.content>
