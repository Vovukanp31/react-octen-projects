import React from 'react';
import {NavLink} from "react-router-dom";

const User = ({user}) => {

    const {id, name} = user;
    return (
        <div>
            <NavLink key={id} to={`${id}`} state={user}>User id:<span>{id}</span>, Name of the user:{name}.   <span>Get details</span></NavLink>
        </div>
    );
};

export default User;