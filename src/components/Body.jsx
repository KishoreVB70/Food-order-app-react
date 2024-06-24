// Hooks
import { useState, useEffect } from "react";

// Components
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";

//Utils
import { swiggyAPI } from "../../utils/constants"

const Body = () => {
    // State variable
    const [restData, setResData] = useState([]);
    const [filterbtn, setFilterBtn] = useState("Top rated restaurants");
    const [searchInput, setSearchInput] = useState("");

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

    const search = () => {
        console.log(searchInput);;
        setResData(data => data.filter(dt => dt.resName.includes(searchInput)))
    }

    const fetchRestaurants = async() => {
        const data = await fetch(swiggyAPI);
        const jsonData = await data.json();
        // Optional chaining
        const restaurants = jsonData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
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

    // Empty dependency array will be called only when page is refreshed
    // Will not be called for state change rerendering
    useEffect(() => {
        fetchRestaurants();
        setFilterBtn("Top rated restaurants");
    }, []);

    return (
        <div className="body" >
            <div className="search">
                <input type="text" className="search-input" 
                    value={searchInput} 
                    onChange={(e) => setSearchInput(e.target.value)}  
                />
                <button className="search-input" onClick={search}  >Search</button>
            </div>
            <div className="filter">
                <button className="rated-btn" onClick={filterRated} >{filterbtn}</button>
            </div>

            {restData.length === 0 
                ? <Shimmer />
                : 
                <div className="res-container">
                    {
                        restData.map(rest => (<ResCard key={rest.resId} data={rest} />))
                    }
                </div>
            }
        </div>
    )
}

export default Body;