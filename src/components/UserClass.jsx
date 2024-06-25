import React from "react";

class UserClass extends React.Component {
    render() {
        return (
            <div className='user-card' >
                <h1>Name: Show down {this.props.name} </h1>
                <h1>Location: Indiana Pacers</h1>
                <h1>Contact: Twitter</h1>
            </div>
        )
    }
}

export default UserClass;