import React from "react";
import ReactDOM from "react-dom/client";

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

const Body = () => (
    <div className="body" >
        <h1>Welcome to the food app</h1>
    </div>
)


const Footer = () => (
    <div className="footer" >
        <h1>Welcome to the food app</h1>
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

