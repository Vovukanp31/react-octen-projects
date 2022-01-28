import React from 'react';
import css from './User.module.css'

const User = ({user}) => {

    const {name, username, email} = user;

    return (
        <div className={css.userContainer}>
            <div>{name} - {username} - {email}</div>
        </div>
    );
};

export default User;