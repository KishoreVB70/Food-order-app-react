import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            bot: "Moto"
        }
    }

    render() {
        const {count, bot} = this.state;
        const {name} = this.props;

        const increment = () => {
            this.setState({
                count: this.state.count+1
            });
        }

        return (
            <div className='user-card' >
                <h1>Name: Show down {name} </h1>
                <h1>Location: Indiana Pacers {count}</h1>
                <button onClick={increment} >Increase count</button>
                <h1>Contact: Twitter {bot}</h1>
            </div>
        )
    }
}

export default UserClass;