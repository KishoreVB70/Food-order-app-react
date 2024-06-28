import React from 'react'

// Redux
import { useSelector } from 'react-redux'


function CartItem( item ) {
    console.log(item);
    return (
        <div>
            <h1></h1>
        </div>
    )
}

function Cart() {
    const cartItems = useSelector(store => store.cartSlice.items);
    return (
        cartItems.map(item => < CartItem item={item} />)
    )
}

export default Cart