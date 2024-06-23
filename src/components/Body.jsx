import ResCard from "./ResCard";
import { useState } from "react";



const Body = ( {resData} ) => {
    const [resData, setResData] = useState(resData);
    const bot = () => {
        setResData( (data) => resData.filter(res => res.rating > 4.2));
        console.log(resData)
    } 

    return (
        <div className="body" >
            <div className="filter">
                <button className="rated-btn" onClick={bot}>Top Rated restaurants</button>
            </div>
            <div className="res-container">
                {
                    resData.map(rest => (<ResCard key={rest.resId} data={rest} />))
                }
            </div>
        </div>
    )
}

export default Body;