import React from 'react';
import css from './User.module.css'

const User = ({user, chooseUser}) => {

    const {name} = user;

    return (
        <div className={css.user}>
            <div>{name}</div>
            <button onClick={() => chooseUser(user)}>Details</button>
        </div>
    );
};

export default User;