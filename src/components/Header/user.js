import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from './Login';
import Logout from './Logout';


function UserState() {

    const {user} = useAuth0()

    const status =typeof JSON.stringify(user, null, 2)==="undefined"?<LoginButton />:<Logout />;

    console.log(JSON.stringify(user, null, 2));

  return(
    <span>
        {status}
    </span>)
    
}

export default UserState;