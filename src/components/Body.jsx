import { ResCard } from "./ResCard";

export const Body = () => (
    <div className="body" >
        <div className="search">
            Search
        </div>
        <div className="res-container">
            {
                restData.map(rest => (<ResCard key={rest.resId} data={rest} />))
            }
        </div>
    </div>
)