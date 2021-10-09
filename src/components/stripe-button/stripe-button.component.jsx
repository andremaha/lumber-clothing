import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const pubKey = 'pk_test_DHZlJzXP38B9kS3rQahMEF2B';

    const onToken = token => {
        console.log(token);
        alert('Paymet Submitted!');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Lumber Clothing'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={pubKey} />
    )
}

export default StripeCheckoutButton;