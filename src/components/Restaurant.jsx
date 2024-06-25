import React from 'react'
import MenuCard from "./MenuCard"
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
import useRestaurantMenu from '../../hooks/useRestaurantMenu'

const Restaurant = () => {
    const {resID} = useParams();
    const [restaurant, menu] = useRestaurantMenu(resID);


  return (
    <div className='body' >
        {restaurant === null
            ?
            <>
                <h1>Restaurant: </h1>
                <h1>Area: </h1>
                <h1>Cuisines: </h1>
            </>
            :
            <>
                <h1>Restaurant: {restaurant.name}</h1>
                <h1>Area: {restaurant.areaName}</h1>
                <h1>Cuisines: {restaurant.cuisines}</h1>
            </>
            } 
        {menu === null
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