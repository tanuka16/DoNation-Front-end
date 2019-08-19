import React from 'react';
import { Elements } from 'react-stripe-elements';
import Checkout from '../components/Checkout.js';
// import { Card, Icon, Image } from 'semantic-ui-react';

const Charity = (props) =>(
  <div id='myDiv'>

<h5 className="card-title">{props.name}</h5>

    <img src={props.logo_url} alt="" id='img' align="left" />

      <p className="card-text" >
      {
        `${props.mission}`
      }
      </p>
      {
        localStorage.token ?
        <Elements >
          <Checkout/>
        </Elements>
        : "Kindly login to make a donation"
      }

  </div>

)
export default Charity
// `Category: ${props.category} -- Mission: ${props.description}`
  // <Card.content>
