import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../hooks/useOnlineStatus";
const Header = ({appLogo}) => { 

    //State variable
    const [login, setLogin] = useState("Login");
    const [bg, setBg] = useState("green");

    const onlineStatus = useOnlineStatus();

    useEffect(() => {
        onlineStatus===true?setBg("green"):setBg("red");
    }, [onlineStatus])

    const handleLogin = () => {
        setLogin(data => data==="Login"?"Logout":"Login");
    }

    return (
        <div className="flex p-2 m-2 justify-between border-blue-950 border " >
            <div className="logo-container">
                <Link to={"/"} >
                    <img  className="w-20" src={appLogo} /> 
                </Link>
            </div>
            <div className="flex items-center" >
                <ul className="flex p-2" >
                    <li className="mx-2 hover:text-purple-500 flex items-center" >
                         <Link to={"/"}>Home</Link>
                    </li>
                    <li className="mx-2 hover:text-purple-500 flex items-center">
                        <Link to={"/about"}>AboutUs</Link>
                    </li>
                    <li className="mx-2 hover:text-purple-500 flex items-center">
                        <Link to={"/grocery"}>Grocery App</Link>
                    </li>
                    <li className="mx-2 hover:text-purple-500 flex items-center">Help</li>
                    <li className="mx-2 hover:text-purple-500 flex items-center">Cart</li>
                    
                    <button onClick={handleLogin} className="mx-2 bg-transparent hover:bg-purple-700 text-purple-700 hover:text-white py-2 px-4 border border-purple-500 rounded "  >{login}</button>
                </ul>
                <div className="online-status"style={{backgroundColor: bg}}></div>
            </div>
        </div>
    ) 
}

export default Header;