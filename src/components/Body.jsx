import ResCard from "./ResCard";

const bot = () => console.log("bot");

const Body = ( {resData} ) => (
    <div className="body" >
        <div className="search">
            Search
        </div>
        <button id="top-rated" onClick={bot}>Top Rated restaurants</button>
        <div className="res-container">
            {
                resData.map(rest => (<ResCard key={rest.resId} data={rest} />))
            }
        </div>
    </div>
)

export default Body;