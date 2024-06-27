import React, {useState} from 'react'
import MenuCard from "./MenuCard"
import Shimmer from './Shimmer'
import RestaurantAccordian from './RestaurantAccordian'
import { useParams } from 'react-router-dom'
import useRestaurantMenu from '../../hooks/useRestaurantMenu';


import { swiggyCloudinaryImageBase } from '../utils/constants';

const Restaurant = () => {
    const {resID} = useParams();
    const [restaurant, menu, accordianHeader, accordianItems] = useRestaurantMenu(resID);
    
    const [show, setShow] = useState(null);
    
    return (
        <div className='flex flex-col m-2 p-2 items-center' >
        {restaurant === null
            ?
            <div className='flex flex-col items-center p-2 m-2 h-96 bg-gray-200' >
                <div className="w-72 h-72 py-2 " > </div>
            </div>
            :

            <div className='flex flex-col items-center p-2 m-4 h-96' >
                <h1 className='underline text-xl py-1' >{restaurant.name}</h1>
                <img className="w-72 h-72 py-2 " src={swiggyCloudinaryImageBase + restaurant.cloudinaryImageId} />

                <h1 className= ' text-lg py-1' >{restaurant.areaName}</h1>
                <h1 className= ' text-lg py-1' >{restaurant.cuisines[0] +", " + restaurant.cuisines[1]}</h1>
            </div>
            } 
        {accordianHeader === null
            ?<Shimmer />
            :
            accordianItems.map((i, index) =>  {
                return (
                    <RestaurantAccordian key={index} title={accordianHeader[index]}
                         restaurantImage={restaurant.cloudinaryImageId} cards={i}
                         show={index===show?true:false} 
                         setShow={() => setShow(i => i===index?null:index)}/> 
                )
            })

            // <div className="flex flex-wrap p-2 my-2 justify-between">
            //     {menu.map(e => <MenuCard key={e.id} data={e} />)}
            // </div>
             }
    </div>
  )
}

export default Restaurant