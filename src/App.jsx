import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";

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

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />
    },
    {
        path: "/about",
        element: <AboutUs />
    },
    {
        path: "/contact",
        element: <Contact />
    }

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

