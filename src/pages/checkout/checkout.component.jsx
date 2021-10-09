import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import './checkout.styles.scss';

import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";


const Checkout = ({cartItems, cartTotal}) => (

    <div className='checkout-page'>
        <div class='checkout-header'>
            <div class='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.length?
            cartItems.map(cartItem => <CheckoutItem key={cartItem.id} item={cartItem}/>)
                : null
        }
        <div className='total'>
            <span>TOTAL: ${cartTotal}</span>
        </div>
        <div className='test-warning'>
            * Please use the following test credit card info for payment: <br />
            4242 4242 4242 4242 - Exp: 01/2022 - CVV 123
        </div>
        <StripeCheckoutButton price={cartTotal} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(Checkout);