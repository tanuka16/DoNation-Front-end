import React from 'react';
import { Elements } from 'react-stripe-elements';
import Checkout from '../components/Checkout.js';
import {Link} from 'react-router-dom';
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


      <p className="card-text" >
        <strong>For more details, visit: </strong>
        {
          `${props.website_url}`
        }
      </p>

      <p className='donation-box'>

      {
        props.currentUser ?
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
  //elements has the injected checkout form
