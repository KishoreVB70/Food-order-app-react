import { Link } from "react-router-dom";

const Footer = () => (
    <div className="flex p-2 m-2 border-blue-950 border items-center justify-center"  >
        <ul className="flex  w-full py-2 px-3 items-center justify-between " >
            <li className="mx-2 hover:text-icon2 flex items-center">Copyright</li>
            <li className="mx-2 hover:text-icon2 flex items-center">Socials</li>
            <li className="mx-2 hover:text-icon2 flex items-center">Address</li>
            <li className="mx-2 hover:text-icon2 flex items-center">
                <Link to={"/contact"} >Contact Us</Link>
            
            </li>
        </ul>
    </div>
)

export default Footer;