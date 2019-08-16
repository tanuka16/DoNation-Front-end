import React from 'react'
import { Elements } from 'react-stripe-elements'
import Checkout from '../components/Checkout.js'

const Charity = (props) =>(
  <div id='myDiv'>
    <h5 className="card-title">{props.name}</h5>

    <img src={props.img_url} alt="" id='img' align="left" />

      <p className="card-text" >
      {
        `${props.description}`
      }
      </p>
      {
        localStorage.token ?
        <Elements >
          <Checkout/>
        </Elements>
        : "Please Login"
      }
  </div>

)
export default Charity
// `Category: ${props.category} -- Mission: ${props.description}`
