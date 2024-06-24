import { Link } from "react-router-dom";

const Footer = () => (
    <div className="footer" >
        <ul>
            <li>Copyright</li>
            <li>Socials</li>
            <li>Address</li>
            <li>
                <Link to={"/contact"} >Contact Us</Link>
                
            </li>
        </ul>
    </div>
)

export default Footer;