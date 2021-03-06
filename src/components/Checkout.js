import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout'
// import { toast } from "react-toastify";

class Checkout extends Component {
    state = {
      amount: 0
    }
// gives access to 2 parameters token and addresses
    onToken = (token, addresses) => {
        fetch("http://localhost:3000/donations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({token, addresses, amount: parseInt(this.state.amount) * 100})
        })
        .then(r => r.json())
        .then(chargeData => {
            console.log(chargeData)
        }) 
    }

    handleChange = event => this.setState({ amount: event.target.value })

    render() {
        return (
          <>
          <input type='number' value={this.state.amount} onChange={this.handleChange}/>
            <StripeCheckout
                stripeKey = "pk_test_iQ2PvhCJKOw4BbMGWD6VF3jA00z3yFKwxs"
                token = {this.onToken}      //token prop accepts a call back funtion, which gives access to the created token
                amount = {parseInt(this.state.amount) * 100}      //*100 converts the price into cents
                billingAddress={false}
                zipCode={false}
                description="Costal Pet Supplies"
                image="https://i.pinimg.com/564x/f6/c0/75/f6c07532e8678364a051f6db1279178e.jpg"
                label="Pay with 💳"
            />
            </>
        );
    }
}

export default Checkout;
