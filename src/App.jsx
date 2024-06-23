import React from "react";
import ReactDOM from "react-dom/client";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

// Utils
import { appLogo } from "../utils/constants.js"

// APP
const AppLayout = () => (
    <div className="App">
        <Header appLogo={appLogo} />
        <Body />
        <Footer/>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

