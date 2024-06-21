import React from "react";
import ReactDOM from "react-dom/client";

const restData = [
    {resName: "Cock ra co", cuisine: "South Indian", rating: 5},
    {resName: "La Cafe", cuisine: "Veg", rating: 5},
    {resName: "French Door", cuisine: "Continental", rating: 4}
]
const Header = () => (
    <div className="header" >
        <div className="logo-container">
            <img  className="logo" src="https://imgs.search.brave.com/l0684uJjP2-PEeXdGv36QCfwESGiaMssVCaeHKdgqTc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL1QvVGFjb19C/ZWxsLWxvZ28tN0Uy/MEMzMzU0RS1zZWVr/bG9nby5jb20ucG5n"/>
        </div>
        <div className="nav-items" >
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Help</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
)


const RestoCard = (props) => (
    <div className="res-card">
        <h3 className="res-name" >{props.data.resName}</h3>
        <img className="res-img" src="https://imgs.search.brave.com/6S2dgLZXG22sVdx4GqqT50BrYjXr6NmEUWCDHBwNMGk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuamRtYWdpY2Jv/eC5jb20vY29tcC9j/b2ltYmF0b3JlL3M1/LzA0MjJweDQyMi54/NDIyLjExMDEwMjEy/MDEzOS55OXM1L2Nh/dGFsb2d1ZS9jb2Nr/LXJhLWNvLXJzLXB1/cmFtLWNvaW1iYXRv/cmUtY29pbWJhdG9y/ZS1ob21lLWRlbGl2/ZXJ5LXJlc3RhdXJh/bnRzLW02dTRjLmpw/Zz9jbHI9IzFjNGEx/Yw" />
        <h4>Rating: {props.data.rating}</h4>  
        <h4>RS Puram</h4>
        <text>{props.data.cuisine}</text>
        <text>20 Km</text>
        <text>45 mins</text>
    </div>
)

const Body = () => (
    <div className="body" >
        <div className="search">
            Search
        </div>
        <div className="res-container">
            <RestoCard data={restData[0]}/>
            <RestoCard data={restData[1]}/>
            <RestoCard data={restData[2]}/>
        </div>
    </div>
)

const Footer = () => (
    <div className="footer" >
        <ul>
            <li>Copyright</li>
            <li>Socials</li>
            <li>Address</li>
            <li>Contact</li>
        </ul>
    </div>
)

const AppLayout = () => (
    <div className="App">
        <Header/>
        <Body/>
        <Footer/>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

