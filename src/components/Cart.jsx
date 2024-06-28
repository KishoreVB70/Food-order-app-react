import React from 'react'

// Redux
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { deleteCart } from "../redux/cartSlice";

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
    const dispatch = useDispatch();
    console.log(cartItems);

    const clearCartHandler = () => {
        dispatch(deleteCart());
    }

    return (
        <div className='items-center flex flex-col justify-center' >
            <button onClick={clearCartHandler} className='bg-gray-100  p-2 m-2 hover:bg-transparent hover:bg-red-500 border border-black' >Clear cart</button>
            {cartItems.map(item => < CartItem key={item.id} item={item} />)}
        </div>
    )
}

export default Cart