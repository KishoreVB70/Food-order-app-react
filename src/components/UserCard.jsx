import React from 'react'

const UserCard = ({name}) => {
  return (
    <div className='user-card' >
        <h1>Name: Show down {name}</h1>
        <h1>Location: Indiana Pacers</h1>
        <h1>Contact: Twitter</h1>
    </div>
  )
}

export default UserCard