export const addItemToCart = (cartItems, itemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === itemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === itemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
    }

    return [...cartItems, { ...itemToAdd, quantity: 1 }];
}

export const removeItemFromCart = (cartItems, itemToRemove) => {
    return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id);
}

export const addQuantityOfItem = (cartItems, itemToAddQuantityTo) => {
    return cartItems.map(
        cartItem =>
            cartItem.id === itemToAddQuantityTo.id ?
                {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
    )
}

export const removeQuantityOfItem = (cartItems, itemToRemoveQuantityFrom) => {
    const existingCartItem = cartItems.find(
        cartItem  => cartItem.id === itemToRemoveQuantityFrom.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== itemToRemoveQuantityFrom.id)
    }

    return cartItems.map(
        cartItem =>
            cartItem.id === itemToRemoveQuantityFrom.id ?
                {...cartItem, quantity: cartItem.quantity - 1}
                : cartItem
    )
}