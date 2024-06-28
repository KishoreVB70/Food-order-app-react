import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact.jsx";
import Restaurant from "./components/Restaurant.jsx";
import Error from "./components/Error.jsx";
import Restaurant from "./components/Restaurant.jsx";

// Utils

// Context
import UserContext from "./utils/UserContext.js";
// Redux store
import { Provider } from "react-redux";
import store from "./redux/store.js";


// Lazy component
const Grocery = lazy(() => import("./components/Grocery.jsx"));

// App component
const AppLayout = () =>  {
    //State variable
    const [userName, setUserName] = useState(null);

    useEffect(() => setUserName("Kishore"), []);

    return(
        <div className="App">
            <Provider store={store} >
                <UserContext.Provider value={{ loggedUser: userName, setUserName }}>
                    <Header />
                    <Outlet />
                    <Footer/>
                </UserContext.Provider>
            </Provider>

            </div>
    )
}



// Router
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <AboutUs />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:resID",
                element: <Restaurant />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<Body/>} > <Grocery /> </Suspense>  
            }
        ]
    },

])

//Render to root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);