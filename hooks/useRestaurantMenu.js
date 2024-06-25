import { useEffect, useState } from "react";
import { swiggyMenuAPI } from "../utils/constants"
const useRestaurantMenu = (resID) => {
    const [restaurant, setRestaurant] = useState(null)
    const [menu, setMenu] = useState(null)

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async() => {
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
    
    return [restaurant, menu];
}

export default useRestaurantMenu;