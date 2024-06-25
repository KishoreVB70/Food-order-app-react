import React from 'react'
import { useEffect, useState } from 'react'
import { swiggyMenuAPI } from '../../utils/constants'
import MenuCard from "./MenuCard"
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'

const Restaurant = (props) => {
    const [restaurant, setRestaurant] = useState({})
    const [menu, setMenu] = useState([])
    const {resID} = useParams();

    const fetchMenu = async() => {
        try{
            const menu = await fetch(swiggyMenuAPI + resID);
            const data = await menu.json();
            const restData = data?.data?.cards[2]?.card?.card?.info;
        
            setRestaurant(restData);
            console.log(restData);
            
            const menuItems = (
                data?.data?.cards[4]?.groupedCard?.
                cardGroupMap?.REGULAR?.cards[2]?.
                card?.card?.itemCards
            );

            const filteredMenuItems = menuItems.map(item => {
                return item.card.info;
            })

            console.log(filteredMenuItems);
            setMenu(filteredMenuItems); 
        } catch(error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        fetchMenu();
    }, [])


  return (
    <div className='body' >
        <h1>Restaurant: {restaurant.name}</h1>
        <h1>Area: {restaurant.areaName}</h1>
        <h1>Cuisines: {restaurant.cuisines}</h1>
        {menu.length === 0
            ?<Shimmer />
            :
            <div className="res-container">
                {menu.map(e => <MenuCard key={e.id} data={e} />)}
            </div>
             }
    </div>
  )
}

export default Restaurant