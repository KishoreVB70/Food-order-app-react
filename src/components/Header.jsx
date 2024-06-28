// Hooks
import { useEffect, useState, useContext } from "react";

// Components
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";

// Context
import UserContext from "../utils/UserContext";

// Utils
import { appLogo } from "../utils/constants";

// Redux
import { useSelector } from "react-redux";
import store from "../redux/store";



const Header = () => { 

    //State variable
    const [login, setLogin] = useState("Login");
    const [bg, setBg] = useState("green");

    const { loggedUser } = useContext(UserContext);
    const onlineStatus = useOnlineStatus();

    const cartValue = useSelector(store => store.cartSlice.items)
    console.log(cartValue)

    useEffect(() => {
        onlineStatus===true?setBg("green"):setBg("red");
    }, [onlineStatus])

    const handleLogin = () => {
        setLogin(data => data==="Login"?"Logout":"Login");
    };

    return (
        <div className="flex p-2 m-2 justify-between border-blue-950 border shadow-md " >
            <div className="logo-container">
                <Link to={"/"} >
                    <img  className="w-20" src={appLogo} /> 
                </Link>
            </div>
            <div className="flex items-center" >
                <ul className="flex p-2" >
                    <li className="mx-2 hover:text-icon2 flex items-center" >
                         <Link to={"/"}>Home</Link>
                    </li>
                    <li className="mx-2 hover:text-icon2 flex items-center">
                        <Link to={"/about"}>AboutUs</Link>
                    </li>
                    <li className="mx-2 hover:text-icon2 flex items-center">
                        <Link to={"/grocery"}>Grocery App</Link>
                    </li>
                    <li className="mx-2 hover:text-icon2 flex items-center">Help</li>
                    <li className="mx-2 hover:text-icon2 flex items-center">Cart({cartValue})</li>
                    <li className="mx-2 flex items-center">{loggedUser}</li>
                    
                    <button onClick={handleLogin} className="mx-2 w-20 h-10 bg-transparent hover:bg-icon text-icon hover:text-white py-2 px-4 border border-icon rounded text-sm"  >{login}</button>
                </ul>
            </div>  
        </div>
    );
}

export default Header;