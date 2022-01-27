import React from 'react';
import {NavLink} from "react-router-dom";
import css from './header.module.css'

const Header = () => {
    return (
        <div className={css.module}>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/posts'}>Posts</NavLink>
            <NavLink to={'/users'}>Users</NavLink>
        </div>
    );
};

export default Header;