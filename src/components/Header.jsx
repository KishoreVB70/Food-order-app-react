import { useState } from "react";

const Header = ({appLogo}) => { 

    //State variable
    const [login, setLogin] = useState("Login");

    const handleLogin = () => {
        login==="Login"
            ?setLogin("Logout")
            :setLogin("Login")
    }

    return (
        <div className="header" >
            <div className="logo-container">
                <img  className="logo" src={appLogo} />
            </div>
            <div className="nav-items" >
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Help</li>
                    <li>Cart</li>
                    <button onClick={handleLogin} className="login-btn" >{login}</button>
                </ul>
            </div>
        </div>
    ) 
}

export default Header;