import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import './checkout.styles.scss';

import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout.component";


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
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(Checkout);