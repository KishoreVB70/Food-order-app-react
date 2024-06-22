import ResCard from "./ResCard";

const restData = [
    {resId: 0, resName: "Cock ra co", cuisine: "South Indian", rating: 5, costForTwo: 400, imageUrl: "https://imgs.search.brave.com/6S2dgLZXG22sVdx4GqqT50BrYjXr6NmEUWCDHBwNMGk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuamRtYWdpY2Jv/eC5jb20vY29tcC9j/b2ltYmF0b3JlL3M1/LzA0MjJweDQyMi54/NDIyLjExMDEwMjEy/MDEzOS55OXM1L2Nh/dGFsb2d1ZS9jb2Nr/LXJhLWNvLXJzLXB1/cmFtLWNvaW1iYXRv/cmUtY29pbWJhdG9y/ZS1ob21lLWRlbGl2/ZXJ5LXJlc3RhdXJh/bnRzLW02dTRjLmpw/Zz9jbHI9IzFjNGEx/Yw"},
    {resId: 1, resName: "La Cafe", cuisine: "Veg", rating: 5,costForTwo: 350, imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/bzboqpm6chvobfxcfyem"},
    {resId: 2, resName: "French Door", cuisine: "Continental", rating: 4, costForTwo: 1000, imageUrl: "https://imgs.search.brave.com/LOIN2JXNMFgDORdzTgLz1ZhYNQlsTwQBB0ueviJ_KeE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MGYvMjcvMTMvYjkv/dGhlLWZyZW5jaC1k/b29yLmpwZw"}
]

const Body = () => (
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

export default Body;