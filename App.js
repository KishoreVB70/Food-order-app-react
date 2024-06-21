import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
    <div id="header" >
        <h1>Welcome to the food app</h1>
    </div>
)

const Body = () => (
    <div id="body" >
        <h1>Welcome to the food app</h1>
    </div>
)


const Footer = () => (
    <div id="footer" >
        <h1>Welcome to the food app</h1>
    </div>
)

const AppLayout = () => (
    <div id="App">
        <Header/>
        <Body/>
        <Footer/>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

