import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import { swiggyAPI } from "../../utils/constants"



const Body = () => {
    // State variable
    const [restData, setResData] = useState([]);
    const [filterbtn, setFilterBtn] = useState("Top rated restaurants");

    const filterRated = () => {
        if ( filterbtn === "Show All" ) {
            setResData( (data) => restData);
        } else {
            setResData( data => data.filter(res => res.rating > 4.3));
        }

        setFilterBtn( (btn) => {
            if (btn == "Show All") {
                return "Top rated restaurants"
            }
            return "Show All";
        })
    } 

    const fetchRestaurants = async() => {
        const data = await fetch(swiggyAPI);
        const jsonData = await data.json();
        const restaurants = jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
        const streamlinedRestaurants = restaurants.map((res) => {
            const {name, id, areaName, avgRating, cloudinaryImageId, costForTwo, cuisines} = res.info;
            return {
                resId: id,
                resName: name,
                area: areaName,
                rating: avgRating,
                imageId: cloudinaryImageId,
                costForTwo: costForTwo,
                cuisine: cuisines[0]
            };
        });
        setResData(() => streamlinedRestaurants);
    }

    // Will be called after the component is rendered
    useEffect(() => {
        fetchRestaurants();
    }, []);

    return (
        <div className="body" >
            <div className="filter">
                <button className="rated-btn" onClick={filterRated} >{filterbtn}</button>
            </div>
            <div className="res-container">
                {
                    restData.map(rest => (<ResCard key={rest.resId} data={rest} />))
                }
            </div>
        </div>
    )
}

export default Body;