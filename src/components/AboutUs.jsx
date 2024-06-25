import UserCard from "./UserCard";
import UserClass from "./UserClass";
import { Component } from "react";

class AboutUs extends Component {
    constructor(props) {
        super(props);
        // console.log("About constructor");

    }

    componentDidMount() {
        // console.log("About mounted");
    }

    render() {
        console.log("About render");
        return (
            <div className="aboutus">
                <h1>We are Swiggy</h1>
                <h1>Here are our members:</h1>
                <UserClass />
            </div>
        )
    }
}

export default AboutUs;