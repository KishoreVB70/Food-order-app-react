import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: {}
        }
        // console.log(this.props.name + "User constructor");
    }

    async componentDidMount() {
        const _data = await fetch("https://api.github.com/users/kishorevb70");
        const data = await _data.json();
        this.setState({
            userData: data
        })
    }

    render() {
        const {userData} = this.state
        const {name, location, public_repos, followers, avatar_url } = userData;

        // console.log(this.props.name + "User render");

        return (
            Object.keys(userData).length === 0
                ?(
                    <div className='user-card' ></div>
                )
                :(
                    <div className='user-card' >
                        <img src={avatar_url} alt="Github avatar" className="logo" />
                        <h1>Name:{name} </h1>
                        <h1>Location: {location}</h1>
                        <h1>Repos: {public_repos}</h1>
                        <h1>Followers: {followers}</h1>
                    </div>
                )
        )
    }
}

export default UserClass;