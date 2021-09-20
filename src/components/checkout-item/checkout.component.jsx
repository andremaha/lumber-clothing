import React from "react";
import {connect} from "react-redux";

import './checkout.styles.scss'
import {removeItem, addQuantity, removeQuantity} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ item, removeItem, addQuantity, removeQuantity}) => {
    const {imageUrl, name, quantity, price} = item;
    return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img alt='item' src={imageUrl} />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => removeQuantity(item)}>&#10094;</div>
            <div className='value'>{quantity}</div>
            <div className='arrow' onClick={() => addQuantity(item)}>&#10095;</div>
        </span>
        <span className='price'>$ {price}</span>
        <div className='remove-button' onClick={() => removeItem(item)}>&#10005;</div>
    </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item)),
    addQuantity: item => dispatch(addQuantity(item)),
    removeQuantity: item => dispatch(removeQuantity(item))
})


export default connect(null, mapDispatchToProps)(CheckoutItem);