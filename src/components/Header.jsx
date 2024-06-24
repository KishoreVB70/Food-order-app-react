import { useState } from "react";
import { Link } from "react-router-dom";
const Header = ({appLogo}) => { 

    //State variable
    const [login, setLogin] = useState("Login");

    const handleLogin = () => {
        setLogin(data => data==="Login"?"Logout":"Login");
    }

    return (
        <div className="header" >
            <div className="logo-container">
                <img  className="logo" src={appLogo} />
            </div>
            <div className="nav-items" >
                <ul>
                    <li>
                         <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>AboutUs</Link>
                    </li>
                    <li>Help</li>
                    <li>Cart</li>
                    
                    <button onClick={handleLogin} className="login-btn" >{login}</button>
                </ul>
            </div>
        </div>
    ) 
}

export default Header;