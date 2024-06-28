import React from 'react'

// Redux
import { useSelector } from 'react-redux'


function CartItem( {item} ) {
    console.log(item);
    return (
        <div className='w-full items-center flex justify-center' >            
            <div className=' flex flex-col justify-center text-center  items-center p-2 m-2 border border-blue-500 w-1/2' >
                <h1>{item.name}</h1>
                <h1>Price: {item.price?item.price:item.defaultPrice}</h1>
            </div>
        </div>
    )
}

function Cart() {
    const cartItems = useSelector(store => store.cartSlice.items);
    console.log(cartItems);
    return (
        cartItems.map(item => < CartItem key={item.id} item={item} />)
    )
}

export default Cart