import ResCard from "./ResCard";

const Body = ( {resData} ) => (
    <div className="body" >
        <div className="search">
            Search
        </div>
        <div className="res-container">
            {
                resData.map(rest => (<ResCard key={rest.resId} data={rest} />))
            }
        </div>
    </div>
)

export default Body;