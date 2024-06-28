import UserCard from "./UserCard";
import UserClass from "./UserClass";
import { Component } from "react";

//context
import UserContext from "../utils/UserContext"
class AboutUs extends Component {
    constructor(props) {
        super(props);
        // console.log("About constructor");

    }

    componentDidMount() {
        // console.log("About mounted");
    }

    render() {
        return (
            <div className="aboutus">
                <div>User Name: 
                    <UserContext.Consumer>
                        {({loggedUser}) => <h1 className="text-lg font-bold " >{loggedUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <h1>We are Swiggy</h1>
                <h1>Here are our members:</h1>
                <UserClass />
            </div>
        )
    }
}

export default AboutUs;