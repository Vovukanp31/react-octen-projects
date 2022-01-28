import React from 'react';
import {Outlet, useLocation, useNavigate} from "react-router-dom";

import css from './userDetails.module.css'

const UserDetails = () => {

    const {state: user} = useLocation();

    const {name, username, phone, website, email, address: {city, street}, company: {name: companyName}} = user;

    let userPostsNav = useNavigate()

    return (
        <div className={css.userDetailsContainer}>
            <div className={css.userDetailsContainerElements}>
                <p>Name of user: {name};</p>
                <p>Username: {username};</p>
                <p>User phone: {phone};</p>
                <p>User website: {website};</p>
                <p>User email: {email};</p>
                <p>Address: <ul>
                    <li>City: {city};</li>
                    <li>Street: {street};</li>
                </ul></p>
                <p>Company name: {companyName};</p>

                <button onClick={() => {
                    userPostsNav('posts', {state:user});
                }}>Show all user posts</button>
            </div>

            <Outlet/>
        </div>
    );
};

export default UserDetails;