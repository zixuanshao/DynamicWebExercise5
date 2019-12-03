import React from "react";

import UserInformation from '../../components/UserProfileComponents/index';

export default function UserProfile({user}){
    return <div>
        <h1>UserProfile for {user.email && user.email}</h1>
        <UserInformation email={user.email ? user.email : 'whoops'}/>
    </div>
}