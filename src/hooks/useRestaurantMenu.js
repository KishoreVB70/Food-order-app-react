import { useEffect, useState } from "react";
import { swiggyMenuAPI } from "../utils/constants"
const useRestaurantMenu = (resID) => {
    const [restaurant, setRestaurant] = useState(null)
    const [menu, setMenu] = useState(null)
    const [accordianHeader, setAccordianHeader] = useState(null)
    const [accordianItems, setAccordianItems] = useState(null)

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async() => {
        try{
            // Set restaurant
            const menu = await fetch(swiggyMenuAPI + resID);
            const data = await menu.json();
            const restData = data?.data?.cards[2]?.card?.card?.info;
            setRestaurant(restData);

            // Set all items
            const filteringTitle = data?.data?.cards[4]?.groupedCard?.
                cardGroupMap?.REGULAR?.
                cards.filter(item => item.card.card.hasOwnProperty('title'));

            const removingStuff = filteringTitle.map(item => item.card.card);
            const filteringItemCategories = removingStuff.filter(item => item["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

            const accordianHeader = filteringItemCategories.map(item => item.title);
            const accordianItems = filteringItemCategories.map(item => item.itemCards);
            // console.log(accordianItems);
            // console.log(accordianHeader);
            setAccordianItems(accordianItems);
            setAccordianHeader(accordianHeader);
            
            // Menu items
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
    
    return [restaurant, menu, accordianHeader, accordianItems];
}

export default useRestaurantMenu;