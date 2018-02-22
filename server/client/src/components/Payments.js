import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="CampaignMail"
        description="$5 for 5 Campaign Credits"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        {/* remove color for rollover effect - note: materialize css sucks for react */}
        <button className="btn yellow darken-1">
          <span style={{ color: 'black', fontWeight: 500, margin: '-15px' }}>
            Add Credits
          </span>
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
