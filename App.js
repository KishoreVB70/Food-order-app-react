import React from "react";
import ReactDOM from "react-dom/client";

const Body = () => (
    <div>
        <h1>Welcome to the food app</h1>
    </div>
)

const Header = () => (
    <div>
        <h1>Welcome to the food app</h1>
    </div>
)

const Footer = () => (
    <div>
        <h1>Welcome to the food app</h1>
    </div>
)

const AppLayout = () => (
    <>
        <Header/>
        <Body/>
        <Footer/>
    </>
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

