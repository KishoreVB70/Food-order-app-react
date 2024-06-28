import React from 'react'

// Component
import AccordianItem from './AccordianItem';

// Redux
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { deleteCart } from "../redux/cartSlice";

function Cart() {
    const cartItems = useSelector(store => store.cartSlice.items);
    const dispatch = useDispatch();
    console.log(cartItems);

    const clearCartHandler = () => {
        dispatch(deleteCart());
    }

    return (
        <div className='items-center flex flex-col m-auto justify-center w-6/12 ' >
            {cartItems.length ===0
                ?<h1>Cart is empty</h1>
                :
                <>
                    <button onClick={clearCartHandler} className='bg-gray-100  p-2 m-2 hover:bg-transparent hover:bg-red-500 border border-black' >Clear cart</button>
                    {cartItems.map(item => < AccordianItem key={item.card.info.id} card={item} restaurantImage={item.restaurantImage} />)}
                </>
            }
        </div>
    )
}

export default Cart