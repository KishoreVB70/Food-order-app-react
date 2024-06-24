import React from 'react'
import { useEffect, useState } from 'react'
import { swiggyMenuAPI } from '../../utils/constants'

const Restaurant = (props) => {
    const [menu, setMenu] = useState([])

    const fetchMenu = async() => {
        const menu = await fetch(swiggyMenuAPI);
        const data = await menu.json();
        // console.log(data.data.cards[4]);
        // console.log(data.data.cards[4].groupedCard.cardGroupMap.REGULAR);
        const menuItems = data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
        const filteredMenuItems = menuItems.map(item => {
            return item.card.info;
        })
        console.log(filteredMenuItems);

    }
    useEffect(() => {
        fetchMenu();
    }, [])


  return (
    <div>
        <h1>RS Puram</h1>
        <h1>Biriyani</h1>
    </div>
  )
}

export default Restaurant