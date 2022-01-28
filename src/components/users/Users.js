import React from 'react';

import User from "../user/User";
import css from './users.module.css'

const Users = ({user}) => {
    console.log(user);
    return (

        <div className={css.usersContainer}>
            {
                user.map(value => {
                    return <User key={value.id} user={value}/>
                })
            }
        </div>
    );
};

export default Users;