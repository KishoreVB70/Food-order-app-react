import UserCard from "./UserCard";
import UserClass from "./UserClass";

const AboutUs = () => {
    return (
        <div className="aboutus">
            <h1>We are Swiggy</h1>
            <h1>Here are our members:</h1>
            <UserCard name="function" />
            <UserClass name="Class" />
        </div>
    )
}
export default AboutUs;