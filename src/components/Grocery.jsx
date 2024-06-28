import React, {useContext} from 'react';
import UserContext from '../utils/UserContext';

function Grocery() {

  const {loggedUser, setUserName} = useContext(UserContext);

  return (
    <div className='body' >
        <h1>This is the grocery page, {loggedUser}</h1>
    </div>
  )
}

export default Grocery