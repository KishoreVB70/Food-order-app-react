const Header = ({appLogo}) => (
    <div className="header" >
        <div className="logo-container">
            <img  className="logo" src={appLogo} />
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

export default Header;