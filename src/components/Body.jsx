// Hooks
import { useState} from "react";
import useRestaurant from "../../hooks/useRestaurant";
import useOnlineStatus from "../../hooks/useOnlineStatus";

// Components
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";

//Utils
import { Link } from "react-router-dom";


const Body = () => {
    // State variable
    const [filteredRestData, setFilteredRestData] = useState(null);
    const [filterBtn, setFilterBtn] = useState("Top rated restaurants");
    const [searchInput, setSearchInput] = useState("");

    const restData = useRestaurant();
    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return <h1>You are offline, please check your connectivity</h1>
    }

    // For the first render
    if (restData !== null && filteredRestData === null) {
        setFilteredRestData(restData);
    }

    const filterRated = () => {
        if ( filterBtn === "Show All" ) {
            setFilteredRestData(restData);
        } else {
            setFilteredRestData( data => restData.filter(res => res.rating > 4.3));
        }

        setFilterBtn( (btn) => {
            if (btn == "Show All") {
                return "Top rated restaurants"
            }
            return "Show All";
        })
    } 

    const search = () => {
        const filteredData = restData.filter(data => {
            let {area, resName} = data;
            area = area.toUpperCase();
            resName = resName.toUpperCase();
            const searcip = searchInput.toUpperCase();

            return area.includes(searcip) 
                || resName.toUpperCase().includes(searcip);
        })

        setFilterBtn("Show All");
        
        setFilteredRestData(filteredData);
    }

    return (
        <div className="flex flex-col m-2 p-2" >
            <div className="mx-4">
                <input type="text" className=" p-1 border border-gray-400" 
                    value={searchInput} 
                    onChange={(e) => setSearchInput(e.target.value)}  
                />
                <button className=" hover:text-white py-1 hover:bg-purple-700 mx-2 px-2 border border-purple-700 text-purple-700 " onClick={search} >Search</button>
                <button className="hover:text-white  hover:bg-purple-700 mx-2 px-2 border border-purple-700 text-purple-700 rounded-lg" onClick={filterRated} >{filterBtn}</button>
            </div>

            {restData === null 
                ? <Shimmer />
                :
                filteredRestData === null
                    ? <h1>No data found</h1>
                    :
                    <div className="flex flex-wrap p-2 my-2 justify-between">
                        {
                            filteredRestData.map(rest => (
                                <Link key={rest.resId} to={"restaurant/"+rest.resId} >
                                    <ResCard data={rest} />                        
                                </Link>
                            ))
                        }
                    </div>
            }
        </div>
    )
}

export default Body;