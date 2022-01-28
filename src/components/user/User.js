import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";

import css from './user.module.css';

const User = ({user}) => {

    const {id, name} = user;

    let albumsNav = useNavigate()
    return (
        <div className={css.userLink}>
            <NavLink key={id} to={`${id}`} state={user}>User id:<span>{id}</span>, Name of the user:{name}.   <span>Get details</span></NavLink>

            <button onClick={() => {
                albumsNav(`${id}/albums`, {state:user})
            }}>Albums of user</button>
        </div>
    );
};

export default User;