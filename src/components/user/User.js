import React from 'react';
import css from './User.module.css'

const User = ({user, chooseUser}) => {

    const {name} = user;

    return (
        <div className={css.dFlex}>
            <div>{name}</div>
            <button onClick={() => chooseUser(user)}>Details</button>
        </div>
    );
};

export default User;