import React from 'react';

import css from './userDetails.module.css'

const UserDetails = ({user, getUserId}) => {

    const {id, name, username, address, phone, email, website} = user;

    return (
        <div className={css.userDetailsContainer}>
            <div>User id - {id}</div>
            <div>Name of user - {name}</div>
            <div>Username - {username}</div>
            <div>Street - {address?.street}</div>
            <div>Phone number - {phone}</div>
            <div>User email - {email}</div>
            <div>Website - {website}</div>

            <button onClick={() => {
                getUserId(id);

            }}>User posts
            </button>
        </div>
    );
};

export default UserDetails;