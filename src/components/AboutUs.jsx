import UserCard from "./UserCard";
import UserClass from "./UserClass";
import { Component } from "react";

class AboutUs extends Component {
    render() {
        return (
            <div className="aboutus">
                <h1>We are Swiggy</h1>
                <h1>Here are our members:</h1>
                <UserClass name="Class" />
            </div>
        )
    }
}

export default AboutUs;