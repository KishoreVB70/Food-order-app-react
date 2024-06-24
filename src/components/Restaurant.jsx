import React from 'react'
import { useEffect, useState } from 'react'
import { swiggyMenuAPI } from '../../utils/constants'

const Restaurant = (props) => {
    const [restaurant, setRestaurant] = useState({})
    const [menu, setMenu] = useState([])

    const fetchMenu = async() => {
        const menu = await fetch(swiggyMenuAPI);
        const data = await menu.json();
        
        const restData = data.data.cards[2].card.card.info
        setRestaurant(restData);


        console.log(restData);
        const menuItems = (
            data.data.cards[4].groupedCard.
            cardGroupMap.REGULAR.cards[2].
            card.card.itemCards
        );
        const filteredMenuItems = menuItems.map(item => {
            return item.card.info;
        })
        console.log(filteredMenuItems);
        setMenu(filteredMenuItems);

    }
    useEffect(() => {
        fetchMenu();
    }, [])


  return (
    <div>
        <h1>{restaurant.name}</h1>
        <h1>{restaurant.areaName}</h1>
        <h1>{restaurant.cuisines}</h1>
    </div>
  )
}

export default Restaurant